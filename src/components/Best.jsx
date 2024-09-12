import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import arrow from "/assets/img/icons/arrow-up-right-bold.svg";
import arrowRight from "/assets/img/icons/arrow-right.svg";
import i1 from "/assets/img/best-1.jpg";
import i2 from "/assets/img/best-2.jpg";
import i3 from "/assets/img/best-3.jpg";

const Best = () => {
  return (
    <section className="p-[40px_0]">
      <div className="sm:max-w-[320px] sm:p-[0_15px] m-[0_auto]">
        <div className="flex gap-[10px] items-end sm:mb-[35px]">
          <h2 className="text-[#fff] sm:text-[25px] sm:leading-[110%]">
            Best properties <br /> in{" "}
            <span className="sm:font-[700] text-[#FFE500]">Kyiv, Ukraine</span>
          </h2>
          <Link to="/" className="sm:pb-[5px]">
            <img src={arrow} alt="->" />
          </Link>
        </div>
        <div className="relative sm:flex sm:flex-col sm:gap-[60px]">
          <div className="sm:flex sm:flex-col sm:gap-[30px]">
            <div>
              <div className="relative">
                <img
                  src={i1}
                  className="sm:rounded-[15px]"
                  alt="appartment picture"
                />
                <p className="absolute bottom-[5px] left-[50%] translate-x-[-50%] [white-space:nowrap] text-[#fff] font-[500] sm:text-[20px]">
                  Premium Apartments
                </p>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src={i2}
                  className="sm:rounded-[15px]"
                  alt="appartment picture"
                />
                <p className="absolute bottom-[5px] left-[50%] translate-x-[-50%] [white-space:nowrap] text-[#fff] font-[500] sm:text-[20px]">
                  Classic Homes
                </p>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src={i3}
                  className="sm:rounded-[15px]"
                  alt="appartment picture"
                />
                <p className="absolute bottom-[5px] left-[50%] translate-x-[-50%] [white-space:nowrap] text-[#fff] font-[500] sm:text-[20px]">
                  Hi-Tec Houses
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[18px] uppercase font-[900] p-[15px_30px] sm:rounded-[20px]
             sm:self-center"
          >
            View properties
            <img src={arrowRight} alt="->" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Best;
