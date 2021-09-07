import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav>
        <NavLink to="/">Navbar</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <NavLink to="/news">News </NavLink>
          </li>
          <li>
            <NavLink to="/weather">Weather </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
                dispatch({
                  type: "logout",
                  payload: "logout",
                });
              }}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
