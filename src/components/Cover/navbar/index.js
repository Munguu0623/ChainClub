import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full m-auto h-12">
      <h2 className="ml-8 text-white font-semibold">TechChain</h2>
      <ul className=" md:flex hidden md:ml-28 lg:ml-64 w-5/12 justify-around items-center text-white font-light text-xs">
        <Link to="/" className="">
          <li>Нүүр</li>
        </Link>
        <Link to="/" className="">
          <li>Бидний тухай</li>
        </Link>
        <Link to="/" className="">
          <li>Мэдээ</li>
        </Link>
        <Link to="/" className="">
          <li>Блог</li>
        </Link>
        {/* <Link to="/" className="">
          <li>Холбоо барих</li>
        </Link> */}
      </ul>
      <div className=" hidden md:w-2/4 lg:w-3/6 md:flex justify-end ">
      <button className="  mr-16 text-white bg-gradient-to-tr from-buttonColor1 to-buttonColor2 py-1 px-2 rounded-t-3xl rounded-l-3xl text-sm font-normal" >Холбоо барих</button>
      </div>
    </nav>
  );
};

export default Navbar;
