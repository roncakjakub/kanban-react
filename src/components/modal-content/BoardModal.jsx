import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, updateBoard } from "../../store/boards-slice";
import { closeModal } from "../../store/modal-slice";
import CrossIcon from "../icons/CrossIcon";

// refactor
const BoardModal = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.modalState.mode);
  const boardName = useSelector((state) => state.boardsState.boardName);
  const currentBoard = useSelector((state) =>
    state.boardsState.boards.find((board) => board.name === boardName)
  );

  const [title, setTitle] = useState(mode === "edit" ? boardName : "");
  const [columns, setColumns] = useState(
    mode === "edit" && currentBoard
      ? Object.values(currentBoard.columns).map((col) => ({ name: col.name }))
      : []
  );

  useEffect(() => {
    if (mode === "edit" && currentBoard) {
      setTitle(currentBoard.name);
      setColumns(
        Object.values(currentBoard.columns).map((col) => ({ name: col.name }))
      );
    }
  }, [mode, currentBoard]);

  const handleAddColumn = () => {
    setColumns([...columns, { name: "" }]);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = columns.slice();
    newColumns[index].name = value;
    setColumns(newColumns);
  };

  const handleColumnRemove = (index) => {
    const newColumns = columns.slice();
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const boardData = {
      name: title,
      columns: columns.map((col) => ({ name: col.name, tasks: [] })),
    };

    if (mode === "edit") {
      dispatch(
        updateBoard({ oldBoardName: boardName, updatedBoard: boardData })
      );
    } else {
      dispatch(addBoard({ board: boardData }));
    }

    dispatch(closeModal());
  };

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
                  onChange={(e) => handleColumnChange(index, e.target.value)}
                  placeholder="Column Name"
                  className="flex-grow py-2 px-3 rounded-md bg-mediumGray border border-grayBlue text-sm text-white"
                />
                <button
                  type="button"
                  onClick={() => handleColumnRemove(index)}
                  className="text-red-500"
                >
                  <CrossIcon />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddColumn}
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
