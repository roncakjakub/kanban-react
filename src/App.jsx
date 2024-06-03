import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";

import Sidebar from "./components/aside/Sidebar";
import ShowSidebarBtn from "./components/ShowSidebarBtn";
import Header from "./components/Header";
import Boards from "./components/boards/Boards";

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
        <Header />
        <div className="flex">
          <div>
            {isVisibleSidebar && (
              <Sidebar
                hideSidebar={hideSidebar}
                isVisibleSidebar={isVisibleSidebar}
              />
            )}
          </div>
          <Boards />
        </div>
      </ThemeContextProvider>
      {!isVisibleSidebar && <ShowSidebarBtn showSidebar={showSidebar} />}
    </>
  );
};

export default App;
