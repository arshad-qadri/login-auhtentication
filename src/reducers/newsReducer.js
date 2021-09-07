const initialState = {
  data: [],
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
