import { removeBoard, removeTask } from "../../store/boards-slice";
import { closeModal, openModal } from "../../store/modal-slice";

export const getTaskMenuOptions = (dispatch, boardName, task) => [
    {
      label: "Edit",
      action: () => dispatch(openModal(["taskModal", "edit", "task"])),
    },
    {
      label: "Delete",
      action: () => {
        dispatch(removeTask({ boardName, taskTitle: task.title }));
        dispatch(closeModal());
      },
    },
  ];
  
  export const getBoardMenuOptions = (dispatch, boardName) => [
    {
      label: "Edit",
      action: () => dispatch(openModal(["boardModal", "edit", "board"])),
    },
    {
      label: "Delete",
      action: () => {
        dispatch(removeBoard({ boardName }));
        dispatch(closeModal());
      },
    },
  ];
  