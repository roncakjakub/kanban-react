import { configureStore } from "@reduxjs/toolkit";

import boardsSlice from "./boards-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: { boardsState: boardsSlice.reducer, modalState: modalSlice.reducer },
});

export default store;
