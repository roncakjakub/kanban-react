const SubtaskItem = ({ subtask, onToggle }) => {
  return (
    <div className="flex items-center p-3 bg-darkGray space-x-2">
      <label className="flex items-center space-x-4 cursor-pointer">
        <input
          type="checkbox"
          checked={subtask.isCompleted}
          onChange={onToggle}
          className="custom-checkbox h-5 w-5"
        />
        <span
          className={`text-sm ${
            subtask.isCompleted ? "line-through text-grayBlue" : "text-white"
          }`}
        >
          {subtask.title}
        </span>
      </label>
    </div>
  );
};

export default SubtaskItem;
