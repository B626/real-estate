import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sm:absolute sm:top-[0] sm:left-[0] sm:w-[100%] sm:p-[15px_0] z-[2]">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] sm:flex sm:justify-between items-center l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]">
        <h1 className="sm:text-[30px] l:text-[40px] m-[0] font-[900] uppercase text-[#FFE500]">
          Re.
        </h1>
        <nav>
          <ul className="flex sm:hidden l:flex l:gap-[35px]">
            <li>
              <Link to="/" className="text-[#fff] text-[18px]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#fff] text-[18px]">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#fff] text-[18px]">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#fff] text-[18px]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#fff] text-[18px]">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-[#FFE500] font-[500] l:hidden">Burger</div>
      </div>
    </header>
  );
};

export default Header;
