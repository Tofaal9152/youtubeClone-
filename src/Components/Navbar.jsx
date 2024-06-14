import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BiSolidVideoPlus } from "react-icons/bi";
import YoutubeLogo from "../assets/YoutubeLogo.jpeg";
import search from "../assets/search.png";
import jack from "../assets/jack.png";
import { useDispatch } from "react-redux";
import { hideNav } from "../redux/Counter/counterSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideNav());
  };

  return (
    <div className="flex fixed bg-white w-full max-w-full items-center justify-between px-[1%] py-[0.5%]">
      <div className="flex space-x-4 items-center justify-center">
        <RxHamburgerMenu onClick={handleClick} className="cursor-pointer" />
        <a href={`/`}>
          <img
            className="w-[7rem] cursor-pointer"
            src={YoutubeLogo}
            alt="YouTube Logo"
          />
        </a>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex space-x-4 items-center justify-center rounded-full border-2 w-[35rem]">
          <input className="w-[30rem] p-[0.4rem] outline-none" type="text" />
          <img src={search} alt="Search" className="cursor-pointer" />
        </div>
        <MdOutlineKeyboardVoice size={30} className="cursor-pointer" />
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <BiSolidVideoPlus size={25} className="cursor-pointer" />
        <IoIosNotifications size={25} className="cursor-pointer" />
        <img
          className="rounded-[50%] w-10 cursor-pointer"
          src={jack}
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
