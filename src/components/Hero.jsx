import React from "react";
import "../App.css";
import arrow from "/assets/img/icons/arrow-up-right.svg";
import arrowDown from "/assets/img/icons/arrow-down.svg";
import mobileBg from "/assets/img/mobile-hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // <section className="sm:bg-[url(`assets/img/mobile-hero-bg.jpg`)] bg-no-repeat bg-center bg-cover sm:pt-[125px]">
    //   <div className="sm:max-w-[320px] sm:p-[0_15px] m-[0_auto]">
    //     <h1 className="sm:text-[40px] sm:text-center font-[500] sm:leading-[130%] text-[#fff] sm:mb-[40px]">
    //       Real estate provides peace for everyone
    //     </h1>
    //     <div className="grid sm:grid-rows-3 sm:grid-cols-2 sm:gap-x-[9px] sm:gap-y-[22px] sm:mb-[28px]">
    //       <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
    //         <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
    //           35+
    //         </h3>
    //         <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
    //           estates sold this week
    //         </p>
    //       </div>
    //       <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
    //         <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
    //           3
    //         </h3>
    //         <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
    //           estates sold this week
    //         </p>
    //       </div>
    //       <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
    //         <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
    //           999+
    //         </h3>
    //         <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
    //           estates sold this week
    //         </p>
    //       </div>
    //       <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
    //         <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
    //           47
    //         </h3>
    //         <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
    //           estates sold this week
    //         </p>
    //       </div>
    //       <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
    //         <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
    //           23
    //         </h3>
    //         <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
    //           estates sold this week
    //         </p>
    //       </div>
    //       <div
    //         className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff05]
    //       [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px] sm:w-[57px] sm:h-[57px]"
    //       >
    //         <p className="sm:hidden">Explore</p>
    //         <Link to="/">
    //           <img src={arrow} alt="->" />
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="sm:flex sm:gap-[7px] sm:flex-col">
    //       <h2 className="text-[#FFE500] sm:text-[20px] sm:font-[500]">
    //         We put in work
    //       </h2>
    //       <p className="text-[13px] text-[#F0F0F0]">
    //         Lorem Ipsum has been the industry's standard dummy text ever since
    //         the 1500s, when an unknown printer took unknown
    //       </p>
    //     </div>
    //     <div className="w-[100%] relative h-[70px]">
    //       <Link className="absolute bottom-[10px] left-[50%] translate-x-[-50%]">
    //         <img src={arrowDown} alt="|" />
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className={"bg-no-repeat bg-center bg-cover sm:pt-[125px] relative"}>
      <div className="sm:max-w-[320px] sm:p-[0_15px] m-[0_auto] relative z-[2]">
        <h1 className="sm:text-[40px] sm:text-center font-[500] sm:leading-[130%] text-[#fff] sm:mb-[40px]">
          Real estate provides peace for everyone
        </h1>
        <div className="grid sm:grid-rows-3 sm:grid-cols-2 sm:gap-x-[9px] sm:gap-y-[22px] sm:mb-[28px]">
          <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
            <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
              35+
            </h3>
            <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
              estates sold this week
            </p>
          </div>
          <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
            <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
              3
            </h3>
            <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
              estates sold this week
            </p>
          </div>
          <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
            <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
              999+
            </h3>
            <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
              estates sold this week
            </p>
          </div>
          <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
            <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
              47
            </h3>
            <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
              estates sold this week
            </p>
          </div>
          <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
            <h3 className="text-[#fff] sm:text-[30px] font-[500] sm:leading-[100%]">
              23
            </h3>
            <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
              estates sold this week
            </p>
          </div>
          <div
            className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff05] 
          [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px] sm:w-[57px] sm:h-[57px]"
          >
            <p className="sm:hidden">Explore</p>
            <Link to="/">
              <img src={arrow} alt="->" />
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:gap-[7px] sm:flex-col">
          <h2 className="text-[#FFE500] sm:text-[20px] sm:font-[500]">
            We put in work
          </h2>
          <p className="text-[13px] text-[#F0F0F0]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took unknown
          </p>
        </div>
        <div className="w-[100%] relative h-[70px]">
          <Link className="absolute bottom-[10px] left-[50%] translate-x-[-50%]">
            <img src={arrowDown} alt="|" />
          </Link>
        </div>
      </div>
      <img src={mobileBg} className="absolute left-[0] top-[0] w-[100%] h-[100%] z-[1]" alt="" />
    </section>
  );
};

export default Hero;
