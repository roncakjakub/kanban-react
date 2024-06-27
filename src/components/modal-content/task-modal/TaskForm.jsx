// TaskForm.jsx
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import SubtaskList from "./SubtaskList";
import StatusSelect from "../StatusSelect";

const TaskForm = ({
  theme,
  title,
  setTitle,
  description,
  setDescription,
  subtasks,
  dispatchSubtasks,
  currentStatus,
  setCurrentStatus,
  handleSubmit,
  type,
  mode
}) => (
  <form onSubmit={handleSubmit}>
    <div className="space-y-4">
      <TitleInput theme={theme} title={title} setTitle={setTitle} type={type} />
      {type === "task" && <DescriptionInput theme={theme} description={description} setDescription={setDescription} />}
      <SubtaskList theme={theme} subtasks={subtasks} dispatchSubtasks={dispatchSubtasks} type={type} />
      {type === "task" && (
        <div>
          <label className={`${theme === "dark" ? "text-white" : "text-lightGrayText"} block text-sm font-bold mb-2`} htmlFor="status">
            Status
          </label>
          <StatusSelect currentStatus={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)} />
        </div>
      )}
      <button type="submit" className="hover:opacity-70 w-full p-2 bg-purple text-white rounded-full">
        {mode === "edit" ? "Save Changes" : `Create ${type === "task" ? "Task" : "Board"}`}
      </button>
    </div>
  </form>
);

export default TaskForm;
