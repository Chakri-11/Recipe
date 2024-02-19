import React from "react";
import Cheese from "../images/burgers/cheese.webp";
import Chicken from "../images/burgers/chicken.webp";
import Classic from "../images/burgers/classic.jpg";
import Hamburger from "../images/burgers/hamburger.jpg";
import Lamb from "../images/burgers/lamb.jpg";
import Turkey from "../images/burgers/turkey.jpg";

function Burgers(props) {
  return (
    <div>
      <h1 className="heading">Burgers...</h1>
      <div className="grid gap-10 mt-8 lg:grid-cols-3">
        <div className="card hover:shadow-lg">
          <img src={Hamburger} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Deluxe Hamburger</span>
            <span className="block text-sm text-gray-500">Recipe by Alex</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $8.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Classic} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Gourmet Classic Burger</span>
            <span className="block text-sm text-gray-500">Recipe by Jamie</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $9.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Turkey} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Spicy Turkey Burger</span>
            <span className="block text-sm text-gray-500">Recipe by Maria</span>
          </div>
          <div className="badge hover:shadow-lg">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $7.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Chicken} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Savory Chicken Burger</span>
            <span className="block text-sm text-gray-500">Recipe by Michael</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $10.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Cheese} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Ultimate Cheese Burger</span>
            <span className="block text-sm text-gray-500">Recipe by Olivia</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $12.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Lamb} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Spiced Lamb Burger</span>
            <span className="block text-sm text-gray-500">Recipe by Ethan</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $11.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Burgers;
