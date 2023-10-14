import Link from "next/link";
import React from "react";

function Rules() {
    return (
        <>
            <div className="bg-white w-[350px] py-5 rounded-3xl flex gap-5 flex-col ">
                <span className="font-bold text-3xl rounded-full py-2 px-12">
                    Rules
                </span>

                <div className="select-state px-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-3xl bg-yellow-300"></div>
                        <div>
                            <h2 className="font-medium leading-none">
                                Reliability
                            </h2>
                            <p className="text-[12px] text-gray-300  leading-none">
                                Kindly ensure you are travelling on the selected
                                date and time
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-4 rounded-3xl bg-yellow-300"></div>
                        <div>
                            <h2 className="font-medium">No cash policy</h2>
                            <p className="text-[12px] text-gray-300 leading-none">
                                All passengers pay online. A payout will be
                                recievied after the trip
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-4 rounded-3xl bg-yellow-300"></div>
                        <div>
                            <h2 className="font-medium">Safety</h2>
                            <p className="text-[12px] text-gray-300 leading-none">
                                Keep your location on from the start to the end
                                of the journey. Stick to speed limits. Do not
                                use your phone while driving.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" />
                        <label htmlFor="" className="text-[12px] leading-none">
                            I agree to these rules and to the drivers{" "}
                            <span className="text-yellow-400">
                                cancellation policy, Terms of service
                            </span>{" "}
                            and{" "}
                            <span className="text-yellow-400">
                                privacy policy
                            </span>{" "}
                        </label>
                    </div>

                    <div className="flex w-full items-center">
                        <Link href="/TripInformation" className="w-full">
                            <button className="bg-yellow-200 py-4 w-full flex items-center justify-center hover:bg-yellow-400 hover:font-bold duration-200 rounded-full">
                                Post travel plan
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rules;
