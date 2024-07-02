import { useSelector } from "react-redux";
import { useContext } from "react";

import ThemeContext from "../../../context/ThemeContext";

const TitleInput = ({ title, setTitle }) => {
  const type = useSelector((state) => state.modalState.modalType);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <label
        className={`${
          theme === "dark" ? "text-white" : "text-lightGrayText"
        } block text-sm font-bold mb-2`}
        htmlFor="title"
      >
        Title
      </label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={type === "task" ? "Title" : "e.g. Web Design"}
        required
        className={`${
          theme === "dark"
            ? "bg-mediumGray text-white"
            : "bg-lightestBlue text-darkBlue"
        } w-full py-2 px-3 rounded-md border border-grayBlue`}
      />
    </div>
  );
};

export default TitleInput;
