import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSidebar, hideSidebar } from "../store/sidebar-sice";

import ThemeContext from "../context/ThemeContext";
import useModalHandler from "../hooks/useModalHandler";

import ActionMenu from "./ActionMenu";
import LogoIcon from "./icons/LogoIcon";
import MobileAddTaskIcon from "./icons/MobileAddTaskIcon";
import DownIcon from "./icons/DownIcon";
import UpIcon from "./icons/UpIcon";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const boardName = useSelector((state) => state.boardsState.boardName);
  const isVisibleSidebar = useSelector((state) => state.sidebarState.isVisible);

  const { handleOpenModal } = useModalHandler();

  const taskModalSettings = {
    name: "taskModal",
    mode: "add",
    type: "task",
  };

  const toggleSidebar = () => {
    if (isVisibleSidebar) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }
  };

  const handleAddTask = () => {
    if (boardName === "") return;
    handleOpenModal([], taskModalSettings)
  };

  return (
    <div className={`${theme === "dark" ? "bg-mediumGray" : "bg-white"} flex`}>
      <LogoIcon isVisibleSidebar={isVisibleSidebar} />
      <div
        className={`${
          theme === "dark" ? "border-grayBlue" : ""
        } flex justify-between items-center grow px-4 border-b py-4 sm:py-0`}
      >
        <div className="flex items-center gap-3">
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-darkBlue"
            } text-2xl font-bold`}
          >
            {boardName}
          </h2>
          <div
            onClick={toggleSidebar}
            className="block sm:hidden py-3 px-1 cursor-pointer"
          >
            {isVisibleSidebar ? <UpIcon /> : <DownIcon />}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleAddTask}
            className="bg-purple rounded-full py-3 px-4 text-white hover:opacity-70 hidden sm:block"
          >
            + Add New Task
          </button>
          <button
            onClick={() => handleOpenModal([], taskModalSettings)}
            className="bg-purple rounded-full py-3 px-4 block sm:hidden hover:opacity-70"
          >
            <MobileAddTaskIcon />
          </button>
          <ActionMenu boardName={boardName} itemName="Board" />
        </div>
      </div>
    </div>
  );
};

export default Header;
