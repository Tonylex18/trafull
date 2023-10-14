"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
    BsChevronCompactDown,
    BsChevronLeft,
    BsDisplayport,
} from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import Map from "../components/Map/Map";
import GoogleMapEmbed from "../components/Map/Map";

function page() {
    return (
        <div>
            <div className="w-full py-10">
                <div className="max-w-[1140px] lg:mx-auto mx-5 my-20">
                    <Link href="/">
                        <div className="flex gap-1 items-center text-sm text-gray-600 font-semibold cursor-pointer">
                            <BsChevronLeft />
                            <span>Back</span>
                        </div>
                    </Link>

                    {/* Location */}
                    <div className="flex gap-4 items-center mt-4">
                        <p className="font-bold text-xl">Abuja</p>
                        <p className="font-light text-sm">To</p>
                        <p className="font-bold text-xl">Kaduna</p>
                    </div>

                    {/* Map section */}
                    <div className="map h-[200px] md:h-[378px] w-full shadow rounded-2xl mt-5">
                        <GoogleMapEmbed width="100%" height="100%" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mt-10">
                        <div className="flex-auto w-full lg:w-[60%] p-5">
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/assets/profile2.png"
                                    width={50}
                                    height={50}
                                    alt="/"
                                    className="rounded-full object-contain"
                                />
                                <div>
                                    <h4 className="text-sm md:text-xl">
                                        Adeyanju
                                    </h4>
                                    <div className="flex items-center">
                                        <AiFillStar
                                            size={20}
                                            className="text-yellow-400"
                                        />
                                        <AiFillStar
                                            size={20}
                                            className="text-yellow-400"
                                        />
                                        <AiFillStar
                                            size={20}
                                            className="text-yellow-400"
                                        />
                                        <AiFillStar
                                            size={20}
                                            className="text-yellow-400"
                                        />
                                        <AiFillStar
                                            size={20}
                                            className="text-yellow-400"
                                        />
                                        <span className="ml-2 text-[12px]">
                                            4.95/5
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h6 className="text-sm md:text-xl">Services</h6>
                                <div className="mt-5 flex flex-col md:flex-row items-center gap-4">
                                    <button className="flex gap-3 items-center bg-transparent hover:bg-yellow-400 px-5 border-gray-500 border hover:border-none duration-200 rounded-full py-1">
                                        <TbAirConditioning size={20} />
                                        <span className="text-sm">
                                            Air conditioning
                                        </span>
                                    </button>
                                    <button className="flex gap-3 items-center bg-transparent border-gray-500 border hover:bg-yellow-400 duration-200 hover:border-none px-5 rounded-full py-1">
                                        <BsDisplayport size={20} />
                                        <span className="text-sm">
                                            Charging port
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-5 flex items-start justify-between w-full lg:w-[90%]">
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-sm md:text-xl">
                                        Pickup-points
                                    </h5>
                                    <div className="gap-3 flex flex-col text-gray-400">
                                        <p className="text-[10px] md:text-lg">
                                            Bosso - 7:30am
                                        </p>
                                        <p className="text-[10px] md:text-lg">
                                            Kpakungu - 8:30am
                                        </p>
                                        <p className="text-[10px] md:text-lg">
                                            Maikunkele - 8:30am
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-sm md:text-xl">
                                        ------
                                    </h5>
                                </div>
                                <div className="ml-4 flex gap-3 flex-col">
                                    <h5 className="text-sm md:text-xl">
                                        Drop off-points
                                    </h5>
                                    <div className="gap-3 flex flex-col text-gray-400">
                                        <p className="text-[10px] md:text-lg">
                                            Bosso - 7:30am
                                        </p>
                                        <p className="text-[10px] md:text-lg">
                                            Kpakungu - 8:30am
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Reviews */}
                            <div className="mt-5">
                                <h5 className="flex items-center gap-2 text-sm md:text-xl">
                                    Reviews <BsChevronCompactDown />{" "}
                                </h5>

                                <div className="comment grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="user flex items-start gap-2 border border-gray-400 rounded-3xl p-3">
                                        <Image
                                            src="/assets/profile2.png"
                                            width={30}
                                            height={30}
                                            alt="/"
                                            className="rounded-full object-contain"
                                        />
                                        <div className="leading-none">
                                            <p className="text-[10px] text-gray-500 leading-none">
                                                Adeyanju
                                            </p>
                                            <h6 className="text-[8px] leading-normal">
                                                Jan 2018
                                            </h6>
                                            <div className="flex items-center">
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                            </div>

                                            <div>
                                                <p className="text-[10px] md:text-lg text-gray-500 mt-2">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur. Mattis purus
                                                    odio lectus sit ac. Bibendum
                                                    morbi id euismod eleifend
                                                    quis. Porttitor sit velit
                                                    lacus pellentesque volutpat.
                                                    Urna ac at amet dui.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user flex items-start gap-2 border border-gray-400 rounded-3xl p-3">
                                        <Image
                                            src="/assets/profile2.png"
                                            width={30}
                                            height={30}
                                            alt="/"
                                            className="rounded-full object-contain"
                                        />
                                        <div className="leading-none">
                                            <p className="text-[10px] text-gray-500 leading-none">
                                                Adeyanju
                                            </p>
                                            <h6 className="text-[8px] leading-normal">
                                                Jan 2018
                                            </h6>
                                            <div className="flex items-center">
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                                <AiFillStar
                                                    size={10}
                                                    className="text-yellow-400"
                                                />
                                            </div>

                                            <div>
                                                <p className="text-[10px] md:text-lg text-gray-500 mt-2">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur. Mattis purus
                                                    odio lectus sit ac. Bibendum
                                                    morbi id euismod eleifend
                                                    quis. Porttitor sit velit
                                                    lacus pellentesque volutpat.
                                                    Urna ac at amet dui.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto w-full md:w-[40%] bg-white shadow-lg border-gray-50 rounded-2xl p-5 gap-5 flex flex-col px-10">
                            <p className="font-medium text-xl">
                                Available space 1
                            </p>
                            <h5 className="text-xl">#12,0000</h5>
                            <div>
                                <h6 className="text-sm">Ride class</h6>
                                <p className="text-gray-500 text-[10px]">
                                    Economic
                                </p>
                            </div>
                            <div>
                                <h6 className="textsmg">Route</h6>
                                <p className="text-gray-500 text-[10px]">
                                    Ekiti-bida road
                                </p>
                            </div>
                            <Link href="/TravellerPayment">
                                <div>
                                    <button className="bg-yellow-400 hover:bg-yellow-200 rounded-full w-[50%] px-2 md:px-4 py-2 font-bold duration-300 text-sm">
                                        Make payment
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
