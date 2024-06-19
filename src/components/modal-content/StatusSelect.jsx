const statuses = ["Todo", "Doing", "Done"];

const StatusSelect = ({ currentStatus, onChange }) => {
  return (
    <div className="custom-select">
      <select
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
