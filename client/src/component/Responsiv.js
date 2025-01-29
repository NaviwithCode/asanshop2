import React from "react";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";
import SearchFrom from "./form/SearchFrom";

const ResponsiveMenu = ({ show }) => {
//   const menuItems = [
//     // {name:'Home',href:'/'},
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Project", href: "/project" },
//   ];
  return (
    <div
      className={`${
        show ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%]  transition-all duration-300 shadow-md  pt-16 px-8 bg-white pb-4 z-50 dark:bg-gray-900 md:hidden flex flex-col justify-between `}
    >
      <div className="card">
        
          {/* <a href="/" className=" flex items-center gap-4">
            <img src={logo} className="h-12 rounded-full mb-2 shadow" />
            <h1 className="font-semibold"></h1> */}
            {/* <br className="h-2 w-5 text-black md:hidden"/> */}
          {/* </a> */}
      
        <div className="flex items-center gap-4 md:gap-7">
          {/* {menuItems.map((Item, index) => (
            <a
              className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all mb- inline-block duration-300"
              key={index}
              href={Item.href}
            >
              {Item.name}
            </a>
          ))} */}
                  <nav className="flex flex-col text-lg font-medium gap-4 py-7">
                    <SearchFrom/>
              <Link to={"/"}>Home</Link>
              <Link to={"about"}>About</Link>
              <Link to={"product"}>Product</Link>
              <Link to={"contact"}>Contact</Link>
            </nav>
        </div>
      </div>
        {/* footer section */}
        <div>
<h1>
    Made with ❤ by {''}
    <a href="https://www.instagram.com/asan_digital_marketing/">ASAN</a>
</h1>
        </div>
    </div>
  );
};

export default ResponsiveMenu;