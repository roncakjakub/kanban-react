import logo from "../../assets/logo-dark.svg";
import Navigation from "./Navigation";
import ThemeToggler from "./ThemeToggler";

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between h-screen bg-slate-600">
      <div>
        <div className="p-6">
          <img src={logo} alt="Web logo" />
        </div>
        <p className="uppercase text-sm p-6">All boards (4)</p>
        <Navigation />
      </div>
      <ThemeToggler />
    </aside>
  );
};

export default Sidebar;
