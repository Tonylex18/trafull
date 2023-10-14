import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

function TravelDetails() {
    return (
        <Fragment>
            <>
                <div className="bg-white w-[90%] md:w-[550px] py-10 px-9 rounded-[36px]">
                    <div className="modalHeader flex justify-between items-center">
                        <span className="font-bold text-sm md:text-3xl">
                            Travel details
                        </span>
                        <div className="flex gap-3 items-center">
                            <p className="font-semibold text-sm md:text-lg underline cursor-pointer">
                                message
                            </p>
                            <Link href="./TripInformation">
                                <span className="bg-yellow-400 px-3 md:px-6 text-sm py-1 md:py-3 rounded-full cursor-pointer font-semibold">
                                    Book this
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="profile mt-7 flex items-center gap-5">
                        <Image
                            src="/assets/profile2.png"
                            alt=""
                            width={70}
                            height={70}
                            className="rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">
                                Ayo tolani
                            </span>
                            <span className="text-gray-400 text-sm">
                                ID: QWOE0W
                            </span>
                        </div>
                    </div>

                    <div className="content mt-5">
                        <div className="content-text">
                            <div className="flex items-center md:items-start gap-5 md:gap-0 md:flex-col">
                                <div>
                                    <h5 className="text-[16px]">Ride class</h5>
                                    <p className="text-[12px] text-gray-400">
                                        Economy
                                    </p>
                                </div>
                                <div className="mt-0 md:mt-5">
                                    <h5 className="text-[16px]">Routes</h5>
                                    <p className="text-[12px] text-gray-400">
                                        Ekiti-bida road
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h5 className="text-[16px]">Pickup-points</h5>
                                <div className="md:flex md:items-center grid grid-cols-3 gap-3 mt-3">
                                    <div className="flex flex-col  items-center border py-2 px-5 rounded-2xl cursor-pointer">
                                        <span className="font-semibold">
                                            Bosso
                                        </span>
                                        <span>7:30am</span>
                                    </div>
                                    <div className="flex flex-col items-center border py-2 px-5 rounded-2xl cursor-pointer bg-yellow-300">
                                        <span className="font-semibold">
                                            Bosso
                                        </span>
                                        <span>7:30am</span>
                                    </div>
                                    <div className="flex flex-col items-center border py-2 px-5 rounded-2xl cursor-pointer">
                                        <span className="font-semibold">
                                            Bosso
                                        </span>
                                        <span>7:30am</span>
                                    </div>
                                </div>
                                <span className="text-red-500 text-sm">
                                    Select a pick-up point.
                                </span>
                            </div>
                            <div className="mt-5">
                                <h5 className="text-[16px]">Drop off-points</h5>
                                <div className="flex items-center gap-5 mt-3">
                                    <span className="flex flex-col items-center border py-2 px-5 rounded-full font-semibold text-gray-400">
                                        Bosso
                                    </span>
                                    <span className="flex flex-col items-center border py-2 px-5 rounded-full font-semibold text-gray-400">
                                        Bosso
                                    </span>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h5 className="text-[16px]">Seats</h5>
                                <div className="md:flex md:items-center grid grid-cols-4 gap-3 mt-3 text-center">
                                    <span className="border px-6 py-2 rounded-full bg-gray-300 cursor-pointer">
                                        1
                                    </span>
                                    <span className="border px-6 py-2 rounded-full bg-yellow-300 cursor-pointer">
                                        2
                                    </span>
                                    <span className="border px-6 py-2 rounded-full bg-gray-300 cursor-pointer">
                                        3
                                    </span>
                                    <span className="border px-6 py-2 rounded-full bg-gray-300 cursor-pointer">
                                        4
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Fragment>
    );
}

export default TravelDetails;
