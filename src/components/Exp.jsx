import React from 'react'
import "../App.css";

import img from "/assets/img/exp-1.jpg";
import { Link } from 'react-router-dom';

const Exp = () => {
  return (
    <section className="p-[20px_0_40px]">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] sm:flex flex-col ">
        <h2 className="text-[#fff] sm:text-[25px] sm:leading-[110%] uppercase font-[900] sm:mb-[20px]">
          We provide better experience
        </h2>
        <div className="sm:flex sm:justify-between sm:gap-[15px] mb-[40px] items-center">
          <img src={img} className="sm:rounded-[20px] sm:w-[50%]" alt="" />
          <div>
            <p className="text-[12px] sm3:text-[14px] md:text-[16px] md:leading-[180%] text-center text-[#fff]">
              Lorem ipsum dolor sit amet consectetur. Fringilla volutpat viverra
              eu facilisis ornare quam. Pharetra proin ultricies dictumst odio
              amet. Est turpis sollicitudin quis neque. Eget ut sagittis
              volutpat sem. Purus enim dapibus donec odio.
            </p>
          </div>
        </div>
        <div className="mb-[40px]">
          <ul className="flex flex-col sm:gap-[25px]">
            <li>
              <h3 className="font-[700] sm:text-[20px] sm3:text-[24px] md:text-[30px] sm:text-center sm:text-[#FFE500]">
                12 million properties
              </h3>
              <p className="sm:text-center sm:text-[12px] sm3:text-[14px] md:text-[16px] text-[#fff] p-[0_20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </li>
            <li>
              <h3 className="font-[700] sm:text-[20px] sm3:text-[24px] md:text-[30px] sm:text-center sm:text-[#FFE500]">
                12 million properties
              </h3>
              <p className="sm:text-center sm:text-[12px] sm3:text-[14px] md:text-[16px] text-[#fff] p-[0_20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </li>
            <li>
              <h3 className="font-[700] sm:text-[20px] sm3:text-[24px] md:text-[30px] sm:text-center sm:text-[#FFE500]">
                12 million properties
              </h3>
              <p className="sm:text-center sm:text-[12px] sm3:text-[14px] md:text-[16px] text-[#fff] p-[0_20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center text-center"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}

export default Exp