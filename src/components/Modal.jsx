import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // TODO
  return createPortal(<dialog></dialog>, document.getElementById("portal"));
};
