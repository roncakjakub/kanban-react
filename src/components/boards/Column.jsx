import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../store/modal-slice";

import Task from "./Task";
import Modal from "../Modal";

const Column = ({ category }) => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(false);
  const currentBoardName = useSelector((store) => store.boardsState.boardName);

  const handleOpenModal = (taskData) => {
    const modalData = {
      task: taskData,
      boardName: currentBoardName,
      columnName: category.name,
    };

    setActiveModal(true);
    dispatch(setModalData(modalData));
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        <p className="text-grayBlue text-sm tracking-widest uppercase mb-2">
          {category.name}
        </p>
        {category.tasks && category.tasks.length > 0 ? (
          category.tasks.map((task, index) => (
            <Task
              onClick={() => handleOpenModal(task)}
              key={index}
              task={task}
            />
          ))
        ) : (
          <p className="text-grayBlue text-sm">No tasks available</p>
        )}
      </div>
      {activeModal && <Modal modalType="taskDetail" />}
    </>
  );
};

export default Column;
