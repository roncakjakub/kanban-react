import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { useSelector } from "react-redux";

import Sidebar from "./components/sidebar/Sidebar";
import ShowSidebarBtn from "./components/ShowSidebarBtn";
import Header from "./components/Header";
import Boards from "./components/boards/Boards";
import Modal from "./components/Modal";

const App = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);
  const isActiveModal = useSelector((state) => state.modalState.isActiveModal);

  const showSidebar = () => {
    setIsVisibleSidebar(true);
  };

  const hideSidebar = () => {
    setIsVisibleSidebar(false);
  };

  return (
    <>
      <ThemeContextProvider>
        <Header isVisibleSidebar={isVisibleSidebar} />
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
        {isActiveModal && <Modal />}
      </ThemeContextProvider>
      {!isVisibleSidebar && <ShowSidebarBtn showSidebar={showSidebar} />}
    </>
  );
};

export default App;
