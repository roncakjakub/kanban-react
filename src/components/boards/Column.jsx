import Task from "./Task";
import useModalHandler from "../../hooks/useModalHandler";
import { memo } from "react";

const Column = ({ tasks, columnName }) => {
  const { handleOpenModal } = useModalHandler();

  const modalSettings = {
    name: "taskDetail",
    mode: "edit",
    type: "task",
  };

  return (
    <>
      <div className="flex flex-col flex-1 px-2">
        <p className="text-grayBlue text-sm tracking-widest uppercase mb-2">
          {columnName}
        </p>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              onClick={() => handleOpenModal(task, modalSettings, columnName)}
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

export default memo(Column);
