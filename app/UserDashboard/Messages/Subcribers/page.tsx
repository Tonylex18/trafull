"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Chat from "../Chat/page";

function Messages() {
    return (
        <>
            <div className="px-2 sm:px-0">
                <Tab.Group vertical>
                    <div className="flex flex-col md:flex-row">
                        <Tab.List className="flex flex-col items-start md:w-[45%] w-full md:py-10 gap-10 md:bg-white bg-yellow-300 rounded-2xl md:h-[80vh] md:mb-0 mb-5">
                            <div className="heading px-4 md:w-none w-full">
                                <h2 className="d-none font-bold text-2xl">Messages</h2>
                                <div className="flex items-center gap-2 px-4 py-3  rounded-full bg-gray-200 mt-10">
                                    <AiOutlineSearch size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search message"
                                        className="bg-transparent border-none outline-none font-bold text-sm w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="main w-full">
                                <div className="flex md:flex-col flex-row md:justify-normal justify-evenly md:py-2 w-full overflow-x-scroll no-scrollbar">
                                    <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none md:text-lg text-[12px] w-full">
                                        <div className="px-4 flex md:flex-row flex-col items-center gap-3 border border-b-4 border-gray-100 py-2 cursor-pointer w-full">
                                            <Image
                                                src="/assets/profile2.png"
                                                alt="/"
                                                width={50}
                                                height={50}
                                                className="rounded-full object-cover"
                                            />
                                            <div className="text flex flex-col gap-1">
                                                <p className="leading-none font-semibold">
                                                    Adeyanju
                                                </p>
                                                <span className="d-none text-[10px] text-green-500 italic leading-none truncate w-[170px]">
                                                    Typing...
                                                </span>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none  md:text-lg text-[12px] w-full">
                                        <div className="px-4 flex md:flex-row flex-col items-center gap-3 border border-b-4 border-gray-100 py-2 cursor-pointer w-full">
                                            <Image
                                                src="/assets/profile2.png"
                                                alt="/"
                                                width={50}
                                                height={50}
                                                className="rounded-full object-cover"
                                            />
                                            <div className="text flex flex-col gap-1">
                                                <p className="leading-none font-semibold">
                                                    Adeyanju
                                                </p>
                                                <span className="d-none text-[10px] text-green-500 italic leading-none truncate w-[170px]">
                                                    Typing...
                                                </span>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none  md:text-lg text-[12px] w-full">
                                        <div className="px-4 flex md:flex-row flex-col items-center gap-3 border border-b-4 border-gray-100 py-2 cursor-pointer w-full">
                                            <Image
                                                src="/assets/profile2.png"
                                                alt="/"
                                                width={50}
                                                height={50}
                                                className="rounded-full object-cover"
                                            />
                                            <div className="text flex flex-col gap-1">
                                                <p className="leading-none font-semibold">
                                                    Adeyanju
                                                </p>
                                                <span className="d-none text-[10px] text-green-500 italic leading-none truncate w-[170px]">
                                                    Typing...
                                                </span>
                                            </div>
                                        </div>
                                    </Tab>
                                </div>
                            </div>
                        </Tab.List>
                        <Tab.Panels className="md:ml-5 w-full">
                            <Tab.Panel>
                                <Chat />
                            </Tab.Panel>
                            <Tab.Panel>
                                <Chat />
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </>
    );
}

export default Messages;
