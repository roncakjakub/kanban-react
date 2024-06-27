const TitleInput = ({ theme, title, setTitle, type }) => (
  <div>
    <label
      className={`${
        theme === "dark" ? "text-white" : "text-lightGrayText"
      } block text-sm font-bold mb-2`}
      htmlFor="title"
    >
      {type === "task" ? "Title" : "Board Name"}
    </label>
    <input
      id="title"
      type="text"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder={type === "task" ? "Title" : "e.g. Web Design"}
      className={`${
        theme === "dark"
          ? "bg-mediumGray text-white"
          : "bg-lightestBlue text-darkBlue"
      } w-full py-2 px-3 rounded-md border border-grayBlue`}
    />
  </div>
);

export default TitleInput;
