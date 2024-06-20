import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal } from "../../store/modal-slice";

import Task from "./Task";

const Column = ({ tasks, columnName }) => {
  const dispatch = useDispatch();
  const currentBoardName = useSelector((store) => store.boardsState.boardName);

  const handleOpenModal = (taskData, mode) => {
    const modalData = {
      task: taskData,
      boardName: currentBoardName,
      columnName,
    };

    if (mode === "edit") {
      dispatch(openModal(["taskDetail", ""]));
    } else {
      dispatch(openModal(["taskModal", "add"]));
    }

    dispatch(setModalData(modalData));
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        <p
          onClick={() => handleOpenModal([], "add")}
          className="text-grayBlue text-sm tracking-widest uppercase mb-2 cursor-pointer"
        >
          {columnName}
        </p>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              onClick={() => handleOpenModal(task, "edit")}
              key={index}
              task={task}
            />
          ))
        ) : (
          <p className="text-grayBlue text-sm">No tasks available</p>
        )}
      </div>
    </>
  );
};

export default Column;
