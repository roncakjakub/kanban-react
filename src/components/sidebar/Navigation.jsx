import { useDispatch, useSelector } from "react-redux";
import { setBoardName } from "../../store/boards-slice";

import BoardIcon from "../icons/BoardIcon";
import useModalHandler from "../../hooks/useModalHandler";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentBoardName = useSelector((state) => state.boardsState.boardName);
  const allBoards = useSelector((state) => state.boardsState.boards);
  const categoryNames = allBoards.map((board) => board.name);

  const { handleOpenModal } = useModalHandler();

  const setCurrentCategory = (name) => {
    dispatch(setBoardName(name));
  };

  const modalSettings = {
    name: "actionModal",
    mode: "add",
    type: "board",
  };

  return (
    <nav>
      <ul>
        {categoryNames.map((boardName, index) => (
          <li
            onClick={() => setCurrentCategory(boardName)}
            className={`${
              boardName === currentBoardName && "bg-purple"
            } flex items-center rounded-r-full hover:cursor-pointer px-8 py-3 gap-4 mb-1`}
            key={index}
          >
            <BoardIcon />
            <a
              className={`${
                boardName === currentBoardName
                  ? "text-white"
                  : "text-lightGrayText"
              } font-bold text-sm hover:text-white}`}
            >
              {boardName}
            </a>
          </li>
        ))}
        <li
          onClick={() => handleOpenModal([], modalSettings)}
          className="flex items-center gap-4 py-2 pl-8 cursor-pointer"
        >
          <BoardIcon color="#635FC7" />
          <a className="text-sm text-purple font-bold">+ Create New Board</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
