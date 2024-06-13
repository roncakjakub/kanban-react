import { createSlice } from "@reduxjs/toolkit";
import { extractColumns } from "../helpers/helpers";

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

export const { setBoardName } = boardsSlice.actions;
export { selectColumnDataByType };

export default boardsSlice;
