import React, { useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import burger from "/assets/img/icons/burger.svg";
import close from "/assets/img/icons/close.svg";


const Header = () => {
  const body = document.querySelector("body")
  const burgerRef = useRef(null)
  const burgerButtonRef = useRef(null)
  const burgerCloseButtonRef = useRef(null)

  const handleBurgerClick = () => {
    burgerRef.current.style.right = "0%"
    body.style.overflow = "hidden"
  }

  const handleBurgerCloseClick = () => {
    burgerRef.current.style.right = "120%";
    body.style.overflow = "visible";
  };

  const handleBurgerNavClick = () => {
    burgerRef.current.style.right = "120%";
    body.style.overflow = "visible";
  };

  return (
    <>
      <div
        ref={burgerRef}
        className="absolute z-[3] w-[100vw] h-[100vh] bg-[#111] text-[#fff] p-[15px_30px] flex justify-between items-start right-[120%] [transition:.2s_ease]"
      >
        <ul className="flex flex-col gap-[35px]">
          <li>
            <Link
              to="/"
              className="text-[#fff] text-[24px] navLink"
              onClick={() => handleBurgerNavClick()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#fff] text-[24px] navLink"
              onClick={() => handleBurgerNavClick()}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#fff] text-[24px] navLink"
              onClick={() => handleBurgerNavClick()}
            >
              Sustainability
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#fff] text-[24px] navLink"
              onClick={() => handleBurgerNavClick()}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#fff] text-[24px] navLink"
              onClick={() => handleBurgerNavClick()}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <img
          ref={burgerCloseButtonRef}
          src={close}
          alt="close"
          onClick={() => handleBurgerCloseClick()}
          className="w-[40px]"
        />
      </div>
      <header className="sm:absolute sm:top-[0] sm:left-[0] sm:w-[100%] sm:p-[15px_0] z-[2]">
        <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] sm:flex sm:justify-between items-center l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]">
          <h1 className="sm:text-[30px] l:text-[40px] m-[0] font-[900] uppercase text-[#FFE500]">
            Re.
          </h1>
          <nav>
            <ul className="flex sm:hidden l:flex l:gap-[35px]">
              <li>
                <Link to="/" className="text-[#fff] text-[18px] navLink relative">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#fff] text-[18px] navLink relative">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#fff] text-[18px] navLink relative">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#fff] text-[18px] navLink relative">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#fff] text-[18px] navLink relative">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div
            ref={burgerButtonRef}
            className="text-[#FFE500] font-[500] l:hidden"
            onClick={() => handleBurgerClick()}
          >
            <img src={burger} className="w-[30px]" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
