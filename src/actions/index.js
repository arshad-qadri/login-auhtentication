import axios from "axios";

export const login = (email, pswd) => {
  return async dispatch => {
    const api = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: pswd,
    });
    dispatch({ type: "login", payload: api });
    window.location.href = "/";
  };
};

export const getNews = () => {
  return async dispatch => {
    const newsApi = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-06-06&sortBy=publishedAt&apiKey=0e20d5e6e5024834842febdbb4bd8d05"
    );
    const getNewsData = await newsApi.json();
    dispatch({ type: "GET_NEWS", payload: getNewsData });
  };
};
//  https://api.openweathermap.org/data/2.5/weather?q=${getCity.value}&units=metric&appid=8a8015ab868c02ae5d0bf4a32b40c505

export const getWeather = city => {
  return async dispatch => {
    const weatherApi = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8a8015ab868c02ae5d0bf4a32b40c505`
    );
    // const data = await weatherApi.json();
    dispatch({ type: "GET_WEATHER", payload: weatherApi });
    // console.log("weather :> ", waetherApi);
  };
};
