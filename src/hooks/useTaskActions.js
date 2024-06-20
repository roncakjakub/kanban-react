import { useDispatch } from "react-redux";
import { updateTask, removeTask } from "../store/boards-slice";
import { closeModal, openModal } from "../store/modal-slice";
import { useState, useEffect } from "react";

const useTaskActions = (modalData) => {
  const dispatch = useDispatch();
  const { task, boardName, columnName } = modalData;

  const [currentStatus, setCurrentStatus] = useState(task.status);

  useEffect(() => {
    if (task) {
      setCurrentStatus(task.status);
    }
  }, [task]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    const updatedTask = { ...task, newStatus };
    setCurrentStatus(newStatus);
    dispatch(updateTask({ boardName, task: updatedTask }));
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
      action: openTaskModal,
    },
    {
      label: "Delete",
      action: handleDeleteTask,
    },
  ];

  return {
    currentStatus,
    handleStatusChange,
    actionMenuOptions,
  };
};

export default useTaskActions;
