import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import TaskDetail from "./modal-content/TaskDetail";

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

const Modal = ({ modalType = "" }) => {
  const modalData = useSelector((state) => state.modalState.modalData);
  console.log(modalData);

  let modalContent;
  switch (modalType) {
    case "taskDetail":
      modalContent = <TaskDetail />;
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
