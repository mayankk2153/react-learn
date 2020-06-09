import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      Welcome to HomePage
      <Link to="about" className="btn btn-primary">About me</Link>
    </div>
  );
}

export default HomePage;
