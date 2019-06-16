export const Reducer = (state = {}, action) => {
  switch (action.type) {
    case "test":
      return {
        ...state
      };
    default:
      return state;
  }
};
