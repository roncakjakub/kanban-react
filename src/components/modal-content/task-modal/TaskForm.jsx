import { useContext, useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import ThemeContext from "../../../context/ThemeContext";
import useHandleTaskSubmit from "../../../hooks/useHandleTaskSubmit";
import useCurrentBoard from "../../../hooks/useCurrentBoard";
import subtaskReducer from "../../../reducers/subtaskReducer";

import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import SubtaskList from "./SubtaskList";
import StatusSelect from "../StatusSelect";

const TaskForm = () => {
  const { theme } = useContext(ThemeContext);
  const modalData = useSelector((state) => state.modalState.modalData);
  const mode = useSelector((state) => state.modalState.mode);
  const type = useSelector((state) => state.modalState.modalType);

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
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <TitleInput title={title} setTitle={setTitle} />
        {type === "taskModal" && (
          <DescriptionInput
            description={description}
            setDescription={setDescription}
          />
        )}
        <SubtaskList subtasks={subtasks} dispatchSubtasks={dispatchSubtasks} />
        {type === "taskModal" && (
          <div>
            <label
              className={`${
                theme === "dark" ? "text-white" : "text-lightGrayText"
              } block text-sm font-bold mb-2`}
              htmlFor="status"
            >
              Status
            </label>
            <StatusSelect
              currentStatus={currentStatus}
              onChange={(e) => setCurrentStatus(e.target.value)}
            />
          </div>
        )}
        <button
          type="submit"
          className="hover:opacity-70 w-full p-2 bg-purple text-white rounded-full"
        >
          {mode === "edit" ? "Save Changes" : "Create Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
