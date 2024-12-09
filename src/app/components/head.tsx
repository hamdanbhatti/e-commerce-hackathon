import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdPerson2 } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";

const Head = () => {
  return (
    <section className="bg-[#7E33E0] w-full flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-48 py-2">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <span>
            <MdOutlineMail className="text-white text-xl" />
          </span>
          <p className="text-white text-sm md:text-base">mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <MdOutlinePhoneInTalk className="text-white text-xl" />
          </span>
          <p className="text-white text-sm md:text-base">(12345)67890</p>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-2 mt-2 md:mt-0">
        <div className="flex items-center gap-1">
          <p className="text-white text-sm md:text-base">English</p>
          <span>
            <MdKeyboardArrowDown className="text-white text-xl" />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-white text-sm md:text-base">USD</p>
          <span>
            <MdKeyboardArrowDown className="text-white text-xl" />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-white text-sm md:text-base">Login</p>
          <span>
            <MdPerson2 className="text-white text-xl" />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-white text-sm md:text-base">Wishlist</p>
          <span>
            <IoHeartOutline className="text-white text-xl" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Head;
