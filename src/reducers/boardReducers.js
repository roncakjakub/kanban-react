const setBoardNameReducer = (state, action) => {
    state.boardName = action.payload;
  };
  
  const addBoardReducer = (state, action) => {
    const { board } = action.payload;
    const columnsObject = board.columns.reduce((acc, column) => {
      acc[column.name.toLowerCase()] = column;
      return acc;
    }, {});
    state.boards.push({ ...board, columns: columnsObject });
  };
  
  const updateBoardReducer = (state, action) => {
    const { oldBoardName, updatedBoard } = action.payload;
    const existingBoard = state.boards.find((board) => board.name === oldBoardName);
  
    if (existingBoard) {
      existingBoard.name = updatedBoard.name;
      existingBoard.columns = updatedBoard.columns.reduce((acc, column) => {
        acc[column.name.toLowerCase()] = column;
        return acc;
      }, {});
    }
  
    state.boardName = updatedBoard.name;
  };
  
  export default updateBoardReducer;
  
  
  const removeBoardReducer = (state, action) => {
    const { boardName } = action.payload;
    state.boards = state.boards.filter((board) => board.name !== boardName);
  
    if (state.boardName === boardName && state.boards.length > 0) {
      state.boardName = state.boards[0].name;
    } else if (state.boards.length === 0) {
      state.boardName = '';
    }
  };
  
  export {
    setBoardNameReducer,
    addBoardReducer,
    updateBoardReducer,
    removeBoardReducer,
  };
  