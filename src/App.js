import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import News from "./components/News";
import Weather from "./components/Weather";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {JSON.parse(localStorage.getItem("login")) === true ? (
            <Home />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/about">
          {JSON.parse(localStorage.getItem("login")) === true ? (
            <About />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/news">
          {JSON.parse(localStorage.getItem("login")) === true ? (
            <News />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/weather">
          {JSON.parse(localStorage.getItem("login")) === true ? (
            <Weather />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route exact path="/login">
          {!JSON.parse(localStorage.getItem("login")) === true ? (
            <Login />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </>
  );
};

export default App;
