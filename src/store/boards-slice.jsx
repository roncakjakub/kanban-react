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

// refactor
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
  addTask,
  updateTask,
  removeTask,
  updateSubtaskStatus,
} = boardsSlice.actions;

export { selectBoard };

export default boardsSlice;
