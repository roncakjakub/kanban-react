import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal } from "../store/modal-slice";
import { useCallback } from "react";

const useModalHandler = () => {
  const dispatch = useDispatch();
  const currentBoardName = useSelector((store) => store.boardsState.boardName);

  // refactor
  const handleOpenModal = useCallback((taskData, modalSettings, columnName = "") => {
    const modalData = {
      task: taskData,
      boardName: currentBoardName,
      columnName: columnName
    };
    
    dispatch(openModal([modalSettings.name, modalSettings.mode, modalSettings.type]));
    dispatch(setModalData(modalData));
  }, [dispatch, currentBoardName]);

  return {
    handleOpenModal,
  };
};

export default useModalHandler;
