import React from "react";
import Cheese from "../images/pizza/cheese.jpg";
import Veg from "../images/pizza/veg.jpg";
import Margherita from "../images/pizza/Margherita.webp";
import Pepperoni from "../images/pizza/pepperoni.jpg";
import Bbq from "../images/pizza/bbq.jpg";

function Pizzas(props) {
  return (
    <div>
      <h1 className="heading">Pizzas...</h1>
      <div className="grid gap-10 mt-8 lg:grid-cols-3">
        <div className="card hover:shadow-lg">
          <img src={Cheese} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Classic Cheese Pizza</span>
            <span className="block text-sm text-gray-500">Simple and delicious</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $9.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Veg} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Veggie Delight Pizza</span>
            <span className="block text-sm text-gray-500">Recipe by Olivia</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $10.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Margherita} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Margherita Pizza</span>
            <span className="block text-sm text-gray-500">Authentic Italian flavor</span>
          </div>
          <div className="badge hover:shadow-lg">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $12.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Pepperoni} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Spicy Pepperoni Pizza</span>
            <span className="block text-sm text-gray-500">Recipe by Michael</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $11.99</span>
          </div>
        </div>
        <div className="card hover:shadow-lg">
          <img src={Bbq} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">BBQ Chicken Pizza</span>
            <span className="block text-sm text-gray-500">Recipe by Olivia</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
          <div className="m-4">
            <span className="text-lg font-bold text-orange-500">Price: $13.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pizzas;
