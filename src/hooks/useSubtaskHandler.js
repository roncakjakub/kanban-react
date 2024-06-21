import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSubtaskStatus } from "../store/boards-slice";

const useSubtaskHandler = (boardName, currentStatus, task) => {
  const dispatch = useDispatch();
  const [subtasks, setSubtasks] = useState(task?.subtasks || []);

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

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { title: "", isCompleted: false }]);
  };

  const handleSubtaskChange = (index, value) => {
    const newSubtasks = subtasks.slice();
    newSubtasks[index].title = value;
    setSubtasks(newSubtasks);
  };

  const handleSubtaskRemove = (index) => {
    const newSubtasks = subtasks.slice();
    newSubtasks.splice(index, 1);
    setSubtasks(newSubtasks);
  };

  return {
    subtasks,
    setSubtasks,
    handleSubtaskToggle,
    handleAddSubtask,
    handleSubtaskChange,
    handleSubtaskRemove,
  };
};

export default useSubtaskHandler;
