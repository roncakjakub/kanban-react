import { useContext, useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";

import ThemeContext from "../../../context/ThemeContext";
import useHandleTaskSubmit from "../../../hooks/useHandleTaskSubmit";
import useCurrentBoard from "../../../hooks/useCurrentBoard";
import subtaskReducer from "../../../reducers/subtaskReducer";

import TaskForm from "./TaskForm";

const TaskModal = () => {
  const { theme } = useContext(ThemeContext);
  const modalData = useSelector((state) => state.modalState.modalData);
  const mode = useSelector((state) => state.modalState.mode);
  const type = useSelector((state) => state.modalState.typeOfEditingItem);

  const { task, boardName, columnName } = modalData;
  const { defaultStatus } = useCurrentBoard(boardName);

  const [subtasks, dispatchSubtasks] = useReducer(
    subtaskReducer,
    task?.subtasks || []
  );
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [currentStatus, setCurrentStatus] = useState(
    task?.status || defaultStatus
  );

  useEffect(() => {
    if (mode === "edit" && task) {
      setTitle(task.title);
      setDescription(task.description);
      dispatchSubtasks({ type: "SET_SUBTASKS", subtasks: task.subtasks });
      setCurrentStatus(task.status);
    }
  }, [mode, task]);

  const handleSubmit = useHandleTaskSubmit(
    subtasks,
    dispatchSubtasks,
    type,
    mode,
    boardName,
    columnName,
    task,
    currentStatus
  );

  return (
    <div className="p-4 rounded-lg">
      <h2
        className={`${
          theme === "dark" ? "text-white" : "text-darkBlue"
        } text-xl font-bold mb-4`}
      >
        {mode === "edit"
          ? type === "task"
            ? "Edit Task"
            : "Edit Board"
          : type === "task"
          ? "Add New Task"
          : "Add New Board"}
      </h2>
      <TaskForm
        theme={theme}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        subtasks={subtasks}
        dispatchSubtasks={dispatchSubtasks}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
        handleSubmit={handleSubmit}
        type={type}
        mode={mode}
      />
    </div>
  );
};

export default TaskModal;
