const BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {BOARDS.map((board, index) => (
          <li key={index}>
            <a>{board}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
