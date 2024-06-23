import { useSelector } from "react-redux";

const useCurrentBoard = (boardName) => {
  const currentBoard = useSelector((state) =>
    state.boardsState.boards.find((board) => board.name === boardName)
  );

  const columns = Object.values(currentBoard?.columns || {});
  const defaultStatus = columns.length > 0 ? columns[0].name : "Todo";

  return { defaultStatus };
};

export default useCurrentBoard;
