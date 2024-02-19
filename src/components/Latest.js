import React from "react";
import Noodles from "../images/Noodles.webp";
import Chilli from "../images/chilli.jpg";
import Chicken from "../images/chicken.jpg";
function Latest(props)
{
    return (
        <div>
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
                <div className="card hover:shadow-lg">
                    <img src={Chilli} alt="error" className="image"></img>
                    <div className="m-4">
                        <span className="font-bold">5 Bean Chilli Stew</span>
                        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                    </div>
                    <div className="badge">
                        <span>25 min</span>
                    </div>
                </div>
                <div className="card hover:shadow-lg">
                    <img src={Chicken} alt="error" className="image"></img>
                    <div className="m-4">
                        <span className="font-bold">Chicken Curry</span>
                        <span className="block text-gray-500 text-sm">Recipe by Kaden</span>
                    </div>
                    <div className="badge">
                        <span>25 min</span>
                    </div>
                </div>
                <div className="card hover:shadow-lg">
                    <img src={Noodles} alt="error" className="image"></img>
                    <div className="m-4">
                        <span className="font-bold">noodle</span>
                        <span className="block text-gray-500 text-sm">Recipe by chinese</span>
                    </div>
                    <div className="badge">
                        <span>25 min</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Latest;