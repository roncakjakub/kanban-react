import { createSlice, configureStore } from "@reduxjs/toolkit";
import { extractColumns } from "../helpers/helpers";

const platformLaunchColumns = ["Todo", "Doing", "Done"];
const marketingPlanColumns = ["Todo", "Doing", "Done"];
const roadmapColumns = ["Now", "Next", "Later"];

const platformLaunchData = extractColumns(
  "Platform Launch",
  platformLaunchColumns
);
const marketingPlanData = extractColumns(
  "Marketing Plan",
  marketingPlanColumns
);
const roadmapData = extractColumns("Roadmap", roadmapColumns);

const initialState = {
  platformLaunchData,
  marketingPlanData,
  roadmapData,
  category: "Platform Launch",
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

const selectColumnDataByType = (state, type) => {
  switch (state.category) {
    case "Platform Launch":
      return state.platformLaunchData.columns[type];
    case "Marketing Plan":
      return state.marketingPlanData.columns[type];
    default:
      return {};
  }
};

const store = configureStore({
  reducer: boardsSlice.reducer,
});

export const { setCategory } = boardsSlice.actions;
export { selectColumnDataByType };

export default store;
