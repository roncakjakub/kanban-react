import { useContext } from "react";
import { calculateCompletedSubtasks } from "../../helpers/helpers";

import ThemeContext from "../../context/ThemeContext";

const Task = ({ onClick, task }) => {
  const { theme } = useContext(ThemeContext);
  const { completedSubtasksCount, allSubtasksCount } = calculateCompletedSubtasks(task);

  return (
    <div
      onClick={onClick}
      className={`${
        theme === "dark" ? "bg-mediumGray" : "bg-white"
      } my-3 py-5 px-4 rounded-md w-11/12 cursor-pointer`}
    >
      <p
        className={`${
          theme === "dark" ? "text-white" : "text-mediumGray"
        } text-sm break-words font-bold py-1`}
      >
        {task.title}
      </p>
      <p className="text-grayBlue text-xs font-bold">
        {completedSubtasksCount} of {allSubtasksCount} subtasks
      </p>
    </div>
  );
};

export default Task;
