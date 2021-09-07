const initialState = {
  data: [],
  login: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      //   console.log(action.payload);
      localStorage.setItem("login", true);
      return { ...state, data: action.payload, login: true };

    case "logout":
      localStorage.clear();
      return { ...state, data: action.payload, login: false };

    default:
      console.log("not work");
      return state;
  }
};

export default loginReducer;
