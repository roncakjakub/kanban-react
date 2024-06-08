import DATA from "../data.json";

export function extractColumns(boardName, columnsToExtract) {
  const board = DATA.boards.find((board) => board.name === boardName);
  if (!board) return null;

  const columnsObject = columnsToExtract.reduce((columnsObject, columnName) => {
    const column = board.columns.find((column) => column.name === columnName);
    if (column) {
      columnsObject[columnName.toLowerCase()] = column;
    }
    return columnsObject;
  }, {});

  return {
    name: board.name,
    columns: columnsObject,
  };
}