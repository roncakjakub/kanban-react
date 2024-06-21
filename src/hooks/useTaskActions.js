import { useDispatch } from "react-redux";
import { updateTask, removeTask } from "../store/boards-slice";
import { closeModal, openModal, setModalData } from "../store/modal-slice";
import { useState, useEffect } from "react";

const useTaskActions = (modalData) => {
  const dispatch = useDispatch();
  const { task, boardName, columName } = modalData;

  const [currentStatus, setCurrentStatus] = useState(task.status);

  useEffect(() => {
    if (task) {
      setCurrentStatus(task.status);
    }
  }, [task]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    const updatedTask = { ...task, status: newStatus, oldTask: task };
    setCurrentStatus(newStatus);
    dispatch(updateTask({ boardName, task: updatedTask, }));
    dispatch(setModalData({ boardName, columName, task: updatedTask}));
  };

  const handleDeleteTask = () => {
    dispatch(removeTask({ boardName, taskTitle: task.title }));
    dispatch(closeModal());
  };

  const openActionModal = () => {
    dispatch(openModal(["actionModal", "edit", "task"]));
  };

  const actionMenuOptions = [
    {
      label: "Edit",
      action: openActionModal,
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
