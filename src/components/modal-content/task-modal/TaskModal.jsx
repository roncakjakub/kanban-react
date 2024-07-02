import { useContext } from "react";
import { useSelector } from "react-redux";
import ThemeContext from "../../../context/ThemeContext";

import TaskForm from "./TaskForm";

const TaskModal = () => {
  const { theme } = useContext(ThemeContext);
  const mode = useSelector((state) => state.modalState.mode);

  return (
    <div className="p-4 rounded-lg">
      <h2
        className={`${
          theme === "dark" ? "text-white" : "text-darkBlue"
        } text-xl font-bold mb-4`}
      >
        {mode === "edit" ? "Edit Task" : "Add New Task"}
      </h2>
      <TaskForm />
    </div>
  );
};

export default TaskModal;
