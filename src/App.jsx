import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";

import Sidebar from "./components/aside/Sidebar";
import ShowSidebarBtn from "./components/ShowSidebarBtn";

const App = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);

  const showSidebar = () => {
    setIsVisibleSidebar(true);
  };

  const hideSidebar = () => {
    setIsVisibleSidebar(false);
  };

  return (
    <>
      <ThemeContextProvider>
        <div className="flex">
          <div>
            <Sidebar
              hideSidebar={hideSidebar}
              isVisibleSidebar={isVisibleSidebar}
            />
          </div>
        </div>
      </ThemeContextProvider>
      {!isVisibleSidebar && <ShowSidebarBtn showSidebar={showSidebar} />}
    </>
  );
};

export default App;
