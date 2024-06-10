const Board = ({ task = "", subtasks }) => {
  const completedSubtasksCount = subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const allSubtasksCount = subtasks.length;
  return (
    <div className="bg-mediumGray my-3 py-5 px-4 rounded-md w-11/12">
      <p className="text-white text-sm break-words font-bold py-1">{task}</p>
      <p className="text-grayBlue text-xs font-bold">
        {completedSubtasksCount} of {allSubtasksCount} subtasks
      </p>
    </div>
  );
};

export default Board;
