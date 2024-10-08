import React, { useRef } from "react";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import arrow from "/assets/img/icons/arrow-up-right-bold.svg";
import i1 from "/assets/img/best-1.jpg";
import i2 from "/assets/img/best-2.jpg";
import i3 from "/assets/img/best-3.jpg";

gsap.registerPlugin(ScrollTrigger);


const Best = () => {
  const section = useRef();
  const firstCard = useRef();
  const secondCard = useRef();
  const thirdCard = useRef();
  const firstPauseRef = useRef()
  const secondPauseRef = useRef();
  const thirdPauseRef = useRef();
  const viewBtn = useRef()


  useGSAP(() => {
    let mm = gsap.matchMedia()

    mm.add("(min-width:992px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 40px",
          end: "+=4000",
          scrub: 2,
          pin: true,
        },
      });

      tl.from(firstCard.current, { y: 800 });
      tl.from(firstPauseRef.current, { y: 1000 });
      tl.from(secondCard.current, { y: 800 });
      tl.from(secondPauseRef.current, { y: 1000 });
      tl.from(thirdCard.current, { y: 800 });
      tl.from(thirdPauseRef.current, { y: 1000 });
    })
  })

  return (
    <section
      ref={section}
      className="p-[40px_0_60px]"
      name="properties"
    >
      <div
        className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]"
      >
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
          <div className="sm:flex sm:flex-col sm:gap-[30px] md:flex-row md:gap-[10px] l:h-[553px] xl:justify-between relative">
            <div className="relative l:flex l:self-end" ref={firstCard}>
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
            <div ref={firstPauseRef}></div>
            <div
              className="relative l:flex l:self-center xxl:pb-[40px]"
              ref={secondCard}
            >
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
            <div ref={secondPauseRef}></div>
            <div className="relative l:flex l:self-end" ref={thirdCard}>
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
            <div ref={thirdPauseRef}></div>
          </div>
          <Link
            to="/"
            className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center l:mt-[-40px] button z-10"
            ref={viewBtn}
          >
            View properties
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 1.5L17.5 8.5L10.5 15.5"
                stroke="#373A36"
                strokeWidth="2"
                className="pathRight"
              />
              <line
                x1="0.5"
                y1="8.5"
                x2="17.5"
                y2="8.5"
                stroke="#373A36"
                strokeWidth="2"
                className="lineRight"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Best;
