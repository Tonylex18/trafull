"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [select, setSelect] = useState<string>();
  const [value, setValue] = useState<any>(null);
  const options = ["Toyota", "Honda", "lexus", "Golf"];
  const options2 = ["1", "2", "3", "4", "5", "6"];
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };
  const onOptionChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("User Selected Value - ", event.target.value);
  };

  return (
    <div className="w-full my-10">
      <section className="flex justify-between pt-4 w-11/12 mx-auto">
        <div className="flex flex-col gap-1">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/image/leftArrowHead.png"
              className="w-2 h-2 opacity-50"
              width="50"
              height="50"
              alt="truck"
            />
            <h2 className="font-bold text-sm lg:text-lg opacity-50">Back</h2>
          </Link>
          <h1 className="font-bold text-sm lg:text-3xl">Post a package</h1>
        </div>
        <Link href="/travellerUploadImg">
          <button className="bg-[#FFD700] rounded-3xl bg-opacity-50 px-8 py-2">
            <span className="font-bold text-2xl flex justify-center text-[#000000]"></span>
            Next
          </button>
        </Link>
      </section>
      <section className="w-11/12 lg:w-4/5 mx-auto pt-14 shadow-md my-10 border rounded-xl">
        <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
          <h1 className=" text-[#000000] font-bold text-sm md:text-lg xl:text-2xl px-4 py-2">
            Trip information
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:py-20 md:px-8 xl:px-20 py-5 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              Current location
            </h2>
            <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <div className="flex gap-2 items-center">
                <Image
                  src="/image/location.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="location"
                />
                <input
                  type="text"
                  placeholder="No 14 bosso road"
                  className="font-normal text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none text-[#000000] opacity-50"
                />
              </div>
              <button className="bg-[#FFD700] rounded-3xl font-normal text-sm px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 ">
                <span className="opacity-50 font-normal text-xs">ETA</span>2min
              </button>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              Destination
            </h2>
            <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <div className="flex gap-2 items-center">
                <Image
                  src="/image/destination.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="destination"
                />
                <input
                  type="text"
                  placeholder="No 14 bosso road"
                  className="font-normal text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none text-[#000000] opacity-50"
                />
              </div>
              <button className="bg-[#FFD700] rounded-3xl font-normal text-sm px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 ">
                <span className="opacity-50 font-normal text-xs">ETA</span>2min
              </button>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              From
            </h2>
            <div className="flex gap-2 mb-4">
              <Image
                src="/image/warning.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="notice"
              />
              <p className="font-semibold text-xs opacity-50">
                Kindly specify the delivery time range
              </p>
            </div>
            <div className="flex justify-between p-3.5 md:p-4 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <input
                type="date"
                className="w-full h-full border-none outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              To
            </h2>
            <div className="flex gap-2 mb-4">
              <Image
                src="/image/warning.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="notice"
              />
              <p className="font-semibold text-xs opacity-50">
                Kindly specify the delivery time range
              </p>
            </div>
            <div className="flex justify-between p-3.5 md:p-4 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <input
                type="date"
                className="w-full h-full border-none outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
          <h1 className=" text-[#000000] font-bold text-sm md:text-lg xl:text-2xl px-4 py-2">
            Package information
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 xl:px-20 py-5 md:py-20 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              Category
            </h2>
            <div className="flex  p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              {/* <button className="bg-[#FFD700] rounded-3xl w-2/5  px-5 py-2 flex justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder={select}
                  className="font-normal text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none text-[#000000] opacity-50"
                />
                <span className="opacity-50 text-sm font-normal">
                  Electronics
                </span>
                <Image
                  src="/image/iconoir_cancel.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="cancel"
                />
              </button> */}
              {/* <button className="bg-[#FFD700] rounded-3xl w-2/5  px-5 py-2 flex justify-between items-center gap-4">
                <span className="opacity-50 text-sm font-normal">
                  Electronics
                </span>
                <Image
                  src="/image/iconoir_cancel.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="cancel"
                />
              </button> */}

              <select
                onChange={onOptionChangeHandler}
                className="bg-transparent outline-none border-none w-full font-semibold"
              >
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              Number of packages
            </h2>
            <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <div className="flex justify-center gap-2 items-center">
                <Image
                  src="/image/la_truck-pickup.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="cancel"
                />
                {/* <input
                  type="number"
                  placeholder="2"
                  className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
                /> */}
              </div>
              {/* <Image
                src="/image/icon-park_down.png"
                className="w-4 h-4 flex self-center"
                width="50"
                height="50"
                alt="location"
                onClick={toggledropDown}
              /> */}
              <select
                onChange={onOptionChangeHandler}
                className="bg-transparent outline-none border-none w-full font-semibold"
              >
                {options2.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              Package size
            </h2>
            <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <div className="flex gap-4 items-center">
                <Image
                  src="/image/la_truck-pickup.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="truck"
                />
                <input
                  type="text"
                  placeholder="Electronics"
                  className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
              Price
            </h2>
            <div className="flex items-center gap-1 p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <Image
                src="/image/naira.png"
                className="w-3 h-3"
                width="50"
                height="50"
                alt="naira"
              />
              <input
                type="number"
                placeholder="120000"
                className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
