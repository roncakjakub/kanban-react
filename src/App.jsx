import { useRef, useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { CSSTransition } from "react-transition-group";
import Sidebar from "./components/aside/Sidebar";

const App = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);
  const nodeRef = useRef(null);

  return (
    <ThemeContextProvider>
      <div className="flex">
        <CSSTransition
          nodeRef={nodeRef}
          in={isVisibleSidebar}
          timeout={300}
          classNames="sidebar"
          unmountOnExit
        >
          <div ref={nodeRef}>
            <Sidebar setIsVisibleSidebar={setIsVisibleSidebar} />
          </div>
        </CSSTransition>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
