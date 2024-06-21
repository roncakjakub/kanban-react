import Task from "./Task";
import useModalHandler from "../../hooks/useModalHandler";

const Column = ({ tasks, columnName }) => {
  const { handleOpenModal } = useModalHandler();

  const modalSettings = {
    name: "taskDetail",
    mode: "edit",
    type: "task",
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        <p className="text-grayBlue text-sm tracking-widest uppercase mb-2 cursor-pointer">
          {columnName}
        </p>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              onClick={() => handleOpenModal(task, modalSettings)}
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
