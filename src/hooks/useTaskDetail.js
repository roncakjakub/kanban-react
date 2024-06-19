import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask, removeTask } from "../store/boards-slice";
import { closeModal, openModal } from "../store/modal-slice";
import { calculateCompletedSubtasks } from "../helpers/helpers";

const useTaskDetail = (modalData) => {
    const dispatch = useDispatch();
    const { task, boardName, columnName } = modalData;

    const [currentStatus, setCurrentStatus] = useState(task.status);
  
    useEffect(() => {
      setCurrentStatus(task.status);
    }, [task.status]);
  
    const { completedSubtasksCount, allSubtasksCount } =
      calculateCompletedSubtasks(task);
  
    const handleStatusChange = (event) => {
      const newStatus = event.target.value;
      const updatedTask = { ...task, newStatus };
      setCurrentStatus(newStatus);
      dispatch(updateTask({ boardName, columnName, task: updatedTask }));
    };
  
    const handleDeleteTask = () => {
      dispatch(removeTask({ boardName, taskTitle: task.title }));
      dispatch(closeModal());
    };

    const openTaskModal = () => {
      dispatch(openModal("taskModal"));
    };
  
    const actionMenuOptions = [
      {
        label: "Edit",
        action: openTaskModal
      },
      {
        label: "Delete",
        action: handleDeleteTask,
      },
    ];
  
    return {
      task,
      currentStatus,
      completedSubtasksCount,
      allSubtasksCount,
      handleStatusChange,
      actionMenuOptions,
    };
  };
  
  export default useTaskDetail;