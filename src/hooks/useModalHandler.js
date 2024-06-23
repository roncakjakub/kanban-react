import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal } from "../store/modal-slice";

const useModalHandler = () => {
  const dispatch = useDispatch();
  const currentBoardName = useSelector((store) => store.boardsState.boardName);
  const currentBoard = useSelector((store) =>
    store.boardsState.boards.find((board) => board.name === currentBoardName)
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const findColumnName = (taskTitle) => {
    if (!currentBoard) return "Todo";

    for (const [columnName, column] of Object.entries(currentBoard.columns)) {
      if (column.tasks.some((task) => task.title === taskTitle)) {
        return capitalizeFirstLetter(columnName);
      }
    }
    return "Todo";
  };

  const handleOpenModal = (taskData, modalSettings) => {
    const columnName = taskData?.status || findColumnName(taskData?.title);
    const modalData = {
      task: taskData,
      boardName: currentBoardName,
      columnName,
    };

    dispatch(openModal([modalSettings.name, modalSettings.mode, modalSettings.type]));
    dispatch(setModalData(modalData));
  };

  return {
    handleOpenModal,
  };
};

export default useModalHandler;
