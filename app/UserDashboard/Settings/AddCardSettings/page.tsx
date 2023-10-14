import Image from "next/image";
import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";

function page() {
    return (
        <>
            <div className="flex flex-col w-full pt-5 gap-7 px-5 md:px-10 bg-white rounded-2xl h-[80vh]">
                <div className="header flex justify-between items-center">
                    <span className="bg-yellow-300 px-7 py-1 text-xl rounded-full font-bold">
                       Add card
                    </span>
                    <span className="text-[50px] font-light cursor-pointer">
                        +
                    </span>
                </div>

                <div className="main">
                    <form action="" className="flex flex-col gap-7">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Card number 
                            </label>
                            <div className="bg-gray-100 border border-transparent rounded-full px-5 font-bold w-full md:w-[90%] py-3 hover:border-yellow-300 flex items-center gap-2">
                                <Image
                                    src="/assets/mastercard.png"
                                    width={20}
                                    height={20}
                                    alt="/"
                                />
                                <input
                                    type="number"
                                    placeholder="Johndoe@gmail.com"
                                    className="outline-none bg-transparent border-none w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Card holder name
                            </label>
                            <div className="bg-gray-100 border border-transparent hover:border-yellow-300 rounded-full px-5 font-bold w-full md:w-[90%] py-3 outline-none flex items-center gap-2">
                                <MdOutlinePersonOutline size={20} />
                                <input
                                    type="text"
                                    placeholder="Johndoe@gmail.com"
                                    className="bg-transparent outline-none border-none"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col items-start gap-2">
                                <label htmlFor="" className="font-semibold">
                                    Expiring date
                                </label>
                                <div className="bg-gray-100 border border-transparent hover:border-yellow-300  rounded-full px-5 font-bold  py-3 flex items-center gap-2 w-full md:w-[75%]">
                                    <input
                                        type="number"
                                        placeholder="12/25"
                                        className="bg-transparent outline-none border-none w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label htmlFor="" className="font-semibold">
                                    CVV
                                </label>
                                <div className="bg-gray-100 border border-transparent hover:border-yellow-300  rounded-full px-5 font-bold py-3 outline-none flex items-center gap-2 w-full md:w-[75%]">
                                    <input
                                        type="number"
                                        placeholder="345"
                                        className="bg-transparent outline-none border-none w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-yellow-300 px-7 py-2 rounded-full font-bold">
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default page;
