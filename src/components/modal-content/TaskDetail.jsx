import { useDispatch, useSelector } from "react-redux";
import { calculateCompletedSubtasks } from "../../helpers/helpers";
import { updateTask } from "../../store/boards-slice";

import SettingsIcon from "../icons/SettingsIcon";

const statuses = ["Todo", "Doing", "Done"];

const TaskDetail = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modalState.modalData);
  const { task, boardName, columnName } = modalData;

  const { completedSubtasksCount, allSubtasksCount } =
    calculateCompletedSubtasks(task);

  const handleStatusChange = (event) => {
    const updatedTask = { ...task, status: event.target.value };
    dispatch(updateTask({ boardName, columnName, task: updatedTask }));
  };

  return (
    <div className="p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-xl font-bold">{task.title}</h1>
        <SettingsIcon />
      </div>
      <p className="text-grayBlue text-sm mb-4">{task.description}</p>
      <p className="text-sm text-white font-bold mb-4">
        Subtasks ({completedSubtasksCount} of {allSubtasksCount})
      </p>
      <div className="space-y-4">
        {task.subtasks.map((subtask, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-darkGray space-x-2"
          >
            <label className="flex items-center space-x-4 cursor-pointer">
              <input
                type="checkbox"
                checked={subtask.isCompleted}
                readOnly
                className="custom-checkbox h-5 w-5"
              />
              <span
                className={`text-sm ${
                  subtask.isCompleted
                    ? "line-through text-grayBlue"
                    : "text-white"
                }`}
              >
                {subtask.title}
              </span>
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <label className="block text-sm text-white font-bold mb-2">
          Current Status
        </label>
        <div className="custom-select">
          <select
            value={task.status}
            onChange={handleStatusChange}
            className="block w-full bg-darkGray border border-mediumGray text-white rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          >
            {statuses.map((status) => (
              <option
                key={status}
                value={status}
                className="bg-darkGray text-white"
              >
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
