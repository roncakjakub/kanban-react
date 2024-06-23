import { useDispatch } from "react-redux";
import { addBoard, updateBoard } from "../store/boards-slice";
import { closeModal } from "../store/modal-slice";
import { prepareBoardData } from "../helpers/helpers";

const useHandleBoardSubmit = (title, columns, mode, boardName) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "edit") {
      const boardData = prepareBoardData(title, columns, true);
      dispatch(updateBoard({ oldBoardName: boardName, updatedBoard: boardData }));
    } else {
      const boardData = prepareBoardData(title, columns);
      dispatch(addBoard({ board: boardData }));
    }

    dispatch(closeModal());
  };

  return handleSubmit;
};

export default useHandleBoardSubmit;
