// Main.js

import React from "react";
import "./main.css"; // Import the CSS file
import restaurantImage from "./assets/restauranfood.jpg"; // Import the restaurant image

const Main = () => {
  return (
    <main className="main-container">
      <div className="text-container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div className="button-container">
          <button>Reserve a Table</button>
        </div>
      </div>
      <div className="image-container">
        <img src={restaurantImage} alt="Restaurant Food" />
      </div>
    </main>
  );
};

export default Main;
