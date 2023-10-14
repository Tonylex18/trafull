import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

function Chat() {
    return (
        <>
            <div className="flex flex-col items-start pt-4 md:pt-10 gap-5 h-[80vh]">
                <div className="heading px-4 flex items-center gap-3">
                    <Image
                        src="/assets/profile2.png"
                        alt="/"
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                    />
                    <Link href="./ReportUser">
                        <div className="text flex flex-col gap-1">
                            <p className="leading-none font-semibold">
                                Adeyanju
                            </p>
                            <span className="text-[10px] text-green-500 italic leading-none">
                                Typing...
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="main bg-white h-full w-full rounded-3xl px-4 py-3 relative">
                    <div className="overflow-y-scroll no-scrollbar h-4/5">
                        <div className="main-heading flex items-center justify-center flex-col gap-2">
                            <span className="font-bold text-sm">
                                June 18, 2023
                            </span>
                            <div className="flex items-center gap-3 border border-gray-200 text-gray-200 rounded-full px-4 ">
                                <MdErrorOutline />
                                <p className=" text-[12px] md:text-sm">
                                    Violation leads to suspension of account
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border border-gray-200 text-gray-200 rounded-full px-4 ">
                                <MdErrorOutline />
                                <p className=" text-[12px] md:text-sm">
                                    Do not exchange contact details
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border border-gray-200 text-gray-200 rounded-full px-4 ">
                                <MdErrorOutline />
                                <p className=" text-[12px] md:text-sm">
                                    Kindly interact in official languages only.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border border-gray-200 text-gray-200 rounded-full px-4 ">
                                <MdErrorOutline />
                                <p className="wrap text-[12px] md:text-sm">
                                    Don&apos;t pay individuals, kindly make
                                    payment using our payment gateway
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border border-gray-200 text-gray-200 rounded-full px-4 ">
                                <MdErrorOutline />
                                <p className=" text-[12px] md:text-sm">
                                    After the deal is sealed, meet at a safe
                                    public place.
                                </p>
                            </div>
                        </div>

                        <div className="main-body flex justify-between">
                            <div className="reciever mt-28">
                                <div className="bg-gray-200 px-5 py-3 rounded-lg">
                                    <span className="font-semibold text-[14px]">
                                        Yes please?
                                    </span>
                                </div>
                                <span className="text-[10px] text-gray-400 font-medium">
                                    8:35AM
                                </span>
                            </div>
                            <div className="sender mt-4">
                                <div className="bg-gray-200 px-5 py-3 rounded-lg">
                                    <span className="font-semibold text-[14px]">
                                        Can i ask questions about the ride?
                                    </span>
                                </div>
                                <span className="text-[10px] text-gray-400 font-medium">
                                    8:35AM
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="main-footer absolute bottom-5 w-[94%] sm:w-[95%]">
                        <div className="w-full flex flex-col gap-2">
                            <div className="button flex gap-3">
                                <button className="border border-yellow-300 font-bold px-5 py-1 outline-none bg-transparent hover:bg-yellow-300 duration-200 rounded-full">
                                    Suggestions
                                </button>
                                <button className="border-none hover:bg-yellow-200 duration-200 px-5 py-1 outline-none bg-yellow-300 rounded-full font-bold">
                                    Driver’s listings
                                </button>
                            </div>
                            <div className="chat-box flex items-center w-full justify-between bg-gray-200 rounded-full pl-5">
                                <input
                                    type="text"
                                    placeholder="Message..."
                                    className="w-full border-none outline-none bg-transparent font-semibold"
                                />
                                <button className="bg-yellow-300 h-full px-8 py-3 rounded-full font-bold">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
