import React from 'react'
import "../App.css";

import img from "/assets/img/exp-1.jpg";
import { Link } from 'react-router-dom';

const Exp = () => {
  return (
    <section className="p-[20px_0_40px]">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] sm:flex flex-col l:flex-row-reverse l:gap-[20px] l:max-w-[980px] xl:max-w-[1180px] xxl:max-w-[1380px]">
        <h2 className="text-[#fff] sm:text-[25px] sm:leading-[110%] uppercase font-[900] sm:mb-[20px] l:hidden">
          We provide better experience
        </h2>
        <div className="sm:flex sm:justify-between sm:gap-[15px] mb-[40px] items-center">
          <img
            src={img}
            className="sm:rounded-[20px] sm:w-[50%] md:w-[30%]"
            alt=""
          />
          <div className="l:flex l:flex-col">
            <h2 className="text-[#fff] sm:text-[25px] sm:leading-[110%] uppercase font-[900] sm:mb-[20px] hidden l:block l:text-center l:text-[46px]">
              We provide better experience
            </h2>
            <p className="text-[12px] sm3:text-[14px] md:text-[16px] md:leading-[180%] text-center text-[#fff] l:max-w-[520px] l:m-[0_auto] l:mb-[20px]">
              Clients should choose the services of this real estate company
              because of its proven track record of delivering exceptional
              results with a personalized touch. The company's team of dedicated
              professionals brings extensive market knowledge, industry
            </p>
            <Link
              to="/"
              className="bg-[#FFE500] sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center text-center hidden l:flex l:self-center button"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="mb-[40px] l:[flex:1_0_300px]">
          <ul className="flex flex-col sm:gap-[25px] md2:gap-[50px] l:h-[100%] l:justify-between">
            <li className="l:flex l:flex-col l:gap-[10px]">
              <h3 className="font-[700] sm:text-[20px] sm3:text-[24px] md:text-[30px] md2:text-[40px] sm:text-center sm:text-[#FFE500] l:leading-[110%]">
                12 million properties
              </h3>
              <p className="sm:text-center sm:text-[12px] sm3:text-[14px] md:text-[16px] text-[#fff] p-[0_20px]">
                we sold last year, and we plan to beat this number this year. we
                reached 70% of this goal so far
              </p>
            </li>
            <li className="l:flex l:flex-col l:gap-[10px]">
              <h3 className="font-[700] sm:text-[20px] sm3:text-[24px] md:text-[30px] md2:text-[40px] sm:text-center sm:text-[#FFE500] l:leading-[110%]">
                140 people working
              </h3>
              <p className="sm:text-center sm:text-[12px] sm3:text-[14px] md:text-[16px] text-[#fff] p-[0_20px]">
                working for us right now. Tech engineers, designers, builders,
                marketing managers, etc
              </p>
            </li>
            <li className="l:flex l:flex-col l:gap-[10px]">
              <h3 className="font-[700] sm:text-[20px] sm3:text-[24px] md:text-[30px] md2:text-[40px] sm:text-center sm:text-[#FFE500] l:leading-[110%]">
                23 years experience
              </h3>
              <p className="sm:text-center sm:text-[12px] sm3:text-[14px] md:text-[16px] text-[#fff] p-[0_20px]">
                we started in 2001, and so far we are the best real estate
                bussiness in Ukraine
              </p>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center text-center l:hidden button"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}

export default Exp