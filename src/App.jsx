import { ThemeContextProvider } from "./context/ThemeContext";

import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";
import Boards from "./components/boards/Boards";
import Modal from "./components/Modal";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <div className="flex">
          <Sidebar />
          <Boards />
        </div>
        <Modal />
      </ThemeContextProvider>
    </>
  );
};

export default App;
