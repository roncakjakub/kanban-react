import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
import useHandleTaskSubmit from "../hooks/useHandleTaskSubmit";
import useCurrentBoard from "../hooks/useCurrentBoard";
import subtaskReducer from "../reducers/subtaskReducer";

const TaskModalContext = createContext();

const TaskModalProvider = ({ children }) => {
  const modalData = useSelector((state) => state.modalState.modalData);
  const type = useSelector((state) => state.modalState.type);
  const mode = useSelector((state) => state.modalState.mode);

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
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      dispatchSubtasks({ type: "SET_SUBTASKS", subtasks: task.subtasks });
      setCurrentStatus(task.status);
    }
  }, [task]);

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
    <TaskModalContext.Provider
      value={{
        title,
        setTitle,
        description,
        setDescription,
        subtasks,
        dispatchSubtasks,
        currentStatus,
        setCurrentStatus,
        handleSubmit,
      }}
    >
      {children}
    </TaskModalContext.Provider>
  );
};

export const useTaskModal = () => useContext(TaskModalContext);

export { TaskModalProvider };
export default TaskModalContext;
