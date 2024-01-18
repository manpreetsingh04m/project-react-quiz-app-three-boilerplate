import React from "react";
import "./HomeComponent.css";
import { NavLink } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="flex home-container">
      <h1>Quiz App</h1>
      <NavLink to="/Quiz">
        <button className="play-button">Play</button>
      </NavLink>
    </div>
  );
}

export default HomeComponent;