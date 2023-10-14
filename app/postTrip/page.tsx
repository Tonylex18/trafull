"use client";
import { Fragment, useState } from "react";
import React from "react";
import { BsArrowDownRight, BsCalendarEvent } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import TripCards from "../cards/TripCards";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineCar, AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import DestinationModal from "./DestinationModal";
import Calendar from "../components/calender/Calender";
import Link from "next/link";
import PostTrip from "./PostTrip";

function Page() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    return (
        <Fragment>
            <>
                <div className="w-full h-96 relative hidden md:flex md:bg-yellow-300">
                        <div className="flex-auto md:w-1/2 lg:w-2/5 md:flex md:items-center justify-center  ">
                            <div className="relative -left-20 left-margin">
                                <span className="text-2xl font-bold flex justify-items-end items-end">
                                    Where do you <br /> want to go?
                                    <div className="bg-yellow-200 p-1 shadow-md rounded">
                                        <BsArrowDownRight className="mr-3 font-bold text-black" />
                                    </div>
                                </span>
                            </div>
                        </div>
                        <Image
                            src="/assets/image6.png"
                            alt="/"
                            width={650}
                            height={400}
                            className="w-full h-full object-cover flex-auto md:w-1/2"
                        />
                </div>
                <div className="w-full h-96 relative md:hidden">
                    <div className="top-[50%] left-[50%] transforms text-white z-10 absolute">
                        <span className="text-2xl font-bold flex justify-items-end items-end">
                            Where do you want to go?
                            <div className="bg-yellow-200 p-1 shadow-md rounded">
                                <BsArrowDownRight className="mr-3 font-bold text-black" />
                            </div>
                        </span>
                    </div>
                    <Image
                        src="/assets/image6.png"
                        alt="/"
                        width={650}
                        height={400}
                        className="w-full h-full object-cover absolute"
                    />
                </div>

                <div className="trip__posting w-full mt-8">
                    <div className="max-w-[1140px] mx-5 lg:m-auto">
                        <div className="heading flex items-center gap-3 text-2xl font-bold ">
                            <MdLocationOn className="text-gray-400" />
                            <select className="outline-none text-gray-400 gap-3 cursor-pointer">
                                <option value="minna">Minna</option>
                                <option value="abuja">Abuja</option>
                                <option value="lagos">Lagos</option>
                            </select>
                        </div>

                        <div className="title mt-5">
                            <h2 className="font-bold text-4xl">
                                Trip listings
                            </h2>
                        </div>

                        <div className="buttons my-5 flex flex-col md:flex-row items-center gap-9">
                            <button
                                onClick={() => setShowModal(true)}
                                className="flex items-center gap-1 border-2 font-semibold border-gray-400 text-gray-400 hover:text-gray-950 duration-200 transition-all hover:border-black py-2 px-7 rounded-3xl"
                            >
                                <FaLocationArrow />
                                Destination
                            </button>
                            <button
                                onClick={() => setShowModal2(true)}
                                className="flex items-center gap-1 border-2 font-semibold border-gray-400 text-gray-400 hover:text-gray-950 duration-200 transition-all hover:border-black py-2 px-7 rounded-3xl"
                            >
                                <BsCalendarEvent />
                                Travel date
                            </button>
                            <button
                                onClick={() => setShowModal3(true)}
                                className="flex items-center gap-1 border-2 font-semibold border-gray-400 text-gray-400 hover:text-gray-950 duration-200 transition-all hover:border-black py-2 px-7 rounded-3xl"
                            >
                                <AiOutlineCar />
                                Find
                            </button>
                        </div>

                        <TripCards />

                        <div className="button flex items-center justify-center mb-8">
                            <button
                                onClick={() => setShowModal4(true)}
                                className="bg-yellow-300 hover:bg-yellow-200 duration-200 transition-all px-12 font-bold py-3 rounded-3xl"
                            >
                                Post a trip
                            </button>
                        </div>
                    </div>
                </div>

                <DestinationModal
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                >
                    <div className="bg-white w-[400px] py-10 md:w-[600px] rounded-3xl flex flex-col justify-center items-center">
                        <span className="bg-white border border-gray-100 shadow-xl font-bold rounded-full py-5 px-10">
                            Destination
                        </span>
                        <div className="bg-gray-100 my-14 pr-2 flex justify-between items-center rounded-3xl">
                            <AiOutlineSearch
                                className="bg-yellow-300 rounded-full p-2 m-2"
                                size={40}
                            />
                            <input
                                type="text"
                                placeholder="Send a message"
                                className="bg-transparent outline-none border-none h-8"
                            />
                        </div>

                        <div className="select-state text-center">
                            <p className="text-2xl font-bold mb-3 text-gray-200 cursor-pointer">
                                Abia
                            </p>
                            <p className="text-2xl font-bold mb-3 text-gray-300 cursor-pointer">
                                Adamawa
                            </p>
                            <Link href="/TripInformation">
                                <p className="text-3xl font-bold mb-3 cursor-pointer">
                                    Akwa-ibom
                                </p>
                            </Link>
                            <p className="text-2xl font-bold mb-3 text-gray-300 cursor-pointer">
                                Bauchi
                            </p>
                            <p className="text-2xl font-bold mb-3 text-gray-200 cursor-pointer">
                                Borno
                            </p>
                        </div>
                    </div>
                </DestinationModal>

                <DestinationModal
                    isVisible={showModal4}
                    onClose={() => setShowModal4(false)}
                >
                    <PostTrip />
                </DestinationModal>

                <DestinationModal
                    isVisible={showModal2}
                    onClose={() => setShowModal2(false)}
                >
                    <div className="bg-white w-[80%] md:w-[500px] py-10 rounded-3xl flex flex-col justify-center items-center">
                        <Calendar />
                    </div>
                </DestinationModal>

                <DestinationModal
                    isVisible={showModal3}
                    onClose={() => setShowModal3(false)}
                >
                    <div className="bg-white w-[300px] py-10 rounded-3xl flex flex-col justify-center items-center">
                        <span className="bg-white border border-gray-100 shadow-xl font-bold rounded-full py-2 px-10">
                            Find
                        </span>

                        <div className="select-state text-center my-10">
                            <Link href="/postPackage">
                                <p className="text-2xl font-bold mb-3 text-gray-200 hover:text-black duration-200">
                                    Pakages
                                </p>
                            </Link>
                            <Link href="/postdriver">
                                <p className="text-2xl font-bold mb-3 text-gray-200 hover:text-black duration-200">
                                    Drivers
                                </p>
                            </Link>
                            <Link href="/postTraveller">
                                <p className="text-3xl font-bold hover:text-black text-gray-200 mb-3 duration-200">
                                    Travellers
                                </p>
                            </Link>
                        </div>
                    </div>
                </DestinationModal>
            </>
        </Fragment>
    );
}

export default Page;
