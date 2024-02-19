import React from "react";
import Latest from "./Latest";
import Popular from "./Popular";
function Main(props)
{
    return (
        <div className="overflow-y-auto bg-gray-100 md:col-span-2 md:bg-gradient-to-tr from-orange-100 via-yellow-100 to-red-100">
            <h1 className="hidden md:flex justify-center text-4xl font-semibold text-orange-500">
                <a href="https://www.amazon.in/">FOOD NINJA</a>
            </h1>
            <main className="px-20 py-5 my-16 bg-gray-100 bg-gradient-to-br from-orange-300 via-yellow-200 to-red-200">
                <div className="flex justify-start md:justify-end">
                    <a href="https://www.amazon.in/" className="transition duration-500 ease-in-out border-orange-500 btn md:border-2 hover:bg-orange-500 hover:text-white">LogIn</a>
                    <a href="https://www.amazon.in/" className="ml-3 transition duration-500 ease-in-out border-orange-500 btn md:border-2 hover:bg-orange-500 hover:text-white">SignUp</a>
                </div>
                <header className="py-5">
                    <h2 className="font-serif text-3xl text-center text-blue-700 uppercase text-man">Recipes</h2>
                </header>
                <div>
                    <h3 className="heading">Latest Recipes</h3>
                    <Latest/>
                </div>
                <div>
                    <h3 className="heading">Most Popular</h3>
                    <Popular/>
                </div>
            </main>
        </div>
    );
}
export default Main;