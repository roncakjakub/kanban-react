export const columnsReducer = (state, action) => {
    switch (action.type) {
      case "ADD_COLUMN":
        return [...state, { name: "" }];
      case "UPDATE_COLUMN":
        return state.map((column, index) =>
          index === action.payload.index
            ? { ...column, name: action.payload.name }
            : column
        );
      case "REMOVE_COLUMN":
        return state.filter((_, index) => index !== action.payload.index);
      case "SET_COLUMNS":
        return action.payload.columns;
      default:
        return state;
    }
  };
  
export default columnsReducer;