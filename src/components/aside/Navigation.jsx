import BoardIcon from "../icons/BoardIcon";

const BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {BOARDS.map((board, index) => (
          <li className="flex gap-4 mb-6" key={index}>
            <BoardIcon />
            <a className="text-lightGrayText text-xs hover:text-white hover:cursor-pointer">
              {board}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
