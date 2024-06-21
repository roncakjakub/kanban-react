import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import TaskDetail from "./modal-content/TaskDetail";
import ActionModal from "./modal-content/ActionModal";

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
  const modalData = useSelector((state) => state.modalState.modalData);
  const modalType = useSelector((state) => state.modalState.modalType);
  const mode = useSelector((state) => state.modalState.mode);
  const type = useSelector((state) => state.modalState.typeOfEditingItem);

  let modalContent;
  switch (modalType) {
    case "taskDetail":
      modalContent = <TaskDetail modalData={modalData} />;
      break;
    case "actionModal":
      modalContent = (
        <ActionModal modalData={modalData} mode={mode} type={type} />
      );
      break;
    default:
      modalContent = null;
  }

  return createPortal(
    <div style={modalOverlayStyle}>
      <div className="bg-mediumGray" style={modalContentStyle}>
        {modalContent}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
