import DATA from "../data.json";

export function extractColumns(boardName) {
  const board = DATA.boards.find(board => board.name === boardName);
  if (!board) return { name: boardName, columns: {} };

  const columns = board.columns;
  return {
    name: boardName,
    columns: columns.reduce((columnObj, column) => {
      columnObj[column.name.toLowerCase()] = column;
      return columnObj;
    }, {})
  };
};

export function findColumnsByCategory(data, categoryName) {
  const category = data.boards.find(board => board.name === categoryName);
  if (!category) return [];

  return category.columns;
};

export function calculateCompletedSubtasks(task) {
  const completedSubtasksCount = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const allSubtasksCount = task.subtasks.length;

  return {
    completedSubtasksCount,
    allSubtasksCount,
  };
}