import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <h1>Welcome Startdev React Course</h1>
      <h2>Teacher Bruno Hauck</h2>
      <h2></h2>
      <Link to="/allusers">
        <button className="button">LIST ALL USERS</button>
      </Link>
    </div>
  );
}