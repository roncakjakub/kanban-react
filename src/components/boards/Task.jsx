import React from "react";
import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

const Task = React.memo(({ onClick, task }) => {
  const { theme } = useContext(ThemeContext);

  const completedSubtasksCount = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const allSubtasksCount = task.subtasks.length;

  return (
    <div
      onClick={onClick}
      className={`${
        theme === "dark" ? "bg-mediumGray" : "bg-white"
      } my-3 py-5 px-4 rounded-md w-11/12`}
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
});

export default Task;
