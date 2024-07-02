import { useSelector, useDispatch } from "react-redux";
import { showSidebar, hideSidebar } from "../../store/sidebar-sice";

import ShowSidebarBtn from "../ShowSidebarBtn";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const isVisibleSidebar = useSelector((state) => state.sidebarState.isVisible);
  const dispatch = useDispatch();

  return (
    <>
      {isVisibleSidebar && (
        <div
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={() => dispatch(hideSidebar())}
        />
      )}

      <div className="sm:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {isVisibleSidebar && (
          <SidebarContent hideSidebar={() => dispatch(hideSidebar())} />
        )}
      </div>

      <div className="hidden sm:block">
        {isVisibleSidebar ? (
          <SidebarContent hideSidebar={() => dispatch(hideSidebar())} />
        ) : (
          <ShowSidebarBtn showSidebar={() => dispatch(showSidebar())} />
        )}
      </div>
    </>
  );
};

export default Sidebar;
