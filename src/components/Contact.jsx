import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <footer className="p-[20px_0_40px]">
      <div className="sm:max-w-[320px] sm:p-[0_15px] m-[0_auto] w-[100%] sm:flex flex-col">
        <div className="[flex:1]">
          <h2 className="sm:text-[35px] text-[#fff] sm:text-center sm:mb-[42px]">
            Contacts
          </h2>
          <div className='flex justify-center flex-col'>
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
            <p className='text-center text-[#fff] text-[20px] leading-[110%]'>Made by <br /><span className='font-[900]'>OCEAN STUDIO</span></p>
          </div>
        </div>
        <div className="[flex:1] sm:hidden">2</div>
      </div>
    </footer>
  );
}

export default Contact