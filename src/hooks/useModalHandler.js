import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal } from "../store/modal-slice";

const useModalHandler = () => {
  const dispatch = useDispatch();
  const currentBoardName = useSelector((store) => store.boardsState.boardName);

  const handleOpenModal = (taskData, modalSettings) => {
    const modalData = {
      task: taskData,
      boardName: currentBoardName,
      columnName: taskData?.status || "Todo",
    };
   
    dispatch(openModal([modalSettings.name, modalSettings.mode, modalSettings.type]));
    dispatch(setModalData(modalData));
  };

  return {
    handleOpenModal,
  };
};

export default useModalHandler;