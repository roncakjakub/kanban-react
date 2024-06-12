import { useSelector } from "react-redux";
import { selectColumnDataByType } from "../../store";
import { findColumnsByCategory } from "../../helpers/helpers";
import { useContext } from "react";

import DATA from "../../data.json";
import CategoryBoard from "./CategoryBoard";
import ThemeContext from "../../context/ThemeContext";

const Boards = () => {
  const { theme } = useContext(ThemeContext);
  const boardName = useSelector((state) => state.boardName);

  const columns = findColumnsByCategory(DATA, boardName);
  const columnTypes = columns.map((column) => column.name.toLowerCase());
  const columnData = columnTypes.map((type) =>
    useSelector((state) => selectColumnDataByType(state, type))
  );

  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkGray" : "bg-lightestBlue"
      } w-screen h-screen p-6`}
    >
      <div className="flex">
        {columnData.map((data, index) => (
          <CategoryBoard key={index} category={data} />
        ))}
      </div>
    </div>
  );
};

export default Boards;
