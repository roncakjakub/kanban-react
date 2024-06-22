import { useState } from "react";

import SettingsIcon from "../components/icons/SettingsIcon";

const ActionMenu = ({ options, itemName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionAction = (action) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={() => setIsOpen((prevStatus) => !prevStatus)}
      >
        <SettingsIcon />
      </button>
      {isOpen && (
        <div className="absolute space-y-3 right-0 mt-2 w-48 p-4 bg-darkGray rounded-md shadow-lg z-50">
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleOptionAction(option.action)}
              className={`${
                option.label === "Delete" ? "text-red" : "text-grayBlue"
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
