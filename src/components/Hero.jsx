import React from "react";
import "../App.css";
import arrow from "/assets/img/icons/arrow-up-right.svg";
import arrowDown from "/assets/img/icons/arrow-down.svg";
import mobileBg from "/assets/img/mobile-hero-bg.jpg";
import bg from "/assets/img/hero-bg.jpg";
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
    <section
      className={
        "bg-no-repeat bg-center bg-cover sm:pt-[125px] l:pt-[160px] relative"
      }
    >
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] relative z-[2] l:max-w-[980px] l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]">
        <h1 className="sm:text-[40px] md:text-[60px] sm:text-center font-[500] sm:leading-[130%] text-[#fff] sm:mb-[40px] l:flex l:flex-col l:text-[80px] xxl:text-[80px] xxxl:text-[110px]">
          <span className="l:flex l:self-start">Real estate </span>
          <span className="l:flex l:self-center">provides peace </span>
          <span className="l:flex l:self-end">for everyone</span>
        </h1>
        <div className="l:flex l:justify-betwee l:gap-[64px] l:items-end">
          <div className="grid sm:grid-rows-3 sm:grid-cols-2 l:grid-rows-2 l:grid-cols-3 sm:gap-x-[9px] sm:gap-y-[22px] sm:mb-[28px] l:[flex:1_0_630px] l:mb-[0px]">
            <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px] l:w-[100%]">
              <h3 className="text-[#fff] sm:text-[30px] md:text-[35px] font-[500] sm:leading-[100%]">
                35+
              </h3>
              <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
                estates sold this week
              </p>
            </div>
            <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
              <h3 className="text-[#fff] sm:text-[30px] md:text-[35px] font-[500] sm:leading-[100%]">
                3
              </h3>
              <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
                real estate awards
              </p>
            </div>
            <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
              <h3 className="text-[#fff] sm:text-[30px] md:text-[35px] font-[500] sm:leading-[100%]">
                100+
              </h3>
              <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
                client booked every week
              </p>
            </div>
            <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
              <h3 className="text-[#fff] sm:text-[30px] md:text-[35px] font-[500] sm:leading-[100%]">
                47
              </h3>
              <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
                guys looking at this site right now
              </p>
            </div>
            <div className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff21] [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px]">
              <h3 className="text-[#fff] sm:text-[30px] md:text-[35px] font-[500] sm:leading-[100%]">
                23
              </h3>
              <p className="text-[#fff] sm:text-[15px] sm:leading-[120%]">
                years ago we started
              </p>
            </div>
            <Link to="/"
              className="sm:p-[12px] sm:border-[#ffffff32] border-[1px] bg-[#ffffff05] 
          [backdrop-filter:blur(13px)] sm:flex sm:flex-col sm:gap-[2px] sm:w-[57px] sm:h-[57px] relative sm3:w-[100%] sm3:h-[100%]
          "
            >
              <p className="sm:hidden sm3:block sm3:absolute font-[500] sm3:text-[30px] text-[#fff] sm3:left-[15px] sm3:bottom-[10px] leading-[100%]">
                Explore
              </p>
              <Link
                to="/"
                className="sm3:absolute sm3:top-[15px] sm3:right-[15px]"
              >
                <img src={arrow} alt="->" />
              </Link>
            </Link>
          </div>
          <div className="xl:flex xl:gap-[64px]">
            <hr className="hidden xl:block text-[#fff] bg-[#fff] h-[120px] w-[2px]" />
            <div className="sm:flex sm:gap-[7px] sm:flex-col l:max-w-[590px]">
              <h2 className="text-[#FFE500] sm:text-[20px] sm:font-[500]">
                We put in work
              </h2>
              <p className="text-[13px] sm3:text-[16px] text-[#F0F0F0]">
                The employees of a real estate company work tirelessly to ensure
                success in a competitive market.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] relative h-[70px]">
          <Link className="absolute bottom-[10px] left-[50%] translate-x-[-50%] l:hidden">
            <img src={arrowDown} alt="|" />
          </Link>
        </div>
      </div>
      <img
        src={bg}
        className="absolute [object-fit:cover] [object-position:center] left-[0] top-[0] w-[100%] h-[100%] z-[1]"
        alt=""
      />
    </section>
  );
};

export default Hero;
