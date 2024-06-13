import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalData: [] },
  reducers: {
    //showModal: (state, action),
    //setModalState: (state, action),
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
