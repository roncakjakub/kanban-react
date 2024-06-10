import { useDispatch } from "react-redux";
import { setBoardName} from "../../store";

import BoardIcon from "../icons/BoardIcon";

const CATEGORY_NAMES = ["Platform Launch", "Marketing Plan", "Roadmap"];

const Navigation = () => {
  const dispatch = useDispatch();

  const setCurrentCategory = (name) => {
    dispatch(setBoardName(name));
  };

  return (
    <nav>
      <ul>
        {CATEGORY_NAMES.map((boardName, index) => (
          <li
            onClick={() => setCurrentCategory(boardName)}
            className="flex items-center gap-4 mb-6"
            key={index}
          >
            <BoardIcon />
            <a className="text-lightGrayText font-bold text-sm hover:text-white hover:cursor-pointer">
              {boardName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
