import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";

import CrossIcon from "../icons/CrossIcon";

import columnsReducer from "../../reducers/columnsReducer";
import useHandleBoardSubmit from "../../hooks/useHandleBoardSubmit";

const BoardModal = () => {
  const mode = useSelector((state) => state.modalState.mode);
  const boardName = useSelector((state) => state.boardsState.boardName);
  const currentBoard = useSelector((state) =>
    state.boardsState.boards.find((board) => board.name === boardName)
  );

  const [title, setTitle] = useState(mode === "edit" ? boardName : "");
  const [columns, dispatchColumns] = useReducer(
    columnsReducer,
    mode === "edit" && currentBoard
      ? Object.values(currentBoard.columns).map((col) => ({
          name: col.name,
          tasks: col.tasks,
        }))
      : []
  );

  useEffect(() => {
    if (mode === "edit" && currentBoard) {
      setTitle(currentBoard.name);
      // is it necessary?
      dispatchColumns({
        type: "SET_COLUMNS",
        payload: {
          columns: Object.values(currentBoard.columns).map((col) => ({
            name: col.name,
            tasks: col.tasks,
          })),
        },
      });
    }
  }, [mode, currentBoard]);

  const handleSubmit = useHandleBoardSubmit(title, columns, mode, boardName);

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">
        {mode === "edit" ? "Edit Board" : "Add New Board"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm text-white font-bold mb-2"
              htmlFor="title"
            >
              Board Name
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Web Design"
              className="w-full py-2 px-3 rounded-md bg-mediumGray border border-grayBlue text-white"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm text-white font-bold mb-2">
              Board Columns
            </label>
            {columns.map((column, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={column.name}
                  onChange={(e) =>
                    dispatchColumns({
                      type: "UPDATE_COLUMN",
                      payload: { index, name: e.target.value },
                    })
                  }
                  placeholder="Column Name"
                  className="flex-grow py-2 px-3 rounded-md bg-mediumGray border border-grayBlue text-sm text-white"
                />
                <button
                  type="button"
                  onClick={() =>
                    dispatchColumns({
                      type: "REMOVE_COLUMN",
                      payload: { index },
                    })
                  }
                  className="text-red-500"
                >
                  <CrossIcon />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => dispatchColumns({ type: "ADD_COLUMN" })}
              className="hover:opacity-70 text-purple text-sm font-bold bg-white w-full bg-purple-500 rounded-full p-3"
            >
              + Add New Column
            </button>
          </div>

          <button
            type="submit"
            className="hover:opacity-70 w-full p-2 bg-purple text-white rounded-full"
          >
            {mode === "edit" ? "Save Changes" : "Create New Board"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardModal;
