import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "../../store/boards-slice";

import Column from "./Column";
import ThemeContext from "../../context/ThemeContext";

const Boards = () => {
  const { theme } = useContext(ThemeContext);
  const boardName = useSelector((state) => state.boardsState.boardName);
  const board = useSelector((state) =>
    selectBoard(state.boardsState, boardName)
  );

  const columns = board ? Object.values(board.columns) : [];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkGray" : "bg-lightestBlue"
      } w-screen h-screen p-6`}
    >
      {columns.length > 0 ? (
        <div className="flex">
          {columns.map((column, index) => (
            <Column key={index} tasks={column.tasks} columnName={column.name} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-grayBlue text-lg mb-4">
            This board is empty. Create a new column to get started.
          </p>
          <button className="bg-purple text-white font-bold py-2 px-4 rounded-full">
            + Add New Column
          </button>
        </div>
      )}
    </div>
  );
};

export default Boards;
