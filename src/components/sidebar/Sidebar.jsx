import { useContext } from "react";

import Navigation from "./Navigation";
import ThemeToggler from "./ThemeToggler";
import HideSidebarIcon from "../icons/HideSidebarIcon";

import ThemeContext from "../../context/ThemeContext";

const Sidebar = ({ hideSidebar }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside
      className={`${
        theme === "dark" ? "border-grayBlue" : ""
      } flex flex-col h-screen border-r width-250`}
    >
      <div
        className={`flex flex-col justify-between h-full ${
          theme === "dark" ? "bg-mediumGray" : "bg-white"
        }`}
      >
        <div>
          <div className="mt-2">
            <p className="uppercase text-lightGrayText text-xs tracking-widest font-bold px-8 mb-8">
              All boards (3)
            </p>
            <div className="pr-8">
              <Navigation />
            </div>
          </div>
        </div>
        <div className="p-8">
          <ThemeToggler />
          <button
            onClick={hideSidebar}
            className="flex gap-3 text-lightGrayText text-xs hover:text-white"
            type="button"
          >
            <HideSidebarIcon />
            Hide Sidebar
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
