import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modal-slice";
import { removeBoard } from "../store/boards-slice";

import LogoIcon from "./icons/LogoIcon";
import ThemeContext from "../context/ThemeContext";
import useModalHandler from "../hooks/useModalHandler";
import ActionMenu from "./ActionMenu";

const Header = ({ isVisibleSidebar }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const currentBoardName = useSelector((state) => state.boardsState.boardName);

  const { handleOpenModal } = useModalHandler();

  const taskModalSettings = {
    name: "taskModal",
    mode: "add",
    type: "task",
  };

  const boardModalSettings = {
    name: "boardModal",
    mode: "edit",
    type: "board",
  };

  const handleDeleteBoard = () => {
    dispatch(removeBoard({ boardName: currentBoardName }));
    dispatch(closeModal());
  };

  const handleOpenEditingModal = () => {
    handleOpenModal([], boardModalSettings);
  };

  const boardMenuOptions = [
    {
      label: "Edit",
      action: handleOpenEditingModal,
    },
    {
      label: "Delete",
      action: handleDeleteBoard,
    },
  ];

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
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleOpenModal([], taskModalSettings)}
            className="bg-purple rounded-full py-3 px-4 text-white hover:opacity-70"
          >
            + Add New Task
          </button>
          <ActionMenu options={boardMenuOptions} itemName="Board" />
        </div>
      </div>
    </div>
  );
};

export default Header;
