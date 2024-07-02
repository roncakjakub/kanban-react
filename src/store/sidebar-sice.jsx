import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isVisible: true,
  },
  reducers: {
    showSidebar(state) {
      state.isVisible = true;
    },
    hideSidebar(state) {
      state.isVisible = false;
    },
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice;
