import { useState } from "react";

import ShowSidebarBtn from "../ShowSidebarBtn";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);

  const showSidebar = () => {
    setIsVisibleSidebar(true);
  };

  const hideSidebar = () => {
    setIsVisibleSidebar(false);
  };

  return isVisibleSidebar ? (
    <div>
      <SidebarContent hideSidebar={hideSidebar} />
    </div>
  ) : (
    <ShowSidebarBtn showSidebar={showSidebar} />
  );
};

export default Sidebar;
