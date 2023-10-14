"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCar, AiOutlineUser } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import {
    BsChevronLeft,
    BsGenderFemale,
    BsPlusCircle,
    BsTelephone,
} from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GiRelationshipBounds } from "react-icons/gi";
import { RiErrorWarningLine } from "react-icons/ri";

const Page = () => {
    const options3 = ["Yes", "No", "Maybe"];
    const options4 = ["Premium", "Economy", "Business"];

    const onOptionChangeHandler = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        console.log("User Selected Value - ", event.target.value);
    };

    // function to increment the number of pets, kids or luggages
    const [kidsCount, setKidsCount] = useState(0);
    const [luggageCount, setLuggageCount] = useState(0);
    const [petsCount, setPetsCount] = useState(0);

    const handleIncrement = (field: string) => {
        if (field === "kids") {
            setKidsCount(kidsCount + 1);
        } else if (field === "luggage") {
            setLuggageCount(luggageCount + 1);
        } else if (field === "pets") {
            setPetsCount(petsCount + 1);
        }
    };

    const handleDecrement = (field: string) => {
        if (field === "kids" && kidsCount > 0) {
            setKidsCount(kidsCount - 1);
        } else if (field === "luggage" && luggageCount > 0) {
            setLuggageCount(luggageCount - 1);
        } else if (field === "pets" && petsCount > 0) {
            setPetsCount(petsCount - 1);
        }
    };
    // ///////////////////////////////////

    return (
        <section className="w-full py-10">
            <div className="max-w-[1140px] lg:mx-auto mx-5 mt-16">
                <div className="flex justify-between pt-4  mx-auto">
                    <div className="flex flex-col gap-1">
                        <Link
                            href="/postTrip"
                            className="flex gap-1 items-center"
                        >
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
                </div>
                <section className="mx-auto pt-14 shadow-md my-10 border border-gray-200 rounded-xl">
                    <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
                        <h1 className=" text-[#000000] font-bold text-lg xl:text-2xl px-4 py-2">
                            Trip information
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:py-20 md:px-8 xl:px-20 py-5 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32 px-5">
                        <div className="w-full">
                            <div className="heading mb-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                        Current location
                                    </h2>
                                    <BsPlusCircle
                                        size={20}
                                        className="font-bold cursor-pointer"
                                    />
                                </div>
                                <span className="flex items-center gap-1 leading-3 text-gray-300">
                                    <RiErrorWarningLine />
                                    Minimum 3 pickup locations
                                </span>
                            </div>
                            <div className="flex justify-between border p-2 bg-[#CCCCCC26] w-full bg-opacity-20  border-transparent rounded-full  font-semibold  outline-none  gap-2 items-center hover:border-yellow-300">
                                <div className="flex gap-2 items-center px-5">
                                    <AiOutlineUser size={20} />
                                    <input
                                        type="text"
                                        placeholder="No 14 bosso road"
                                        className="text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none text-[#000000] font-semibold"
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
                            <div className="heading mb-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
                                        Destination
                                    </h2>
                                    <BsPlusCircle
                                        size={20}
                                        className="font-bold cursor-pointer"
                                    />
                                </div>
                                <span className="flex items-center gap-1 leading-3 text-gray-300">
                                    <RiErrorWarningLine />
                                    Minimum 3 pickup locations
                                </span>
                            </div>
                            <div className="flex justify-between border p-2 bg-[#CCCCCC26] w-full bg-opacity-20  border-transparent rounded-full  font-semibold  outline-none  gap-2 items-center hover:border-yellow-300">
                                <div className="flex gap-2 items-center px-3">
                                    <BiMap size={20} />
                                    <input
                                        type="text"
                                        placeholder="No 14 bosso road"
                                        className="text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none text-[#000000] font-semibold"
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
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Pickup packages
                            </label>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-5 outline-none flex gap-2 items-center hover:border-yellow-300">
                                <AiOutlineCar size={20} />
                                <select
                                    onChange={onOptionChangeHandler}
                                    className="bg-transparent outline-none border-none w-full"
                                >
                                    {options3.map((option, index) => {
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
                            <div className="flex flex-col items-start gap-2">
                                <label htmlFor="" className="font-semibold">
                                    Preferred ride class (Optional)
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-5 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <AiOutlineCar size={20} />
                                    <select
                                        onChange={onOptionChangeHandler}
                                        className="bg-transparent outline-none border-none h-full w-full "
                                    >
                                        {options4.map((option, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    className="h-full w-full"
                                                >
                                                    {option}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Emergency contact div */}
                    <div className="emergency-contact">
                        <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
                            <h1 className=" text-[#000000] font-bold text-lg xl:text-2xl px-4 py-2">
                                Emergency Contact
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 xl:px-20 py-5 md:py-20 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32 px-5">
                            <div className="w-full">
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <label htmlFor="" className="font-semibold">
                                        Next of kin
                                    </label>
                                    <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-5 outline-none flex gap-2 items-center hover:border-yellow-300">
                                        <MdOutlinePersonOutline size={20} />
                                        <input
                                            type="text"
                                            placeholder="Adeboye"
                                            className="bg-transparent outline-none border-none w-full"
                                        />
                                    </div>
                                    <span className="text-[10px] text-gray-300">
                                        This information won’t be shared{" "}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <label htmlFor="" className="font-semibold">
                                        Relationship
                                    </label>
                                    <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-5 outline-none flex gap-2 items-center hover:border-yellow-300">
                                        <GiRelationshipBounds size={20} />
                                        <input
                                            type="text"
                                            placeholder="Brother"
                                            className="bg-transparent outline-none border-none w-full"
                                        />
                                    </div>
                                    <span className="text-[10px] text-gray-300">
                                        This information won’t be shared{" "}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <label htmlFor="" className="font-semibold">
                                        Phone number
                                    </label>
                                    <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-5 outline-none flex gap-2 items-center hover:border-yellow-300">
                                        <BsTelephone size={20} />
                                        <input
                                            type="number"
                                            placeholder="07039018318"
                                            className="bg-transparent outline-none border-none w-full"
                                        />
                                    </div>
                                    <span className="text-[10px] text-gray-300">
                                        This information won’t be shared{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="trip_infomation">
                        <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
                            <h1 className=" text-[#000000] font-bold text-lg xl:text-2xl px-4 py-2">
                                Trip information
                            </h1>
                        </div>

                        <div className="advanceTripFeatures">
                            <div className="md:px-8 xl:px-20 py-5 md:py-10 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32 px-5">
                                <div className="heading">
                                    <h2>Advanced trip features(optional)</h2>
                                </div>

                                <div className="buttons grid grid-cols-2 md:w-[30%] gap-3 mt-3">
                                    <span className="border border-gray-300 px-5 rounded-full text-gray-300 flex gap-3 items-center justify-center">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleIncrement("kids")
                                            }
                                        >
                                            +
                                        </span>
                                        {kidsCount}kids
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleDecrement("kids")
                                            }
                                        >
                                            -
                                        </span>
                                    </span>
                                    <span className="border border-gray-300 px-5 rounded-full text-gray-300 flex gap-3 items-center justify-center">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleIncrement("luggage")
                                            }
                                        >
                                            +
                                        </span>
                                        {luggageCount}Luggages
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleDecrement("luggage")
                                            }
                                        >
                                            -
                                        </span>
                                    </span>
                                    <span className="border border-gray-300 px-5 rounded-full text-gray-300 flex gap-3 items-center justify-center">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleIncrement("pets")
                                            }
                                        >
                                            +
                                        </span>
                                        {petsCount}Pets
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleDecrement("pets")
                                            }
                                        >
                                            -
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Page;
