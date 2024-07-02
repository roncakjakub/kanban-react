import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import SettingsIcon from "../components/icons/SettingsIcon";

import {
  getBoardMenuOptions,
  getTaskMenuOptions,
} from "../utils/actionMenuOptions";

import ThemeContext from "../context/ThemeContext";

const ActionMenu = ({ boardName, task, itemName }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionAction = (action) => {
    action();
    setIsOpen(false);
  };

  const options =
    itemName === "Task"
      ? getTaskMenuOptions(dispatch, boardName, task)
      : getBoardMenuOptions(dispatch, boardName);

  return (
    <div className="relative">
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={() => setIsOpen((prevStatus) => !prevStatus)}
      >
        <SettingsIcon />
      </button>
      {isOpen && (
        <div
          className={`${
            theme === "dark" ? "bg-darkGray" : "bg-white"
          } absolute space-y-3 right-0 mt-2 w-48 p-4 rounded-md shadow-lg z-50`}
        >
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleOptionAction(option.action)}
              className={`${
                option.label === "Delete" ? "text-red hover:text-lightRed" : "text-grayBlue hover:text-lightGrayText"
              } text-sm cursor-pointer`}
            >
              {option.label} {itemName}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
