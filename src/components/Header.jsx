import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sm:absolute sm:top-[0] sm:left-[0] sm:w-[100%] sm:p-[15px_0]">
      <div className="sm:max-w-[320px] sm:p-[0_15px] m-[0_auto] sm:flex sm:justify-between items-center">
        <h1 className="sm:text-[30px] m-[0] font-[900] uppercase text-[#FFE500]">
          Re.
        </h1>
        <nav>
          <ul className="flex sm:flex-col sm:hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Sustainability</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="text-[#FFE500] font-[500]">Burger</div>
      </div>
    </header>
  );
};

export default Header;
