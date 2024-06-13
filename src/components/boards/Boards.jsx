import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectColumnDataByType } from "../../store/boards-slice";
import { findColumnsByCategory } from "../../helpers/helpers";

import DATA from "../../data.json";
import Column from "./Column";
import ThemeContext from "../../context/ThemeContext";

const Boards = () => {
  const { theme } = useContext(ThemeContext);
  const boardName = useSelector((state) => state.boardsState.boardName);

  const columns = findColumnsByCategory(DATA, boardName);
  const columnTypes = columns.map((column) => column.name.toLowerCase());
  const columnData = columnTypes.map((type) =>
    useSelector((state) => selectColumnDataByType(state.boardsState, type))
  );

  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkGray" : "bg-lightestBlue"
      } w-screen h-screen p-6`}
    >
      <div className="flex">
        {columnData.map((data, index) => (
          <Column key={index} category={data} />
        ))}
      </div>
    </div>
  );
};

export default Boards;
