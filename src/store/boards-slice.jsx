import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import { extractColumns } from "../helpers/helpers";

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
    addTask: (state, action) => {
      const { boardName, columnName, task } = action.payload;
      const board = state.boards.find((board) => board.name === boardName);
      const column = board.columns[columnName.toLowerCase()];

      column.tasks.push(task);
    },
    updateTask: (state, action) => {
      const { boardName, columnName, task } = action.payload;
      const board = state.boards.find((board) => board.name === boardName);

      const oldColumn = board.columns[columnName.toLowerCase()];
      const newColumn = board.columns[task.newStatus.toLowerCase()];

      oldColumn.tasks = oldColumn.tasks.filter((t) => t.title !== task.title);
      newColumn.tasks.push({ ...task, status: task.newStatus });
    },
    removeTask: (state, action) => {
      const { boardName, taskTitle } = action.payload;
      const board = state.boards.find((board) => board.name === boardName);

      Object.keys(board.columns).forEach((columnKey) => {
        const column = board.columns[columnKey];
        column.tasks = column.tasks.filter((task) => task.title !== taskTitle);
      });
    },
  },
});

const selectBoard = (state) =>
  state.boards.find((board) => board.name === state.boardName);
const selectColumnDataByType = createSelector(
  [selectBoard, (_, type) => type],
  (board, type) => {
    if (board) {
      const column = board.columns[type.toLowerCase()];
      return column
        ? { name: type, tasks: column.tasks }
        : { name: type, tasks: [] };
    }
    return { name: type, tasks: [] };
  }
);

export const { setBoardName, addTask, updateTask, removeTask } = boardsSlice.actions;
export { selectColumnDataByType };

export default boardsSlice;
