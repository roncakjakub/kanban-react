import { useSelector } from "react-redux";
import { selectColumnDataByType } from "../../store";

import CategoryBoard from "./CategoryBoard";

const Boards = () => {
  const columnTypes = ["todo", "doing", "done"];
  const columnData = columnTypes.map((type) =>
    useSelector((state) => selectColumnDataByType(state, type))
  );

  return (
    <div className="bg-darkGray w-screen h-screen p-6">
      <div className="flex">
        {columnData.map((data, index) => (
          <CategoryBoard key={index} category={data} />
        ))}
      </div>
    </div>
  );
};

export default Boards;
