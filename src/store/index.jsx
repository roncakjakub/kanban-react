import { configureStore } from "@reduxjs/toolkit";

import boardsSlice from "./boards-slice";
import modalSlice from "./modal-slice";
import sidebarSlice from "./sidebar-sice";

const store = configureStore({
  reducer: {
    boardsState: boardsSlice.reducer,
    modalState: modalSlice.reducer,
    sidebarState: sidebarSlice.reducer,
  },
});

export default store;
