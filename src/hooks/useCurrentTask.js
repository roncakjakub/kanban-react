import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCurrentTask = (boardName, task, currentStatus) => {
  const [currentTask, setCurrentTask] = useState(task);

  const selectedTask = useSelector((state) => {
    const board = state.boardsState.boards.find(
      (board) => board.name === boardName
    );
    if (!board) return null;
 
    const column = board.columns[currentStatus.toLowerCase()];
    if (!column) return null;

    return column.tasks.find((t) => t.title === task.title);
  });
  console.log(task);

  useEffect(() => {
    if (selectedTask) {
      setCurrentTask(selectedTask);
    }
  }, [selectedTask]);

  return currentTask;
};

export default useCurrentTask;
