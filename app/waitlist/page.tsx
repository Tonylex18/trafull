import Image from "next/image";
import React from "react";

function page() {
    return (
        <>
            <div className="">
                <Image
                    src="/assets/heroImage.png"
                    alt="/"
                    width={1040}
                    height={720}
                    className="w-full hero image"
                />

                <div className="w-full text-center mt-12">
                    <div className="max-w-[1240px] w-full mx-auto p-2 flex flex-col justify-center">
                        <div className="">
                            <h1 className="font-bold max-w-[90%] md:max-w-[70%] m-auto text-2xl md:text-5xl sm:text-4xl  text-grey-700">
                                Peer-to-Peer Intercity Transportation and
                                Package Delivery
                            </h1>
                            <p className="text-slate-500 font-medium py-6 max-w-[90%] md:max-w-[60%] m-auto text-sm sm:text-xl">
                                Trafull is a platform that matches travellers
                                with traveling car owners and connects
                                package-senders with a network of verified
                                travellers at an affordable rate.
                            </p>
                        </div>
                        <div className="bg-gray-200 w-full md:w-[80%] lg:w-[50%] flex justify-between mx-auto my-16 pl-5 md:pl-10 rounded-full ">
                            <input
                                type="emial"
                                placeholder="Enter your email address"
                                className="bg-transparent border-none outline-none flex-auto w-[70%]"
                            />
                            <button className="bg-yellow-300 flex-auto w-[30%] rounded-full px-3 md:px-5 py-3 md:py-8 font-semibold">
                                Join the waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
