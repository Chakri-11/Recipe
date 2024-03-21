import React from "react";
import { TiHome } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { BsPatchQuestionFill } from "react-icons/bs";
import BurgerMenu from "./burgermenu";
function Nav(props)
{
    return (
        <div className="bg-white md:col-span-1 md:flex md:justify-end imga">
          <nav className="text-right md:fixed">
            <div className="flex justify-between item-center">
              <h1 className="a">
                <a href="https://www.amazon.in/">Food Fest</a>
              </h1>
              <BurgerMenu/>
            </div>
            <ul className="hidden md:block" id="menuu">
              <li className="py-1 hover:border-r-4 hover:bg-gray-100 hover:border-red-500 pr-7">
              <a href="https://www.amazon.in/"><span><TiHome className="inline-block w-10 size-6 "/>Home</span></a>
              </li>
              <li className="py-1 hover:border-r-4 hover:bg-gray-100 hover:border-red-500 pr-7">
                <a href="https://www.amazon.in/"><span><BsPatchQuestionFill className="inline-block w-10 size-5 "/>About</span></a>
              </li>
              <li className="py-1 pr-4 hover:border-r-4 hover:bg-gray-100 hover:border-red-500">
                <a href="https://www.amazon.in/"><span><IoMdMail className="inline-block w-10 size-5 "/>Contact</span></a>
              </li>
            </ul>
        </nav>
        </div>
    );
}
export default Nav;
