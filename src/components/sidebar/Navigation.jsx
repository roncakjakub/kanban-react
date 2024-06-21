import { useDispatch, useSelector } from "react-redux";
import { setBoardName } from "../../store/boards-slice";

import BoardIcon from "../icons/BoardIcon";

const CATEGORY_NAMES = ["Platform Launch", "Marketing Plan", "Roadmap"];

const Navigation = () => {
  const dispatch = useDispatch();
  const currentBoardName = useSelector((state) => state.boardsState.boardName);

  const setCurrentCategory = (name) => {
    dispatch(setBoardName(name));
  };

  return (
    <nav>
      <ul>
        {CATEGORY_NAMES.map((boardName, index) => (
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
        <li className="flex items-center gap-4 py-2 pl-8 cursor-pointer">
          <BoardIcon color="#635FC7" />
          <a className="text-sm text-purple font-bold">+ Create New Board</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
