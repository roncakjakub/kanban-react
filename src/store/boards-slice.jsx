import { createSlice } from "@reduxjs/toolkit";
import { extractColumns } from "../helpers/helpers";

import DATA from "../data.json";

const platformLaunchData = extractColumns("Platform Launch");
const marketingPlanData = extractColumns("Marketing Plan");
const roadmapData = extractColumns("Roadmap");

const initialState = {
  platformLaunchData,
  marketingPlanData,
  roadmapData,
  boardName: "Platform Launch",
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoardName: (state, action) => {
      state.boardName = action.payload;
    },
    updateTask: (state, action) => {
      const { boardName, columnName, task } = action.payload;
      const board = DATA.boards.find((board) => board.name === boardName);
      const column = board.columns.find((col) => col.name === columnName);
      const taskIndex = column.tasks.findIndex((t) => t.title === task.title);
      console.log(column.tasks[taskIndex]);
    }
  },
});

const selectColumnDataByType = (state, type) => {
  switch (state.boardName) {
    case "Platform Launch":
      return state.platformLaunchData.columns[type];
    case "Marketing Plan":
      return state.marketingPlanData.columns[type];
    case "Roadmap":
      return state.roadmapData.columns[type];
    default:
      return {};
  }
};

export const { setBoardName, updateTask } = boardsSlice.actions;
export { selectColumnDataByType };

export default boardsSlice;
