import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Navigation from "./Navigation";
import ThemeToggler from "./ThemeToggler";
import HideSidebarIcon from "../icons/HideSidebarIcon";

import ThemeContext from "../../context/ThemeContext";
import LogoIcon from "../icons/LogoIcon";

const Sidebar = ({ hideSidebar, isVisibleSidebar }) => {
  const { theme } = useContext(ThemeContext);
  const nodeRef = useRef(null);

  return (
    <aside className={`flex flex-col h-screen`}>
      <LogoIcon />
      <CSSTransition
        nodeRef={nodeRef}
        in={isVisibleSidebar}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={`flex flex-col justify-between h-full ${
            theme === "dark" ? "bg-darkGray" : "bg-white"
          }`}
        >
          <div>
            <div className="px-8 mt-2">
              <p className="uppercase text-xs text-lightGrayText mb-6">
                All boards (3)
              </p>
              <Navigation />
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
      </CSSTransition>
    </aside>
  );
};

export default Sidebar;
