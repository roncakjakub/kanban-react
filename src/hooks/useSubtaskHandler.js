import { useDispatch } from "react-redux";
import { updateSubtaskStatus } from "../store/boards-slice";

const useSubtaskHandler = (boardName, currentStatus, task) => {
  const dispatch = useDispatch();

  const handleSubtaskToggle = (index) => {
    dispatch(
      updateSubtaskStatus({
        boardName,
        columnName: currentStatus,
        taskTitle: task.title,
        subtaskIndex: index,
      })
    );
  };

  return {
    handleSubtaskToggle,
  };
};

export default useSubtaskHandler;
