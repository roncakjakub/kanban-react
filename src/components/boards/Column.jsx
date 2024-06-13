import { useState } from "react";
import Task from "./Task";
import Modal from "./Modal";

const Column = ({ category }) => {
  // pridať tento stav do modal-slice => zníži sa počet prekreslení
  const [activeModal, setActiveModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClick = (data) => {
    setModalData(data);
    setActiveModal(true);
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        <p className="text-grayBlue text-sm tracking-widest uppercase mb-2">
          {category.name}
        </p>
        {category.tasks && category.tasks.length > 0 ? (
          category.tasks.map((task, index) => (
            <Task onClick={() => handleClick(task)} key={index} task={task} />
          ))
        ) : (
          <p className="text-grayBlue text-sm">No tasks available</p>
        )}
      </div>
      {activeModal && <Modal data={modalData} />}
    </>
  );
};

export default Column;
