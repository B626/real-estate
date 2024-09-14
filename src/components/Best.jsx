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
    <section className="p-[40px_0_60px]">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]">
        <div className="flex gap-[10px] items-end sm:mb-[35px] l:mb-[0px] l:relative l:h-[100%] l:w-[100%]">
          <h2 className="text-[#fff] sm:text-[25px] md:text-[30px] md2:text-[35px] sm:leading-[110%] l:absolute l:top-[0px] l:left-[0px] l:w-[100%] l:h-[100%]">
            Best properties <br /> in{" "}
            <span className="sm:font-[700] text-[#FFE500]">Kyiv, Ukraine</span>
          </h2>
          <Link to="/" className="sm:pb-[5px] l:hidden">
            <img src={arrow} alt="->" />
          </Link>
        </div>
        <div className="relative sm:flex sm:flex-col sm:gap-[60px] l:gap-[0px]">
          <div className="sm:flex sm:flex-col sm:gap-[30px] md:flex-row md:gap-[10px] l:h-[553px] xl:justify-between">
            <div className="relative l:flex l:self-end">
              <div className="relative md:h-[100%] l:h-[auto] [overflow:hidden] rounded-[30px]">
                <img
                  src={i1}
                  className="sm:rounded-[15px] sm:w-[100%] sm2:rounded-[30px] md:h-[100%] hoverImg"
                  alt="appartment picture"
                />
                <p className="absolute bottom-[5px] left-[50%] translate-x-[-50%] [white-space:nowrap] text-[#fff] md:hidden md2:block font-[500] sm:text-[20px]">
                  Premium Apartments
                </p>
              </div>
            </div>
            <div className="relative l:flex l:self-center xxl:pb-[40px]">
              <div className="relative md:h-[100%] l:h-[auto] [overflow:hidden] rounded-[30px]">
                <img
                  src={i2}
                  className="sm:rounded-[15px] sm:w-[100%] sm2:rounded-[30px] md:h-[100%] hoverImg"
                  alt="appartment picture"
                />
                <p className="absolute bottom-[5px] left-[50%] translate-x-[-50%] [white-space:nowrap] text-[#fff] md:hidden md2:block font-[500] sm:text-[20px]">
                  Classic Homes
                </p>
              </div>
            </div>
            <div className="relative l:flex l:self-end">
              <div className="relative md:h-[100%] l:h-[auto] [overflow:hidden] rounded-[30px]">
                <img
                  src={i3}
                  className="sm:rounded-[15px] sm:w-[100%] sm2:rounded-[30px] md:h-[100%] hoverImg"
                  alt="appartment picture"
                />
                <p className="absolute bottom-[5px] left-[50%] translate-x-[-50%] [white-space:nowrap] text-[#fff] md:hidden md2:block font-[500] sm:text-[20px]">
                  Hi-Tec Houses
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center l:mt-[-40px]"
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
