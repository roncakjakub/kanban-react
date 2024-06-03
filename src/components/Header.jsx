import { useContext } from "react";

import LogoIcon from "./icons/LogoIcon";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-mediumGray" : "bg-white"} flex`}>
      <LogoIcon />
      <div className="flex justify-between items-center grow px-4 border-b border-grayBlue">
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-gray"
          } text-2xl font-bold`}
        >
          Platform Launch
        </h2>
        <button className="bg-purple rounded-full py-3 px-4 text-white hover:opacity-70">
          + Add New Task
        </button>
      </div>
    </div>
  );
};

export default Header;
