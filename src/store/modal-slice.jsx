import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalData: [] },
  reducers: {
    setModalData: (state, action) => {
      state.modalData = action.payload;
    }
    //showModal: (state, action),
    //setModalState: (state, action),
  },
});

export const { setModalData } = modalSlice.actions;

export default modalSlice;
