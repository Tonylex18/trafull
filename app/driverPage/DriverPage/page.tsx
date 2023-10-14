import React from "react";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { button } from "../../constants/data";

const driver = () => {
    return (
        <div className="w-full py-4">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-32 mb-16">
                <Link href="/" className="flex gap-2 w-fit items-center">
                    <BsChevronLeft />
                    <h2 className="font-bold text-sm lg:text-lg opacity-50">
                        Back
                    </h2>
                </Link>
                <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7 mt-10 rounded-2xl border border-gray-200">
                    <div className="heading flex flex-col items-center justify-center gap-5">
                        <h1 className="font-bold text-center text-2xl md:text-3xl">
                            Drivers
                        </h1>
                        <p className="font-normal opacity-50 text-[12px] text-center  w-full md:w-[55%]">
                            Lorem ipsum dolor sit amet consectetur. Donec eu leo
                            cursus neque rhoncus scelerisque
                        </p>
                    </div>
                    <h1 className="font-semibold text-lg text-center mt-4">
                        Verification process
                    </h1>
                    <div className="mt-7 w-72 xl:w-96 mx-auto">
                        <Link href="./vehicleInfo">
                            {button.map((item) => (
                                <button
                                    key={item.id}
                                    className="rounded-3xl text-[#000000] text-opacity-50 bg-opacity-50 hover:text-opacity-100  font-semibold justify-between duration-200 items-center flex bg-[#FFD700] hover:bg-yellow-400 my-6 w-full px-5 py-4"
                                >
                                    <span className="text-sm">
                                        {item.title}
                                    </span>
                                    <div className="flex gap-8">
                                        <span className="flex justify-end text-sm">
                                            {item.desc}
                                        </span>
                                        <span>&rarr;</span>
                                    </div>
                                </button>
                            ))}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default driver;
