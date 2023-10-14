import { Fragment, useState } from "react";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeftRight, BsFan, BsUsbMini } from "react-icons/bs";
import { IoLogoNoSmoking } from "react-icons/io";
import { MdOutlineLoyalty } from "react-icons/md";
import DestinationModal from "../postTrip/DestinationModal";
import Link from "next/link";
import UserDetails from "./UserDetails";
import PackageDetails from "./PackageDetails";
import TravelDetails from "./TravelDetails";

function TripCards() {
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);

    return (
        <Fragment>
            <>
                <div className="cards my-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Trip card number 1 */}
                        <div className="flex flex-col gap-3">
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3">
                                <div className="card__header flex gap-3 items-center">
                                    <Image
                                        src="/assets/profile.png"
                                        width={50}
                                        height={60}
                                        className="rounded-full object-cover"
                                        alt=""
                                    />
                                    <div className="text">
                                        <h2 className="text-sm">Adeyanju</h2>
                                        <div className="flex items-center gap-2 font-medium text-sm">
                                            <AiFillStar className="text-yellow-300" />
                                            <p className="font-semibold">
                                                4.95/5
                                            </p>
                                            <span className="text-gray-300">
                                                (12 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card__body">
                                    <div className="border-t border-gray-200 mt-5 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                From
                                            </span>
                                            <span className="font-bold text-sm">
                                                Abuja
                                            </span>
                                        </div>
                                        <BsArrowLeftRight
                                            className="text-yellow-400"
                                            size={25}
                                        />
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                To
                                            </span>
                                            <span className="font-bold text-sm">
                                                Kaduna
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Date
                                            </span>
                                            <span className="font-bold text-sm">
                                                1st August, 2023
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Time
                                            </span>
                                            <span className="font-bold text-sm">
                                                5:30 am
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Vehicle
                                            </span>
                                            <span className="font-bold text-sm">
                                                Toyota Highlander
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Available space
                                            </span>
                                            <span className="font-bold text-sm">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end rounded-3xl">
                                        <button className="flex items-center px-5 py-3 bg-yellow-400 font-bold rounded-3xl cursor-pointer">
                                            <span>see more</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-xl border border-gray-200 rounded-3xl  px-5 py-3 flex justify-between items-center">
                                <div className="icons flex gap-3 items-center">
                                    <MdOutlineLoyalty size={25} />
                                    <IoLogoNoSmoking size={25} />
                                    <BsUsbMini size={25} />
                                    <BsFan size={25} />
                                </div>
                                <div className="text">
                                    <span className="font-bold text-2xl">
                                        #12,000
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Trip card number 2 */}
                        <div className="flex flex-col gap-3">
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3">
                                <div className="card__header flex gap-3 items-center">
                                    <Image
                                        src="/assets/profile.png"
                                        width={50}
                                        height={60}
                                        className="rounded-full object-cover"
                                        alt=""
                                    />
                                    <div className="text">
                                        <h2 className="text-sm">Adeyanju</h2>
                                        <div className="flex items-center gap-2 font-medium text-sm">
                                            <span className="text-gray-300">
                                                Searching for Passengers
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card__body">
                                    <div className="border-t border-gray-200 mt-5 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                From
                                            </span>
                                            <span className="font-bold text-sm">
                                                Abuja
                                            </span>
                                        </div>
                                        <BsArrowLeftRight
                                            className="text-yellow-400"
                                            size={25}
                                        />
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                To
                                            </span>
                                            <span className="font-bold text-sm">
                                                Kaduna
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Date
                                            </span>
                                            <span className="font-bold text-sm">
                                                1st August, 2023
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Time
                                            </span>
                                            <span className="font-bold text-sm">
                                                5:30 am
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Vehicle
                                            </span>
                                            <span className="font-bold text-sm">
                                                Toyota Highlander
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Available space
                                            </span>
                                            <span className="font-bold text-sm">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end rounded-3xl">
                                        <button
                                            onClick={() => setShowModal5(true)}
                                            className="flex items-center px-5 py-3 bg-yellow-400 font-bold rounded-3xl cursor-pointer"
                                        >
                                            <span>see more</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3 flex justify-between items-center">
                                <div className="icons flex gap-3 items-center">
                                    <MdOutlineLoyalty size={25} />
                                    <IoLogoNoSmoking size={25} />
                                    <BsUsbMini size={25} />
                                    <BsFan size={25} />
                                </div>
                                <div className="text">
                                    <span className="font-bold text-2xl">
                                        #12,000
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Trip card number 3 */}
                        <div className="flex flex-col gap-3">
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3">
                                <div className="card__header flex gap-3 items-center">
                                    <Image
                                        src="/assets/profile.png"
                                        width={50}
                                        height={60}
                                        className="rounded-full object-cover"
                                        alt=""
                                    />
                                    <div className="text">
                                        <h2 className="text-sm">Adeyanju</h2>
                                        <div className="flex items-center gap-2 font-medium text-sm">
                                            <span className="text-gray-300">
                                                Looking for a Driver
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card__body">
                                    <div className="border-t border-gray-200 mt-5 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                From
                                            </span>
                                            <span className="font-bold text-sm">
                                                Abuja
                                            </span>
                                        </div>
                                        <BsArrowLeftRight
                                            className="text-yellow-400"
                                            size={25}
                                        />
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                To
                                            </span>
                                            <span className="font-bold text-sm">
                                                Kaduna
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Date
                                            </span>
                                            <span className="font-bold text-sm">
                                                1st August, 2023
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Time
                                            </span>
                                            <span className="font-bold text-sm">
                                                5:30 am
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Vehicle
                                            </span>
                                            <span className="font-bold text-sm">
                                                Toyota Highlander
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Available space
                                            </span>
                                            <span className="font-bold text-sm">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end rounded-3xl">
                                        <button
                                            onClick={() => setShowModal6(true)}
                                            className="flex items-center px-5 py-3 bg-yellow-400 font-bold rounded-3xl cursor-pointer"
                                        >
                                            <span>see more</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3 flex justify-between items-center">
                                <div className="icons flex gap-3 items-center">
                                    <MdOutlineLoyalty size={25} />
                                    <IoLogoNoSmoking size={25} />
                                    <BsUsbMini size={25} />
                                    <BsFan size={25} />
                                </div>
                                <div className="text">
                                    <span className="font-bold text-2xl">
                                    Premium
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Trip card number 4 for sending packages */}
                        <div className="flex flex-col gap-3">
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3">
                                <div className="card__header flex gap-3 items-center">
                                    <Image
                                        src="/assets/profile.png"
                                        width={50}
                                        height={60}
                                        className="rounded-full object-cover"
                                        alt=""
                                    />
                                    <div className="text">
                                        <h2 className="text-sm">Adeyanju</h2>
                                        <div className="flex items-center gap-2 font-medium text-sm">
                                            <span className="text-gray-300">
                                                Sending Packages
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card__body">
                                    <div className="border-t border-gray-200 mt-5 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                From
                                            </span>
                                            <span className="font-bold text-sm">
                                                Abuja
                                            </span>
                                        </div>
                                        <BsArrowLeftRight
                                            className="text-yellow-400"
                                            size={25}
                                        />
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                To
                                            </span>
                                            <span className="font-bold text-sm">
                                                Kaduna
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                                Date
                                            </span>
                                            <span className="font-bold text-sm">
                                                1-3rd August, 2023
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                                Time
                                            </span>
                                            <span className="font-bold text-sm">
                                                5:30 am
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 flex items-center justify-between py-2">
                                        <div className="flex flex-col">
                                            <span className="font-light text-sm">
                                               Package
                                            </span>
                                            <span className="font-bold text-sm">
                                                Electronics
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-light text-sm">
                                               Number of items
                                            </span>
                                            <span className="font-bold text-sm">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end rounded-3xl">
                                        <button
                                            onClick={() => setShowModal7(true)}
                                            className="flex items-center px-5 py-3 bg-yellow-400 font-bold rounded-3xl cursor-pointer"
                                        >
                                            <span>see more</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-xl border border-gray-200 rounded-3xl px-5 py-3 flex justify-between items-center">
                                <div className="icons flex gap-3 items-center">
                                    <h2>Budget</h2>
                                </div>
                                <div className="text">
                                    <span className="font-bold text-2xl">
                                        #12,000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for Searching for passengers*/}
                <DestinationModal
                    isVisible={showModal5}
                    onClose={() => setShowModal5(false)}
                >
                    <TravelDetails />
                </DestinationModal>

                {/* Modal for looking for Driver*/}
                <DestinationModal
                    isVisible={showModal6}
                    onClose={() => setShowModal6(false)}
                >
                    <UserDetails />
                </DestinationModal>

                {/* Modal for  */}
                <DestinationModal
                    isVisible={showModal7}
                    onClose={() => setShowModal7(false)}
                >
                    <PackageDetails />
                </DestinationModal>
            </>
        </Fragment>
    );
}

export default TripCards;
