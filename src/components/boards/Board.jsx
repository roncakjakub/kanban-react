import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

const Board = ({ task = "", subtasks }) => {
  const { theme } = useContext(ThemeContext);

  const completedSubtasksCount = subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const allSubtasksCount = subtasks.length;

  return (
    <div
      className={`${
        theme === "dark" ? "bg-mediumGray" : "bg-white"
      } my-3 py-5 px-4 rounded-md w-11/12`}
    >
      <p
        className={`${
          theme === "dark" ? "text-white" : "text-mediumGray"
        } text-sm break-words font-bold py-1`}
      >
        {task}
      </p>
      <p className="text-grayBlue text-xs font-bold">
        {completedSubtasksCount} of {allSubtasksCount} subtasks
      </p>
    </div>
  );
};

export default Board;
