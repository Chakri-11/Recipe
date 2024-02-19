import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiHome } from 'react-icons/ti';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="b cursor-pointer md:hidden" onClick={toggleMenu}>
        <GiHamburgerMenu className="size-5" />
      </div>
      {isMenuOpen && (
        <ul className="md:hidden" id="menuu">
          <li className="py-1 hover:border-r-4 hover:border-red-500 pr-7 hover:bg-gray-100 hover:font-semibold">
            <a href="https://www.amazon.in/"><span><TiHome className="inline-block size-6 w-10"/>Home</span></a>
          </li>
          <li className="py-1 hover:border-r-4 hover:border-red-500 pr-7 hover:bg-gray-100">
            <a href="https://www.amazon.in/"><span><BsPatchQuestionFill className="inline-block size-5 w-10"/>About</span></a>
          </li>
          <li className="py-1 hover:border-r-4 hover:border-red-500 pr-4 hover:bg-gray-100">
            <a href="https://www.amazon.in/"><span><IoMdMail className="inline-block size-5 w-10"/>Contact</span></a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default BurgerMenu;
