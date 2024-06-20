import { useSelector } from "react-redux";

const StatusSelect = ({ currentStatus, onChange }) => {
  const boardName = useSelector((state) => state.boardsState.boardName);
  const boards = useSelector((state) => state.boardsState.boards);

  const matchingBoard = boards.find((board) => board.name === boardName);
  const statuses = Object.keys(matchingBoard.columns).map(
    (status) => status.charAt(0).toUpperCase() + status.slice(1)
  );

  return (
    <div className="custom-select">
      <select
        name="status"
        value={currentStatus}
        onChange={onChange}
        className="block w-full bg-darkGray border border-mediumGray text-white rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
      >
        {statuses.map((status) => (
          <option
            key={status}
            value={status}
            className="bg-darkGray text-white"
          >
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
