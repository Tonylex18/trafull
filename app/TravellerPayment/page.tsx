"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import DestinationModal from "../postTrip/DestinationModal";
import AddCardModal from "./AddCardModal";
import GoogleMapEmbed from "../components/Map/Map";
import Link from "next/link";

function Page() {
    const [showModal8, setShowModal8] = useState(false);

    return (
        <Fragment>
            <>
                <div className="w-full py-10">
                    <div className="max-w-[1140px] md:mx-auto mx-5 my-20">
                        <div className="flex flex-col md:flex-row justify-between gap-3">
                            <div className="flex-auto w-full md:w-96 h-fit p-4 bg-gray-50 rounded-lg ">
                                <div className="header">
                                    <h2>Payment gateway</h2>
                                    <p className="text-gray-400 text-sm">
                                        Enter your personal details to complete
                                        your purchase
                                    </p>
                                </div>
                                <Image
                                    src="/assets/image9.png"
                                    width={500}
                                    height={500}
                                    alt="/"
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-auto w-full h-fit relative md:w-20 bg-white rounded-3xl p-5 shadow-xl border border-gray-100">
                                <span className="flex justify-center text-sm font-semibold mb-5">
                                    Billing details
                                </span>

                                {/* Embed map container */}
                                <div className="w-100 h-32 bg-black rounded-3xl">
                                    {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
                                    <GoogleMapEmbed
                                        width="100%"
                                        height="100%"
                                    />
                                </div>

                                {/* Billing Details */}
                                <div className="mt-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-gray-400 text-sm">
                                            Driver
                                        </span>
                                        <span className="text-sm font-semibold">
                                            Mr Ayotunde
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">
                                            Trip details
                                        </span>
                                        <span className="text-sm font-semibold">
                                            Abuja - Kaduna
                                        </span>
                                    </div>

                                    <div className="border-t-2 my-4">
                                        <div className="flex justify-between items-center mt-3 mb-10 md:mb-0">
                                            <span className="text-gray-400 text-sm">
                                                Price
                                            </span>
                                            <span className="text-sm font-semibold">
                                                N12,000
                                            </span>
                                        </div>

                                        <Link href="/PaymentSuccesfull">
                                            <div className="flex justify-center mt-20">
                                                <button
                                                    onClick={() =>
                                                        setShowModal8(true)
                                                    }
                                                    className="w-[70%] rounded-full absolute transform bottom-3 font-bold bg-yellow-300 px-5 py-3"
                                                >
                                                    Pay
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DestinationModal
                    isVisible={showModal8}
                    onClose={() => setShowModal8(false)}
                >
                    <AddCardModal />
                </DestinationModal>
            </>
        </Fragment>
    );
}

export default Page;
