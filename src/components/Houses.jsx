import React from 'react'
import "../App.css";
import house from "/assets/img/houses-1.png";
import card1 from "/assets/img/houses-2.png";
import card2 from "/assets/img/houses-3.png";
import card3 from "/assets/img/houses-4.png";

import { Link } from 'react-router-dom';

const Houses = () => {
  return (
    <section className="sm:hidden l:block p-[60px_0_80px]" name="houses">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] relative z-[2] l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]">
        <div className="flex justify-between mb-[85px]">
          <div className="flex flex-col gap-[40px]">
            <h2 className="text-[46px] text-[#fff] font-[900] uppercase leading-[100%]">
              Look at these beautiful houses
            </h2>
            <Link
              to="/"
              className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-start l:visible button"
            >
              Check them out
            </Link>
          </div>
          <img src={house} alt="" />
        </div>
        <div className="flex justify-between gap-[35px]">
          <div className="flex [flex:1] self-start flex-col gap-[15px]">
            <div className="[overflow:hidden] rounded-[30px]">
              <img src={card1} className="hoverImg w-[100%]" alt="" />
            </div>
            <p className="text-[#fff] text-[15px] font-[500] text-center">
              Look at this lovely building. It was sold 2 years ago...
            </p>
            <Link
              to="/"
              className="text-center text-[15px] text-[#FFE500] font-[500] navLink flex self-center"
            >
              Read more
            </Link>
          </div>
          <div className="flex [flex:2] flex-col gap-[15px]">
            <div className="[overflow:hidden] rounded-[30px]">
              <img src={card2} className="hoverImg w-[100%]" alt="" />
            </div>
            <p className="text-[#fff] text-[15px] font-[500] text-center">
              This is one of the best works of ours so far. This beautiful villa
              was made 3 years ago and sold immediatly
            </p>
            <Link
              to="/"
              className="text-center text-[15px] text-[#FFE500] font-[500] navLink flex self-center"
            >
              Read more
            </Link>
          </div>
          <div className="flex [flex:1] self-start flex-col gap-[15px]">
            <div className="[overflow:hidden] rounded-[30px]">
              <img src={card3} className="hoverImg w-[100%]" alt="" />
            </div>
            <p className="text-[#fff] text-[15px] font-[500] text-center">
              Personally, our favorite house. It has a lof of beautiful rooms
            </p>
            <Link
              to="/"
              className="text-center text-[15px] text-[#FFE500] font-[500] navLink flex self-center"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Houses