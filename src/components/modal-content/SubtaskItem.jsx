import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

const SubtaskItem = ({ subtask, onToggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkGray" : "bg-lightBlue"
      } flex items-center p-3 space-x-2`}
    >
      <label className="flex items-center space-x-4 cursor-pointer">
        <input
          type="checkbox"
          checked={subtask.isCompleted}
          onChange={onToggle}
          className="custom-checkbox h-5 w-5"
        />
        <span
          className={`text-sm ${
            subtask.isCompleted
              ? "line-through text-grayBlue"
              : theme === "dark"
              ? "text-white"
              : "text-darkBlue"
          }`}
        >
          {subtask.title}
        </span>
      </label>
    </div>
  );
};

export default SubtaskItem;
