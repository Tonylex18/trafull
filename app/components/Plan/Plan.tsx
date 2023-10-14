"use client";
import { plans } from "@/app/constants/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Plan() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    const images = [
        "/assets/image2.png",
        "/assets/image5.png",
        "/assets/image3.png",
        "/assets/image4.png",
    ];

    return (
        <div className="w-full">
            <div className="bg-gray-100 w-full my-10">
                <div className="max-w-[1140px] mx-5 lg:m-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20">
                    {plans.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white text-center mb-5 md:mb-0 gap-5 py-9 rounded-xl flex flex-col items-center justify-center md:hover:translate-y-5 ease-in-out duration-300 hover:bg-yellow-300 text-gray-500 hover:text-black cursor-pointer"
                        >
                            <IoIosPeople className="bg-gray-100 text-black text-5xl p-2 rounded-xl" />
                            <h3 className="text-black">{item.title}</h3>
                            <p className="max-w-[85%]">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mx-auto  max-w-[1140px] m-5">
                    <Link href="/postTrip">
                        <button className="text-lg font-semibold hover:bg-gray-200 ease-in duration-150 shadow-2xl bg-gray-100 px-10 md:px-20 py-3 rounded-2xl my-5 flex items-center gap-3 mx-5 md:mx-0">
                            Post a travel plan
                            <MdOutlineKeyboardDoubleArrowRight className="text-3xl" />
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full text-center mt-20">
                <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center">
                    <div className="">
                        <h1 className="font-bold max-w-[90%] capitalize md:max-w-[70%] m-auto text-2xl md:text-5xl sm:text-4xl  text-grey-700">
                            We are Redefining Intercity travels and
                            Package Sending!
                        </h1>
                        <p className="text-slate-500 font-medium py-6 max-w-[90%] md:max-w-[60%] m-auto text-sm sm:text-xl">
                            Trafull&rsquo;s aim is to simply make travelling and
                            package-sending easier by helping travelers, drivers
                            and package-senders carry out their tasks faster,
                            cheaper and coordinately. Hopefully while travelling
                            they get to make some lifelong
                            relationships along the way.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <div className="max-w-[1140px] mx-5 lg:m-auto">
                    <div className="w-full flex flex-col flex-row-media gap-10">
                        <div className="flex-auto w-full flex-width-large h-fit p-4 bg-gray-50 rounded-lg">
                            <div className="flex flex-col md:flex-row justify-between relative">
                                <div className="grid grid-cols-2 gap-10 px-5">
                                    {images.map((src, index) => (
                                        <div
                                            className={`h-40 relative z-10 ${
                                                index === activeImageIndex
                                                    ? "active z-10"
                                                    : ""
                                            }`}
                                            key={index}
                                        >
                                            <div
                                                className="w-full h-full"
                                                onClick={() =>
                                                    handleImageClick(index)
                                                }
                                            >
                                                <Image
                                                    src={src}
                                                    alt="/"
                                                    width={750}
                                                    height={650}
                                                    className={`w-full relative h-full object-cover rounded-2xl ${
                                                        index ===
                                                        activeImageIndex
                                                            ? "z-10"
                                                            : "z-0"
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col justify-evenly gap-4 mt-10">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`bg-white px-10 py-4 rounded-xl font-medium ${
                                                index === activeImageIndex
                                                    ? "hover:bg-yellow-300 bg-yellow-300 font-bold"
                                                    : "hover:bg-yellow-300"
                                            } ease-in duration-200`}
                                            onClick={() =>
                                                handleImageClick(index)
                                            }
                                        >
                                            {index === 0
                                                ? "Car-pooling"
                                                : index === 1
                                                ? "Ride-booking"
                                                : index === 2
                                                ? "Ride-sharing"
                                                : "Package-delivery"}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto w-full flex-width">
                            <div className="flex flex-col justify-between">
                                <span className="flex flex-col text-center bg-gray-50 rounded-2xl w-full py-24">
                                    <h2 className="text-3xl md:text-5xl">25</h2>
                                    <p className="font-bold text-xl md:text-2xl">
                                        million users
                                    </p>
                                </span>

                                <Link href="/postTrip">
                                    <button className="text-lg font-semibold mt-10 hover:bg-gray-200 ease-in duration-150  bg-gray-100 px-10 md:px-20 py-3 rounded-2xl my-2 flex items-center gap-3 mx-5 md:mx-0">
                                        Post a travel plan
                                        <MdOutlineKeyboardDoubleArrowRight className="text-3xl" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan;
