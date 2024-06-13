import { createPortal } from "react-dom";

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  background: "#1E1E1E",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  color: "white",
};

const Modal = ({ data }) => {
  console.log(data);
  // TODO
  return createPortal(
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>Modal</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
