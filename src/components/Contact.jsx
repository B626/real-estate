import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <footer className="p-[40px_0_40px]" name="footer">
      <div className="sm:max-w-[320px] sm2:max-w-[100%] sm:p-[0_15px] m-[0_auto] w-[100%] sm:flex flex-col l:max-w-[980px] l:flex-row l:items-center xl:max-w-[1180px] xxl:max-w-[1380px]">
        <div className="[flex:1]">
          <h2 className="sm:text-[35px] font-[900] uppercase text-[#fff] sm:text-center sm:mb-[42px]">
            Contacts
          </h2>
          <p className="md:text-[16px] sm:hidden text-[#9D9D9D] font-[500] text-center md:p-[0_80px] md2:p-[0] md2:max-w-[330px] md2:m-[0_auto_80px] md:block md:mb-[35px] l:mb-[50px]">
            Feedback is crucial in the real estate niche because it serves as a
            powerful tool for growth and improvement, benefiting both agents and
            clients alike
          </p>
          <div className="flex justify-center flex-col">
            <ul className="flex flex-col sm:gap-[35px] mb-[60px]">
              <li className="flex flex-col sm:gap-[5px]">
                <h4 className="text-[25px] text-[#fff] text-center font-[900] sm:leading-[100%] l:text-[20px]">
                  E-MAIL
                </h4>
                <p className="text-[16px] text-center text-[#FFE500]">
                  realestatereal@gmail.com
                </p>
              </li>
              <li className="flex flex-col sm:gap-[5px]">
                <h4 className="text-[25px] text-[#fff] text-center font-[900] sm:leading-[100%] l:text-[20px]">
                  Phone number
                </h4>
                <p className="text-[16px] text-center text-[#FFE500]">
                  +380949741258
                </p>
              </li>
              <li className="flex flex-col sm:gap-[5px]">
                <h4 className="text-[25px] text-[#fff] text-center font-[900] sm:leading-[100%] l:text-[20px]">
                  Address
                </h4>
                <p className="text-[16px] text-center text-[#FFE500]">
                  Maydan Nezalezhnosti 48
                </p>
              </li>
            </ul>
            <Link
              to="/"
              className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center text-center mb-[40px] l:hidden button"
            >
              Contact Form
            </Link>
            <p className="text-center text-[#fff] text-[20px] leading-[110%] l:hidden">
              Made by <br />
              <span className="font-[900]">OCEAN STUDIO</span>
            </p>
          </div>
        </div>
        <div className="[flex:1] sm:hidden l:block">
          <div className="flex flex-col gap-[50px] justify-center items-center">
            <h2 className="sm:text-[35px] font-[900] uppercase text-[#fff] sm:text-center">
              Contact form
            </h2>
            <form className="flex flex-col gap-[40px] w-[400px]">
              <input
                type="text"
                placeholder="First name"
                className="text-[14px] text-[#FFE500] w-[100%] bg-transparent border-b-[1px] border-[#9D9D9D] [outline:none] h-[25px]"
              />
              <input
                type="text"
                placeholder="Email"
                className="text-[14px] text-[#FFE500] w-[100%] bg-transparent border-b-[1px] border-[#9D9D9D] [outline:none] h-[25px]"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="text-[14px] text-[#FFE500] w-[100%] bg-transparent border-b-[1px] border-[#9D9D9D] [outline:none] h-[25px]"
              />
              <textarea
                type="text"
                placeholder="Message"
                className="text-[14px] text-[#FFE500] w-[100%] bg-transparent border-b-[1px] border-[#9D9D9D] [resize:none] [outline:none] h-[25px]"
              />
            </form>
            <Link
              to="/"
              className="bg-[#FFE500] sm:flex sm:gap-[10px]
             sm:text-[16px] uppercase font-[900] p-[10px_30px] sm:rounded-[20px]
             sm:self-center l:visible button"
            >
              Send
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-[#fff] text-[20px] hidden leading-[110%] l:block l:mt-[50px]">
        Made by <br />
        <span className="font-[900]">OCEAN STUDIO</span>
      </p>
    </footer>
  );
}

export default Contact