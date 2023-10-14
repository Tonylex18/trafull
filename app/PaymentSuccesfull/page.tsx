"use client";
import React, { Fragment, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import DestinationModal from "../postTrip/DestinationModal";
import DriverDetailModal from "./DriverDetailModal";
import Link from "next/link";

function Page() {
    const [showModal9, setShowModal9] = useState(false);

    return (
        <Fragment>
            <>
                <div className="w-full py-10">
                    <div className="max-w-[1140px] md:mx-auto mx-5 my-20">
                        <Link href="./TravellerPayment" className="w-fit">
                            <div className="flex gap-1 items-center text-sm text-gray-600 font-semibold cursor-pointer w-fit">
                                <BsChevronLeft />
                                <span>Back</span>
                            </div>
                        </Link>

                        <div className="flex flex-col items-center justify-center mt-5 md:mt-10">
                            <Link href="./TripEndInformation">
                                <div className="bg-white shadow-lg border border-gray-50 p-10 rounded-full">
                                    <IoMdCheckmark
                                        size={70}
                                        className="text-yellow-400"
                                    />
                                </div>
                            </Link>

                            <div className="flex items-center flex-col mt-5 gap-4">
                                <p className="font-medium text-xl md:text-5xl">
                                    Thank you
                                </p>
                                <p className="font-medium text-lg md:text-2xl">
                                    Your order will be confirmed
                                </p>
                                <span className="w-[70%] text-gray-600 text-[10px] md:text-sm text-center">
                                    You will be recieveing a confirmation email
                                    with order details
                                </span>

                                <button
                                    onClick={() => setShowModal9(true)}
                                    className="bg-yellow-400 hover:bg-yellow-200 rounded-full px-5 py-2 duration-500 font-bold text-[14px] md:text-lg"
                                >
                                    View Driver Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <DestinationModal
                    isVisible={showModal9}
                    onClose={() => setShowModal9(false)}
                >
                    <DriverDetailModal />
                </DestinationModal>
            </>
        </Fragment>
    );
}

export default Page;
