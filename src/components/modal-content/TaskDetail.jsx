import ActionMenu from "../ActionMenu";
import StatusSelect from "./StatusSelect";
import SubtaskItem from "./SubtaskItem";

import { calculateCompletedSubtasks } from "../../helpers/helpers";

import useCurrentTask from "../../hooks/useCurrentTask";
import useTaskActions from "../../hooks/useTaskActions";
import useSubtaskHandler from "../../hooks/useSubtaskHandler";

const TaskDetail = ({ modalData }) => {
  const { task, boardName } = modalData;

  const { currentStatus, handleStatusChange, actionMenuOptions } =
    useTaskActions(modalData);
  const currentTask = useCurrentTask(boardName, task, currentStatus);
  const { handleSubtaskToggle } = useSubtaskHandler(
    boardName,
    currentStatus,
    task
  );

  const { completedSubtasksCount, allSubtasksCount } =
    calculateCompletedSubtasks(currentTask);

  return (
    <div className="p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-xl font-bold">{currentTask.title}</h1>
        <ActionMenu options={actionMenuOptions} itemName="Task" />
      </div>
      <p className="text-grayBlue text-sm mb-4">{currentTask.description}</p>
      <p className="text-sm text-white font-bold mb-4">
        Subtasks ({completedSubtasksCount} of {allSubtasksCount})
      </p>
      <div className="space-y-4">
        {currentTask.subtasks.map((subtask, index) => (
          <SubtaskItem
            key={index}
            subtask={subtask}
            onToggle={() => handleSubtaskToggle(index)}
          />
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
