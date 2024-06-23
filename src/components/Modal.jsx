import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modal-slice";

import TaskDetail from "./modal-content/TaskDetail";
import TaskModal from "./modal-content/TaskModal";
import BoardModal from "./modal-content/BoardModal";

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  color: "white",
};

const Modal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modalState.modalData);
  const modalType = useSelector((state) => state.modalState.modalType);

  let modalContent;
  switch (modalType) {
    case "taskDetail":
      modalContent = <TaskDetail modalData={modalData} />;
      break;
    case "taskModal":
      modalContent = <TaskModal />;
      break;
    case "boardModal":
      modalContent = <BoardModal />;
      break;
    default:
      modalContent = null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <div onClick={handleOverlayClick} style={modalOverlayStyle}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-mediumGray"
        style={modalContentStyle}
      >
        {modalContent}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
