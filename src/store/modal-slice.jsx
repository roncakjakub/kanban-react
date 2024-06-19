import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isActiveModal: false,
  modalData: [],
  modalType: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
    openModal: (state, action) => {
      state.isActiveModal = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isActiveModal = false;
      state.modalType = "";
      state.modalData = {};
    },
    //showModal: (state, action),
    //setModalState: (state, action),
  },
});

export const { setModalData, openModal, closeModal } = modalSlice.actions;

export default modalSlice;
