import Board from "./Board";

const CategoryBoard = ({ category }) => {
  return (
    <div className="flex flex-col flex-1">
      <p className="text-grayBlue text-sm tracking-widest uppercase mb-2">
        {category.name}
      </p>
      {category.tasks.map((task, index) => (
        <Board key={index} task={task.title} subtasks={task.subtasks} />
      ))}
    </div>
  );
};

export default CategoryBoard;
