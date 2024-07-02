import { useDispatch } from "react-redux";
import { updateTask, addTask } from "../store/boards-slice";
import { closeModal } from "../store/modal-slice";

const useHandleTaskSubmit = (subtasks, setSubtasks, type, mode, boardName, columnName, task, currentStatus) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const newSubtasks = subtasks.map((subtask, index) => ({
      ...subtask,
      title: fd.get(`subtask-${index}`),
    }));
   
      const taskData = {
        title: fd.get("title"),
        description: fd.get("description"),
        subtasks: newSubtasks,
        status: fd.get("status"),
        oldTask: task,
      };

      if (mode === "edit") {
        dispatch(updateTask({ boardName, columnName, task: taskData }));
      } else {
        dispatch(
          addTask({ boardName, columnName: currentStatus, task: taskData })
        );
      }

    dispatch(closeModal());
  };

  return handleSubmit;
};

export default useHandleTaskSubmit;