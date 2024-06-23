import { useDispatch } from "react-redux";
import { addBoard, updateBoard } from "../store/boards-slice";
import { closeModal } from "../store/modal-slice";

const useHandleBoardSubmit = (title, columns, mode, boardName) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "edit") {
      const boardData = {
        name: title,
        columns: columns.map((col) => ({ name: col.name, tasks: col.tasks })),
      };  

      dispatch(updateBoard({ oldBoardName: boardName, updatedBoard: boardData }));
    } else {
      const boardData = {
        name: title,
        columns: columns.map((col) => ({ name: col.name, tasks: [] })),
      };
      dispatch(addBoard({ board: boardData }));
    }

    dispatch(closeModal());
  };

  return handleSubmit;
};

export default useHandleBoardSubmit;
