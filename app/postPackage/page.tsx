"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineCar, AiOutlineUser } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";

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
        <div className="w-full py-10">
            <div className="max-w-[1140px] lg:mx-auto mx-5 mt-16">
                <section className="flex justify-between pt-4 mx-auto">
                    <div className="flex flex-col gap-1">
                        <Link href="/postTrip" className="flex gap-1 items-center">
                            <BsChevronLeft />
                            <h2 className="font-bold text-sm lg:text-lg opacity-50">
                                Back
                            </h2>
                        </Link>
                        <h1 className="font-bold text-sm lg:text-3xl">
                            Post a package
                        </h1>
                    </div>
                    <Link href="/travellerUploadImg">
                        <button className="bg-[#FFD700] rounded-3xl bg-opacity-50 px-8 py-2">
                            <span className="font-bold text-2xl flex justify-center text-[#000000]"></span>
                            Next
                        </button>
                    </Link>
                </section>
                <section className="mx-auto pt-14 shadow-md my-10 border border-gray-300 rounded-xl">
                    <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
                        <h1 className=" text-[#000000] font-bold text-sm md:text-lg xl:text-2xl px-4 py-2">
                            Trip information
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:py-20 md:px-8 xl:px-20 mx-3 py-5 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                Current location
                            </h2>
                            <div className="bg-gray-100 border border-transparent rounded-full p-2 pl-5 w-full font-semibold outline-none flex gap-2 items-center justify-between hover:border-yellow-300">
                                <div className="flex gap-2 items-center">
                                    <AiOutlineUser size={20} />
                                    <input
                                        type="text"
                                        placeholder="No 14 bosso road"
                                        className="font-semibold text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none"
                                    />
                                </div>
                                <button className="bg-[#FFD700] rounded-3xl font-normal text-sm px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 ">
                                    <span className="opacity-50 font-normal text-xs">
                                        ETA
                                    </span>
                                    2min
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                Destination
                            </h2>
                            <div className="bg-gray-100 border border-transparent rounded-full p-2 pl-5 w-full font-semibold outline-none flex gap-2 items-center justify-between hover:border-yellow-300">
                                <div className="flex gap-2 items-center">
                                    <BiMap size={20} />
                                    <input
                                        type="text"
                                        placeholder="No 14 bosso road"
                                        className="font-semibold text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none"
                                    />
                                </div>
                                <button className="bg-[#FFD700] rounded-3xl font-normal text-sm px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 ">
                                    <span className="opacity-50 font-normal text-xs">
                                        ETA
                                    </span>
                                    2min
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                From
                            </h2>
                            <div className="flex gap-2 mb-4 text-gray-400">
                                <RiErrorWarningLine />
                                <p className="font-semibold text-xs">
                                    Kindly specify the delivery time range
                                </p>
                            </div>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                <input
                                    type="date"
                                    className="h-full border-none outline-none bg-transparent"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                To
                            </h2>
                            <div className="flex gap-2 mb-4 text-gray-400">
                                <RiErrorWarningLine />
                                <p className="font-semibold text-xs">
                                    Kindly specify the delivery time range
                                </p>
                            </div>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                <input
                                    type="date"
                                    className="h-full border-none outline-none bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
                        <h1 className=" text-[#000000] font-bold text-sm md:text-lg xl:text-2xl px-4 py-2">
                            Package information
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 xl:px-20 mx-3 py-5 md:py-20 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                Category
                            </h2>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                <select
                                    onChange={onOptionChangeHandler}
                                    className="bg-transparent outline-none border-none w-full font-semibold"
                                >
                                    {options.map((option, index) => {
                                        return (
                                            <option key={index}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                Number of packages
                            </h2>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                <div className="flex justify-center gap-2 items-center w-full">
                                    <AiOutlineCar size={20} />
                                    <select
                                        onChange={onOptionChangeHandler}
                                        className="bg-transparent outline-none border-none w-full font-semibold"
                                    >
                                        {options2.map((option, index) => {
                                            return (
                                                <option key={index}>
                                                    {option}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                Package size
                            </h2>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                <div className="flex gap-4 items-center w-full">
                                <AiOutlineCar size={20} />
                                    <input
                                        type="text"
                                        placeholder="Electronics"
                                        className="bg-transparent w-full outline-none border-none text-lg font-semibold"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                Price
                            </h2>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                               <TbCurrencyNaira size={20} />
                                <input
                                    type="number"
                                    placeholder="120000"
                                    className="bg-transparent w-full outline-none border-none text-lg font-semibold"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
