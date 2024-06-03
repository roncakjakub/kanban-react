import BoardIcon from "../icons/BoardIcon";

const BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {BOARDS.map((board, index) => (
          <li className="flex items-center gap-4 mb-6" key={index}>
            <BoardIcon />
            <a className="text-lightGrayText font-bold text-sm hover:text-white hover:cursor-pointer">
              {board}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
