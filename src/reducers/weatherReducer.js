const initialState = {
  weathers: [],
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      //   console.log(action.payload.main);
      //   console.log("reducer-weather", action.payload);
      return { ...state, weathers: action.payload };

    default:
      console.log("not work");
      return state;
  }
};
export default weatherReducer;
