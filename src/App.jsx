import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";

import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";
import Boards from "./components/boards/Boards";
import Modal from "./components/Modal";

const App = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);

  return (
    <>
      <ThemeContextProvider>
        <Header isVisibleSidebar={isVisibleSidebar} />
        <div className="flex">
          <Sidebar
            isVisibleSidebar={isVisibleSidebar}
            setIsVisibleSidebar={setIsVisibleSidebar}
          />
          <Boards />
        </div>
        <Modal />
      </ThemeContextProvider>
    </>
  );
};

export default App;
