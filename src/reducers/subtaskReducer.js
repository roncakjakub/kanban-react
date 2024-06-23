const subtaskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_SUBTASK':
        return [...state, { title: "", isCompleted: false }];
      case 'UPDATE_SUBTASK':
        return state.map((subtask, index) =>
          index === action.index ? { ...subtask, title: action.value } : subtask
        );
      case 'REMOVE_SUBTASK':
        return state.filter((_, index) => index !== action.index);
      case 'SET_SUBTASKS':
        return action.subtasks;
      default:
        return state;
    }
  };
  
export default subtaskReducer;