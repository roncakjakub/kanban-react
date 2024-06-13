import { useContext } from "react";
import { useSelector } from "react-redux";

import LogoIcon from "./icons/LogoIcon";
import ThemeContext from "../context/ThemeContext";

const Header = ({ isVisibleSidebar }) => {
  const { theme } = useContext(ThemeContext);
  const currentBoardName = useSelector((state) => state.boardsState.boardName);

  return (
    <div className={`${theme === "dark" ? "bg-mediumGray" : "bg-white"} flex`}>
      <LogoIcon isVisibleSidebar={isVisibleSidebar} />
      <div
        className={`${
          theme === "dark" ? "border-grayBlue" : ""
        } flex justify-between items-center grow px-4 border-b`}
      >
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-gray"
          } text-2xl font-bold`}
        >
          {currentBoardName}
        </h2>
        <button className="bg-purple rounded-full py-3 px-4 text-white hover:opacity-70">
          + Add New Task
        </button>
      </div>
    </div>
  );
};

export default Header;
