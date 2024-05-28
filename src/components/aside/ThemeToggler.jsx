import iconDark from "../../assets/icon-dark-theme.svg";
import iconLight from "../../assets/icon-light-theme.svg";

const ThemeToggler = () => {
  return (
    <div className="flex p-6">
      <img src={iconLight} alt="Light theme" />
      <img src={iconDark} alt="Dark theme" />
    </div>
  );
};

export default ThemeToggler;
