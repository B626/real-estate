import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <footer className="p-[40px_0_40px]">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] w-[100%] sm:flex flex-col">
        <div className="[flex:1]">
          <h2 className="sm:text-[35px] font-[900] uppercase text-[#fff] sm:text-center sm:mb-[42px]">
            Contacts
          </h2>
          <p className="md:text-[16px] sm:hidden text-[#9D9D9D] font-[500] text-center md:p-[0_80px] md:block md:mb-[35px]">
            Lorem ipsum dolor sit amet consectetur. Proin eros ac dui sit
            laoreet viverra. Consequat vestibulum sit mattis diam iaculis leo
            ridiculus adipiscing velit. Et enim egestas venenatis proin duis.
            Accumsan feugiat mi amet egestas nunc placerat velit cras lectus.
          </p>
          <div className="flex justify-center flex-col">
            <ul className="flex flex-col sm:gap-[35px] mb-[60px]">
              <li className="flex flex-col sm:gap-[5px]">
                <h4 className="text-[25px] text-[#fff] text-center font-[900] sm:leading-[100%]">
                  E-MAIL
                </h4>
                <p className="text-[16px] text-center text-[#FFE500]">
                  gmail@gmail.com
                </p>
              </li>
              <li className="flex flex-col sm:gap-[5px]">
                <h4 className="text-[25px] text-[#fff] text-center font-[900] sm:leading-[100%]">
                  E-MAIL
                </h4>
                <p className="text-[16px] text-center text-[#FFE500]">
                  gmail@gmail.com
                </p>
              </li>
              <li className="flex flex-col sm:gap-[5px]">
                <h4 className="text-[25px] text-[#fff] text-center font-[900] sm:leading-[100%]">
                  E-MAIL
                </h4>
                <p className="text-[16px] text-center text-[#FFE500]">
                  gmail@gmail.com
                </p>
              </li>
            </ul>
            <Link
              to="/"
              className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center text-center mb-[40px]"
            >
              Contact Form
            </Link>
            <p className="text-center text-[#fff] text-[20px] leading-[110%]">
              Made by <br />
              <span className="font-[900]">OCEAN STUDIO</span>
            </p>
          </div>
        </div>
        <div className="[flex:1] sm:hidden">2</div>
      </div>
    </footer>
  );
}

export default Contact