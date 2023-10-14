"use client";
import { TbAirConditioning } from "react-icons/tb";
import React, { useState } from "react";
import {
    ArrowBackIcon,
    UserLineIcon,
    InfoCircleIcon,
    LocationOnIcon,
    CurrencyIcon,
    SeatIcon,
    BusIcon,
    RouteIcon,
    CarIcon,
    PlusCircle,
} from "./Icon";
import Dropdown from "./SelectOption/SelectOption";

import Information from "./postDriverProps";
import { BsFillKeyboardFill } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { IoLogoNoSmoking } from "react-icons/io";
import Link from "next/link";
import DestinationModal from "../postTrip/DestinationModal";
import Rules from "./Rules";

function Page() {
    const seatOption = [" 1", "2", "3"];
    const packageOption = [" Yes", "No"];
    const carTypeOption = [
        " Accura",
        "Accord",
        "Alpha romeo",
        "Alberth",
        "Altima",
    ];
    const rideClassOption = [" Economy", "Premium", "Bussiness"];

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="w-full h-full p-4 pt-24 md:p-28 ">
            <div className="flex items-center justify-between ">
                <div className="flex flex-col items-start gap-2 ">
                    <Link href="/postTrip">
                        <div className="flex items-center gap-1">
                            <ArrowBackIcon />
                            <p className="font-bold text-gray-400 ">Back</p>
                        </div>
                    </Link>
                    <div className=" font-bold text-[28px]">Post a trip</div>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="p-2 px-8 mb-16 font-bold rounded-3xl bg-lightYellow hover:opacity-40"
                >
                    Next
                </button>
            </div>

            <div className="w-full h-full pt-8 bg-white rounded-2xl py drop-shadow-md shadow-black">
                <p className=" bg-gray-200 w-full p-2 px-8 font-bold mb-16 text-[24px]">
                    Trip information
                </p>

                <div className="grid justify-between grid-cols-1 gap-10 px-12 lg:grid-cols-2 item-start">
                    {/* 1 */}
                    <Information
                        classname="flex items-center justify-between p-2 "
                        inputIcon={<UserLineIcon />}
                        addcircle={<PlusCircle />}
                        subtitleicon={<InfoCircleIcon />}
                        inputClassName=" gap-3"
                        title="Pickup location"
                        subtitle="Minimum 3 pickup locations"
                        endElement={
                            <div className="flex items-center text-[8px] bg-lightYellow rounded-3xl p-3 px-5 gap-[3px]">
                                <p>ETA</p>
                                <p className="font-bold">2min</p>
                            </div>
                        }
                        input={
                            <input
                                type="text"
                                placeholder="No 14 bosso road"
                                className="w-full bg-transparent outline-none"
                            />
                        }
                    />
                    {/* 2 */}
                    <Information
                        classname="flex items-center justify-between p-2 "
                        inputIcon={<LocationOnIcon />}
                        inputClassName=" gap-3"
                        addcircle={<PlusCircle />}
                        subtitleicon={<InfoCircleIcon />}
                        title="Drop off location"
                        subtitle="Minimum 3 pickup locations"
                        endElement={
                            <div className="flex items-center text-[8px] bg-lightYellow rounded-3xl p-3 px-5 gap-[3px]">
                                <p>ETA</p>
                                <p className="font-bold">2min</p>
                            </div>
                        }
                        input={
                            <input
                                type="text"
                                placeholder="No 14 bosso road"
                                className="w-full bg-transparent outline-none"
                            />
                        }
                    />
                    {/* 3 */}
                    <Information
                        inputIcon={<CurrencyIcon />}
                        classname="p-3 py-4"
                        inputClassName=" gap-3"
                        subtitleicon={<InfoCircleIcon />}
                        title="Price per seat"
                        subtitle="Price total: N22,000 "
                        input={
                            <input
                                type="text"
                                placeholder="20,000"
                                className="w-full bg-transparent outline-none"
                            />
                        }
                    />
                    {/* 4 */}
                    <Information
                        classname="py-3 "
                        subtitleicon={<InfoCircleIcon />}
                        title="Available seats"
                        subtitle="Minimum 2 pickup locations"
                        endElement={
                            <Dropdown
                                iconInput={<SeatIcon />}
                                options={seatOption}
                            />
                        }
                    />
                    {/* 5 */}
                    <Information
                        classname="py-3 "
                        title="Car type"
                        endElement={
                            <Dropdown
                                iconInput={<BusIcon />}
                                options={carTypeOption}
                            />
                        }
                    />
                    {/* 6 */}
                    <Information
                        classname="py-3 "
                        title="Ride class"
                        endElement={
                            <Dropdown
                                iconInput={<BusIcon />}
                                options={rideClassOption}
                            />
                        }
                    />
                    {/* 7 */}
                    <Information
                        classname="p-3 "
                        inputIcon={<RouteIcon />}
                        inputClassName=" gap-3"
                        title="Route"
                        input={
                            <input
                                type="text"
                                placeholder="Kogi-Ekiti -kwara"
                                className="w-full bg-transparent outline-none"
                            />
                        }
                    />
                    {/* 8 */}
                    <Information
                        classname="py-3 "
                        title="Pickup packages"
                        inputClassName=" gap-3"
                        endElement={
                            <Dropdown
                                iconInput={<CarIcon />}
                                options={packageOption}
                            />
                        }
                    />
                    {/* 9 */}
                    <Information
                        classname="p-3 "
                        title="Date "
                        inputClassName=" gap-3"
                        input={
                            <input
                                type="date"
                                className="w-full bg-transparent outline-none"
                            />
                        }
                    />
                    {/* 10 */}
                    <Information
                        classname="justify-start p-3 "
                        title="Time"
                        inputClassName=" gap-3"
                        input={
                            <input
                                type="time"
                                className="w-full bg-transparent outline-none"
                            />
                        }
                    />
                </div>
                <div className="mb-10 ">
                    <p className="w-full text-[28px] p-2 px-8 mt-20 font-bold bg-gray-100 ">
                        Advanced features
                    </p>

                    <div className="flex flex-col items-start justify-center m-2 mt-12 md:m-5 md:ml-16 ">
                        <span className="text-xl font-bold ">
                            Trip features(optional)
                        </span>
                        <div className="flex flex-wrap items-center gap-6 pb-8 mx-auto mt-5 text-center md:mx-0 md:grid md:grid-cols-3 ">
                            <div className="flex items-center justify-center gap-2 p-px px-2 font-normal border hover:font-bold shrink-0 rounded-2xl hover:bg-lightYellow">
                                <span>
                                    <TbAirConditioning />
                                </span>{" "}
                                <p>Air conditioner</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-px px-2 font-normal border hover:font-bold rounded-2xl hover:bg-lightYellow">
                                <span>
                                    <BsFillKeyboardFill />
                                </span>{" "}
                                <p> Charging port</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-px px-2 font-normal border rounded-2xl hover:font-bold hover:bg-lightYellow">
                                <span>
                                    <BsFillKeyboardFill />
                                </span>{" "}
                                <p>Movies</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-px px-2 font-normal border rounded-2xl hover:font-bold hover:bg-lightYellow">
                                <span>
                                    <MdOutlinePets />
                                </span>{" "}
                                <p>Pets allowed</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-px px-2 font-normal border rounded-2xl hover:font-bold hover:bg-lightYellow">
                                <span>
                                    <IoLogoNoSmoking />
                                </span>{" "}
                                <p>Snacks</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-px px-2 font-normal border rounded-2xl hover:font-bold hover:bg-lightYellow">
                                <span>
                                    <BsFillKeyboardFill />
                                </span>{" "}
                                <p>Music</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DestinationModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
            >
                <Rules />
            </DestinationModal>
        </div>
    );
}

export default Page;
