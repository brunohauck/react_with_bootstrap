import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/header';
export default function Home() {
  const formTitle = 'DEVinhouse User Form'; 
  return (
    <>
      <Header title={formTitle} />
      <div className="container">
        <h1>Welcome DEVinhouse React Course</h1>
        <h2>Teacher Bruno Hauck</h2>
        <Link to="/users">
          <button className="button">LIST ALL USERS</button>
        </Link>
      </div>
    </>
  );
}