const DescriptionInput = ({ theme, description, setDescription }) => (
  <div>
    <label
      className={`${
        theme === "dark" ? "text-white" : "text-lightGrayText"
      } block text-sm font-bold mb-2`}
      htmlFor="description"
    >
      Description
    </label>
    <textarea
      id="description"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      className={`${
        theme === "dark" ? "bg-mediumGray text-white" : "bg-white text-darkBlue"
      } w-full py-2 px-3 rounded-md border border-grayBlue`}
    />
  </div>
);

export default DescriptionInput;
