import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";
import jack from "../assets/jack.png";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  hideNav,
  increment,
  incrementByAmount,
} from "../redux/Counter/counterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const hide = useSelector((state) => state.counter.value);
  const handlInc = () => {
    dispatch(increment());
  };

  let sideBarFirst = [
    { icon: <GoHomeFill size={25} />, title: "Home" },
    { icon: <SiYoutubeshorts size={25} />, title: "Shorts" },
    { icon: <MdSubscriptions size={25} />, title: "Subscription" },
  ];

  let sideBarChannel = [
    {
      imageSubs: (
        <img className="rounded-[50%] w-7" src={jack} alt="Pewdipie" />
      ),
      title: "Pewdipie",
    },
    {
      imageSubs: (
        <img className="rounded-[50%] w-7" src={jack} alt="TotalGaming" />
      ),
      title: "TotalGaming",
    },
    {
      imageSubs: (
        <img className="rounded-[50%] w-7" src={jack} alt="Mr Beast" />
      ),
      title: "Mr Beast",
    },
    {
      imageSubs: (
        <img className="rounded-[50%] w-7" src={jack} alt="Pewdipie" />
      ),
      title: "Pewdipie",
    },
    {
      imageSubs: (
        <img className="rounded-[50%] w-7" src={jack} alt="TotalGaming" />
      ),
      title: "TotalGaming",
    },
    {
      imageSubs: (
        <img className="rounded-[50%] w-7" src={jack} alt="Mr Beast" />
      ),
      title: "Mr Beast",
    },
  ];

  return (
    <>
      <div
        className={`${
          hide ? "w-[7rem]" : "w-[13rem] overflow-y-scroll"
        } mt-[2.5rem]  h-screen px-[2%] fixed`}
      >
        {/* 1st */}
        <div className=" space-y-3 border-b-[1px] py-4 border-gray-300">
          {sideBarFirst.map((items, index) => (
            <div
              key={index}
              className={`${
                hide
                  ? "flex-col space-y-3 font-semibold text-xs items-center justify-center"
                  : "space-x-5"
              } flex cursor-pointer`}
            >
              {items.icon}
              <p onClick={handlInc} className="cursor-pointer">
                {items.title}
              </p>
            </div>
          ))}
        </div>
        {/* 2nd */}
        <div className={`${hide ? "hidden" : ""}`}>
          <div className="space-y-3 border-b-[1px] py-4 border-gray-300">
            <div className="flex space-x-4 items-center">
              <h1 className="font-semibold">You</h1>
              <PiGreaterThan size={15} className="cursor-pointer" />
            </div>
            {sideBarFirst.map((items, index) => (
              <div key={index} className="flex space-x-5 cursor-pointer">
                {items.icon}
                <p className="cursor-pointer">{items.title}</p>
              </div>
            ))}
            {sideBarFirst.map((items, index) => (
              <div key={index} className="flex space-x-5">
                {items.icon}
                <p className="cursor-pointer">{items.title}</p>
              </div>
            ))}
          </div>
          {/* 3rd */}
          <div className="space-y-3 border-b-[1px] py-4 border-gray-300">
            <div className="flex space-x-4 items-center">
              <h1 className="text-center font-semibold">Subscriptions</h1>
            </div>
            {sideBarChannel.map((items, index) => (
              <div key={index} className="flex space-x-5 cursor-pointer">
                {items.imageSubs}
                <p className="cursor-pointer">{items.title}</p>
              </div>
            ))}
          </div>
          {/* 4th */}
          <div className="space-y-3 border-b-[1px] py-4 border-gray-300">
            {sideBarFirst.map((items, index) => (
              <div key={index} className="flex space-x-5 cursor-pointer">
                {items.icon}
                <p className="cursor-pointer">{items.title}</p>
              </div>
            ))}
          </div>
          {/* 5th */}
          <div className="font-normal text-sm space-y-3 p-[0.5] mb-[4rem] mt-[1rem] tracking-wide">
            <p className="leading-5">
              About Press Copyright Contact usCreators Advertise Developers
            </p>
            <p className="leading-5">
              Terms PrivacyPolicy & SafetyHow YouTube worksTest new features
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
