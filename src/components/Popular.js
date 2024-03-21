import React, { useState, useRef } from "react";
import Pizza from "../images/pizz.jpg";
import Pizzas from "./Pizzas";
import Burgers from "./burgers";

function Popular(props) {
  const pizzaRef = useRef(null);
  const burgerRef = useRef(null);
  const [isPizza, setPizza] = useState(false);
  const [isBurger, setBurger] = useState(false);

  function handleButtonClick(categoryRef, isOpen, setOpenState) {
    if (!isOpen) {
      setPizza(false);
      setBurger(false);
      setOpenState(true);
      categoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <div className="mt-5">
        <button onClick={() => handleButtonClick(pizzaRef, isPizza, setPizza)} className="transition duration-500 ease-in-out border-orange-500 btn md:border-2 hover:bg-orange-500 hover:text-white" id="scrollPizza">Pizza</button>
        <button onClick={() => handleButtonClick(burgerRef, isBurger, setBurger)} className="ml-3 transition duration-500 ease-in-out border-orange-500 btn md:border-2 hover:bg-orange-500 hover:text-white">Burger</button>
      </div>
      <div className="mt-8">
        <div className="card" ref={pizzaRef}>
          <img src={Pizza} alt="error" className="image"></img>
          <div className="m-4">
            <span className="font-bold">Pizza</span>
            <span className="block text-sm text-gray-500">just chill</span>
          </div>
          <div className="badge">
            <span>25 min</span>
          </div>
        </div>
        {isPizza && <Pizzas />}
        {isBurger && <Burgers />}
        <div className="flex justify-center">
          <button onClick={() => handleButtonClick(pizzaRef, isPizza, setPizza)} className="px-3 py-2 m-2 mt-6 rounded-full bg-gray hover:shadow-inner">Load More</button>
        </div>
        <div className="card" ref={burgerRef}>
        </div>
      </div>
    </div>
  );
}

export default Popular;

