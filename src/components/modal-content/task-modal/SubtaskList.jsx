import CrossIcon from "../../icons/CrossIcon";

const SubtaskList = ({ theme, subtasks, dispatchSubtasks, type }) => (
  <div className="space-y-3">
    <label className={`${theme === "dark" ? "text-white" : "text-lightGrayText"} block text-sm font-bold mb-2`}>
      {type === "task" ? "Subtasks" : "Board Columns"}
    </label>
    {subtasks.map((subtask, index) => (
      <div key={index} className="flex items-center space-x-2">
        <input
          type="text"
          name={`subtask-${index}`}
          value={subtask.title}
          onChange={(e) =>
            dispatchSubtasks({ type: "UPDATE_SUBTASK", index, value: e.target.value })
          }
          placeholder={type === "task" ? "Subtask" : "Column Name"}
          className={`${theme === "dark" ? "bg-mediumGray text-white" : "bg-white text-darkBlue"} flex-grow py-2 px-3 rounded-md border border-grayBlue text-sm`}
        />
        <button
          type="button"
          onClick={() => dispatchSubtasks({ type: "REMOVE_SUBTASK", index })}
          className="text-red-500"
        >
          <CrossIcon />
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={() => dispatchSubtasks({ type: "ADD_SUBTASK" })}
      className={`${theme === "dark" ? "bg-white" : "bg-lightBlue"} hover:opacity-70 text-purple text-sm font-bold w-full bg-purple-500 rounded-full p-3`}
    >
      + Add New {type === "task" ? "Subtask" : "Column"}
    </button>
  </div>
);

export default SubtaskList;
