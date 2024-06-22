import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CrossIcon from "../icons/CrossIcon";
import StatusSelect from "./StatusSelect";
import useHandleSubmit from "../../hooks/useHandleSubmit";

// refactor
const TaskModal = () => {
  const modalData = useSelector((state) => state.modalState.modalData);
  const mode = useSelector((state) => state.modalState.mode);
  const type = useSelector((state) => state.modalState.typeOfEditingItem);

  const { task, boardName, columnName } = modalData;

  const currentBoard = useSelector((state) =>
    state.boardsState.boards.find((board) => board.name === boardName)
  );

  const columns = Object.values(currentBoard?.columns || {});
  const defaultStatus = columns.length > 0 ? columns[0].name : "Todo";

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [currentStatus, setCurrentStatus] = useState(
    task?.status || defaultStatus
  );

  const [subtasks, setSubtasks] = useState(task?.subtasks || []);

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { title: "", isCompleted: false }]);
  };

  const handleSubtaskChange = (index, value) => {
    const newSubtasks = subtasks.slice();
    newSubtasks[index].title = value;
    setSubtasks(newSubtasks);
  };

  const handleSubtaskRemove = (index) => {
    const newSubtasks = subtasks.slice();
    console.log(newSubtasks);
    newSubtasks.splice(index, 1);
    setSubtasks(newSubtasks);
  };

  useEffect(() => {
    if (mode === "edit" && task) {
      setTitle(task.title);
      setDescription(task.description);
      setSubtasks(task.subtasks);
      setCurrentStatus(task.status);
    }
  }, [mode, task, setSubtasks]);

  const handleStatusChange = (event) => {
    setCurrentStatus(event.target.value);
  };

  const handleSubmit = useHandleSubmit(
    subtasks,
    setSubtasks,
    type,
    mode,
    boardName,
    columnName,
    task,
    currentStatus
  );

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">
        {mode === "edit"
          ? type === "task"
            ? "Edit Task"
            : "Edit Board"
          : type === "task"
          ? "Add New Task"
          : "Add New Board"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm text-white font-bold mb-2"
              htmlFor="title"
            >
              {type === "task" ? "Title" : "Board Name"}
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={type === "task" ? "Title" : "e.g. Web Design"}
              className="w-full py-2 px-3 rounded-md bg-mediumGray border border-grayBlue text-white"
            />
          </div>
          {type === "task" && (
            <div>
              <label
                className="block text-sm text-white font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full py-2 px-3 rounded-md bg-mediumGray border border-grayBlue text-white"
              />
            </div>
          )}
          <div className="space-y-3">
            <label className="block text-sm text-white font-bold mb-2">
              {type === "task" ? "Subtasks" : "Board Columns"}
            </label>
            {subtasks.map((subtask, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  name={`subtask-${index}`}
                  value={subtask.title}
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                  placeholder={type === "task" ? "Subtask" : "Column Name"}
                  className="flex-grow py-2 px-3 rounded-md bg-mediumGray border border-grayBlue text-sm text-white"
                />
                <button
                  type="button"
                  onClick={() => handleSubtaskRemove(index)}
                  className="text-red-500"
                >
                  <CrossIcon />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSubtask}
              className="hover:opacity-70 text-purple text-sm font-bold bg-white w-full bg-purple-500 rounded-full p-3"
            >
              + Add New {type === "task" ? "Subtask" : "Column"}
            </button>
          </div>
          {type === "task" && (
            <div>
              <label
                className="block text-sm text-white font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <StatusSelect
                currentStatus={currentStatus}
                onChange={handleStatusChange}
              />
            </div>
          )}
          <button
            type="submit"
            className="hover:opacity-70 w-full p-2 bg-purple text-white rounded-full"
          >
            {mode === "edit"
              ? "Save Changes"
              : `Create ${type === "task" ? "Task" : "Board"}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
