import ActionMenu from "../ActionMenu";
import StatusSelect from "./StatusSelect";
import SubtaskItem from "./SubtaskItem";
import useTaskDetail from "../../hooks/useTaskDetail";

const TaskDetail = ({ modalData }) => {
  const {
    task,
    currentStatus,
    completedSubtasksCount,
    allSubtasksCount,
    handleStatusChange,
    actionMenuOptions,
  } = useTaskDetail(modalData);

  return (
    <div className="p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-xl font-bold">{task.title}</h1>
        <ActionMenu options={actionMenuOptions} itemName="Task" />
      </div>
      <p className="text-grayBlue text-sm mb-4">{task.description}</p>
      <p className="text-sm text-white font-bold mb-4">
        Subtasks ({completedSubtasksCount} of {allSubtasksCount})
      </p>
      <div className="space-y-4">
        {task.subtasks.map((subtask, index) => (
          <SubtaskItem key={index} subtask={subtask} />
        ))}
      </div>
      <div className="mt-6">
        <label className="block text-sm text-white font-bold mb-2">
          Current Status
        </label>
        <StatusSelect
          currentStatus={currentStatus}
          onChange={handleStatusChange}
        />
      </div>
    </div>
  );
};

export default TaskDetail;
