import { createSlice } from "@reduxjs/toolkit";
import { extractColumns } from "../helpers/helpers";
import {
  addTaskReducer,
  updateTaskReducer,
  removeTaskReducer,
  updateSubtaskStatusReducer,
} from "../reducers/taskReducers";

const platformLaunchData = extractColumns("Platform Launch");
const marketingPlanData = extractColumns("Marketing Plan");
const roadmapData = extractColumns("Roadmap");

const initialState = {
  boards: [
    {
      name: "Platform Launch",
      columns: platformLaunchData.columns,
    },
    {
      name: "Marketing Plan",
      columns: marketingPlanData.columns,
    },
    {
      name: "Roadmap",
      columns: roadmapData.columns,
    },
  ],
  boardName: "Platform Launch",
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoardName: (state, action) => {
      state.boardName = action.payload;
    },
    addBoard: (state, action) => {
      const { board } = action.payload;
      const columnsObject = board.columns.reduce((acc, column) => {
        acc[column.name.toLowerCase()] = column;
        return acc;
      }, {});
      state.boards.push({ ...board, columns: columnsObject });
    },
    updateBoard: (state, action) => {
      const { oldBoardName, updatedBoard } = action.payload;
      const existingBoard = state.boards.find(
        (board) => board.name === oldBoardName
      );

      if (existingBoard) {
        existingBoard.name = updatedBoard.name;

        // Map new column names to existing columns, preserving tasks
        const updatedColumns = updatedBoard.columns.reduce((acc, column) => {
          const existingColumn =
            existingBoard.columns[column.name.toLowerCase()];
          acc[column.name.toLowerCase()] = existingColumn
            ? { ...existingColumn, name: column.name }
            : { ...column, tasks: [] }; // In case new columns are added
          return acc;
        }, {});

        existingBoard.columns = updatedColumns;
      }
    },
    removeBoard: (state, action) => {
      const { boardName } = action.payload;
      state.boards = state.boards.filter((board) => board.name !== boardName);

      if (state.boardName === boardName && state.boards.length > 0) {
        state.boardName = state.boards[0].name;
      } else if (state.boards.length === 0) {
        state.boardName = "";
      }
    },
    addTask: addTaskReducer,
    updateTask: updateTaskReducer,
    removeTask: removeTaskReducer,
    updateSubtaskStatus: updateSubtaskStatusReducer,
  },
});

const selectBoard = (state) =>
  state.boards.find((board) => board.name === state.boardName);

export const {
  setBoardName,
  addBoard,
  removeBoard,
  updateBoard,
  addTask,
  updateTask,
  removeTask,
  updateSubtaskStatus,
} = boardsSlice.actions;

export { selectBoard };

export default boardsSlice;
