import React, { Fragment } from "react";
import Link from "next/link";

function PostTrip() {
    return (
        <Fragment>
            <>
                <div className="bg-white w-[300px] py-10 rounded-3xl flex flex-col justify-center items-center">
                    <span className="bg-white border border-gray-100 shadow-xl font-bold rounded-full py-2 px-10">
                        Post a trip
                    </span>

                    <div className="select-state text-center my-10">
                        <Link href="./../driverPage/DriverPage">
                            <p className="text-2xl font-bold mb-3 text-gray-200 cursor-pointer hover:text-black duration-200">
                                As a driver
                            </p>
                        </Link>
                        <p className="text-2xl font-bold mb-3 text-gray-200 hover:text-black duration-200 cursor-pointer">
                            As a package sender
                        </p>
                        <Link href="./../postTraveller">
                            <p className="text-3xl font-bold text-gray-200 hover:text-black duration-200 mb-3 cursor-pointer">
                                As a traveller
                            </p>
                        </Link>
                    </div>
                </div>
            </>
        </Fragment>
    );
}

export default PostTrip;
