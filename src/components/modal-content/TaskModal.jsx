import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { updateTask } from "../../store/boards-slice";
import { addTask } from "../../store/boards-slice";
import { closeModal } from "../../store/modal-slice";

import CrossIcon from "../icons/CrossIcon";
import StatusSelect from "./StatusSelect";

// REFACTOR

const TaskModal = ({ modalData, mode }) => {
  const dispatch = useDispatch();
  const { task, boardName, columnName } = modalData;

  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task.description);
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [currentStatus, setCurrentStatus] = useState(task.status);

  useEffect(() => {
    if (mode === "edit" && task) {
      setTitle(task.title);
      setDescription(task.description);
      setSubtasks(task.subtasks);
      setCurrentStatus(task.status);
    }
  }, [mode, task]);

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
    newSubtasks.splice(index, 1);
    setSubtasks(newSubtasks);
  };

  const handleStatusChange = (event) => {
    setCurrentStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const newSubtasks = subtasks.map((subtask, index) => ({
      ...subtask,
      title: fd.get(`subtask-${index}`),
    }));
    const taskData = {
      title: fd.get("title"),
      description: fd.get("description"),
      subtasks: newSubtasks,
      status: fd.get("status"),
    };

    if (mode === "edit") {
      dispatch(updateTask({ boardName, columnName, task: taskData }));
    } else {
      dispatch(addTask({ boardName, columnName, task: taskData }));
    }
    dispatch(closeModal());
  };

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">
        {mode === "edit" ? "Edit Task" : "Add New Task"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm text-white font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-2 rounded-md bg-mediumGray border border-grayBlue text-white"
            />
          </div>
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
              className="w-full p-2 rounded-md bg-mediumGray border border-grayBlue text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-white font-bold mb-2">
              Subtasks
            </label>
            {subtasks.map((subtask, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  name={`subtask-${index}`}
                  value={subtask.title}
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                  placeholder="Subtask"
                  className="flex-grow p-2 rounded-md bg-mediumGray border border-grayBlue text-white"
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
              className="text-white bg-purple-500 rounded-md p-2"
            >
              + Add New Subtask
            </button>
          </div>
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
          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded-md"
          >
            {mode === "edit" ? "Save Changes" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
