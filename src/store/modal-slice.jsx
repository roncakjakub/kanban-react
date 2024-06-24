import { createSlice } from "@reduxjs/toolkit";

// refactor
const initialState = {
  isActiveModal: false,
  modalData: [],
  modalType: "",
  mode: "",
  typeOfEditingItem: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
    openModal: (state, action) => {
      const [name, mode, type] = action.payload;
      state.isActiveModal = true;
      state.modalType = name;
      state.mode = mode;
      state.typeOfEditingItem = type;
    },
    closeModal: (state) => {
      state.isActiveModal = false;
      state.modalType = "";
      state.modalData = {};
    },
  },
});

export const { setModalData, openModal, closeModal } = modalSlice.actions;

export default modalSlice;
