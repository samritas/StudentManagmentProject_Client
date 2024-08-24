import React from "react";
import { FaTelegram } from "react-icons/fa";
import CompanyLogo from "../../Assets/School/school-logo.png";

const Footers = () => {
  return (
    <footer className="text-center lg:text-left bg-[#FFFFFF] text-gray-400 mt-10">
      <div className="py-5 text-center md:text-left grid  w-11/12 xl:w-10/12 mx-auto mb-4 border-b border-gray-400">
        <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-4 gap-0 flex md:justify-between">
          <div className="md:mx-0 mx-5">
            <img
              src="https://smartstudent.app/media/2022/09/managment-software.png"
              className="w-52"
            />
          </div>

          <div className="">
            <h3 className="text-[#31587C] hover:text-[#32817A] text-xl font-bold my-8 flex items-center justify-start decoration-2 decoration-primary font-serif">
              Menu
            </h3>
            <p className="mb-4 motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-display text-[#1CA6C1]  flex items-center justify-start font-serif">
              Home
            </p>
            <p className="mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-display text-[#1CA6C1]   flex items-center justify-start font-serif">
              Students
            </p>
            <p className="mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-display text-[#1CA6C1]  flex items-center justify-start font-serif">
              Teachers
            </p>
            <p className="mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-display text-[#1CA6C1]   flex items-center justify-start font-serif">
              Parents
            </p>
          </div>

          <div className="">
            <h3 className="text-[#31587C] hover:text-[#32817A] text-xl font-bold my-8 flex items-center justify-start decoration-2 decoration-primary font-serif">
              Quick Links
            </h3>
            <p className="font-display text-[#1CA6C1] text-sm flex items-center justify-start mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-serif">
              All Subjects
            </p>
            <p className="font-display text-[#1CA6C1] text-sm flex items-center justify-start mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-serif">
              Support
            </p>
            <p className="font-display text-[#1CA6C1] text-sm flex items-center justify-start mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-serif">
              Addis Ababa
            </p>
            <p className="font-display text-[#1CA6C1] text-sm flex items-center justify-start mb-4  motion-safe:hover:translate-x-2 duration-300 hover:text-[#32817A] font-serif">
              Privacy Policy
            </p>
          </div>

          <div className="md:mx-0 mx-5">
            <h3 className="text-[#31587C] hover:text-[#32817A] text-xl font-bold my-8 flex items-center justify-start decoration-2 decoration-primary">
              Contact
            </h3>
            <p className="font-display text-[#1CA6C1]  hover:text-[#32817A] text-sm flex items-center  justify-start mb-4 motion-safe:hover:translate-x-2 duration-300 font-serif">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
              Addis Ababa
            </p>
            <p className="font-display text-[#1CA6C1]  hover:text-[#32817A] text-sm flex items-center justify-start mb-4 motion-safe:hover:translate-x-2 duration-300 font-serif">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              +2519-25 201 157
            </p>
            <p className="font-display text-[#1CA6C1]  hover:text-[#32817A] text-sm flex items-center justify-start mb-4 motion-safe:hover:translate-x-2 duration-300 font-serif">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              info.WaklaraInc@gmail.com
            </p>
            <p className="font-display text-[#1CA6C1] text-sm flex justify-start space-x-6 py-8 ">
              <a
                href=""
                type="button"
                className="rounded-full border-2 border-[#1CA6C1] text-[#1CA6C1] leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-110 hover:duration-300 w-8 h-8"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-2 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="" className="bg-white">
                <FaTelegram className="w-8 h-8" />
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-[#1CA6C1] text-[#1CA6C1]  leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-110 hover:duration-300 w-8 h-8"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-[#1CA6C1] text-[#1CA6C1] leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-110 hover:duration-300 w-8 h-8"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-footer flex  justify-center font-serif">
        <div>
          <span className="text-black">Powered by WaklaraInc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
