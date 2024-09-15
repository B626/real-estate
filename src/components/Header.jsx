import React, { useEffect, useRef } from "react";
import "../App.css";
// import { Link } from "react-router-dom";

import burger from "/assets/img/icons/burger.svg";
import close from "/assets/img/icons/close.svg";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";


const Header = () => {
  const body = document.querySelector("body");
  const burgerRef = useRef(null);
  const burgerButtonRef = useRef(null);
  const burgerCloseButtonRef = useRef(null);

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  // Function to handle the activation of a link.

    const handleScrollDown = () => {};

  const handleBurgerClick = () => {
    burgerRef.current.style.right = "0%";
    // body.style.overflow = "hidden";
  };

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
              to="home"
              className="text-[#fff] text-[24px] navLink"
              onSetActive={() => handleScrollDown()}
              smooth={true}
              duration={500}
              onClick={() => handleBurgerNavClick()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="properties"
              className="text-[#fff] text-[24px] navLink"
              onSetActive={() => handleScrollDown()}
              smooth={true}
              duration={500}
              onClick={() => handleBurgerNavClick()}
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              className="text-[#fff] text-[24px] navLink"
              onSetActive={() => handleScrollDown()}
              smooth={true}
              duration={500}
              onClick={() => handleBurgerNavClick()}
            >
              Why us
            </Link>
          </li>
          {/* <li>
            <Link
              to="houses"
              className="text-[#fff] text-[24px] navLink"
              onSetActive={() => handleScrollDown()}
              smooth={true}
              duration={500}
              onClick={() => handleBurgerNavClick()}
            >
              Houses
            </Link>
          </li> */}
          <li>
            <Link
              to="footer"
              className="text-[#fff] text-[24px] navLink"
              onSetActive={() => handleScrollDown()}
              smooth={true}
              duration={500}
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
                <Link
                  to="home"
                  className="text-[#fff] text-[18px] navLink relative cursor-pointer"
                  onSetActive={() => handleScrollDown()}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="properties"
                  className="text-[#fff] text-[18px] navLink relative cursor-pointer"
                  onSetActive={() => handleScrollDown()}
                  smooth={true}
                  duration={500}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  className="text-[#fff] text-[18px] navLink relative cursor-pointer"
                  onSetActive={() => handleScrollDown()}
                  smooth={true}
                  duration={500}
                >
                  Why us
                </Link>
              </li>
              <li>
                <Link
                  to="houses"
                  className="text-[#fff] text-[18px] navLink relative cursor-pointer"
                  onSetActive={() => handleScrollDown()}
                  smooth={true}
                  duration={500}
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  className="text-[#fff] text-[18px] navLink relative cursor-pointer"
                  onSetActive={() => handleScrollDown()}
                  smooth={true}
                  duration={500}
                >
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
