"use client"; // In use when dealing with a client base app
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import {
    AiOutlineClose,
    AiOutlineMessage,
    AiOutlineSetting,
} from "react-icons/ai";
import UserNav from "../UserNav/UserNav";
import { BsCardChecklist, BsFillPostcardFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Messages from "./Subcribers/page";
import EmptyMessage from "./EmptyMessage";

function Page() {
    const [userNav, setUsernav] = useState(false);

    const handleUserNavOpen = () => {
        setUsernav(true);

        // Remove background scroll when Navber is true
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    };

    const handleUserNavClose = () => {
        setUsernav(false);

        // Add background scroll when navber is false
        document.body.style.overflow = "unset";
    };

    return (
        <>
            <div className="w-full py-10">
                <div className="max-w-[1140px] lg:mx-auto mx-5 mt-16">
                    <div
                        onClick={handleUserNavOpen}
                        className="flex justify-start bg-yellow-200 p-3 d-block"
                    >
                        <BiMenuAltLeft size={35} className="cursor-pointer" />
                    </div>
                    <div className="m-auto  bg-gray-100 p-3 mt-5 rounded-2xl">
                        <div className="flex justify-between items-start gap-4 ">
                            <div className="flex-auto w-[24%] d-none">
                                <div className="flex flex-col items-center w-full py-10 gap-16 bg-white rounded-2xl h-[80vh]">
                                    <div className="heading">
                                        <h2 className="font-bold text-2xl">
                                            Your Account
                                        </h2>
                                    </div>
                                    <div className="navLink flex flex-col items-start gap-2 w-full">
                                        <div className="bg-yellow-300 border-black w-full">
                                            <Link href="./Messages">
                                                <UserNav
                                                    Icon={AiOutlineMessage}
                                                    title="Message"
                                                />
                                            </Link>
                                        </div>
                                        <div className="w-full">
                                            <Link href="./Transactions">
                                                <UserNav
                                                    Icon={BsCardChecklist}
                                                    title="Transactions"
                                                />
                                            </Link>
                                        </div>
                                        <div className="w-full">
                                            <Link href="./Notification">
                                                <UserNav
                                                    Icon={
                                                        IoMdNotificationsOutline
                                                    }
                                                    title="Notification"
                                                />
                                            </Link>
                                        </div>
                                        <div className="w-full">
                                            <Link href="./MyPost">
                                                <UserNav
                                                    Icon={BsFillPostcardFill}
                                                    title="My Posting"
                                                />
                                            </Link>
                                        </div>
                                        <div className="w-full">
                                            <Link href="./Settings">
                                                <UserNav
                                                    Icon={AiOutlineSetting}
                                                    title="Settings"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto w-[76%]">
                                <EmptyMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Div display sideBar only on mobile view */}
            <div
                className={
                    userNav
                        ? "d-block fixed left-0 top-0 w-full h-screen bg-black/70 z-[200]"
                        : ""
                }
            >
                <div
                    className={
                        userNav
                            ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-10 ease-in duration-500"
                            : "fixed right-[-100%] py-10 ease-in duration-500"
                    }
                >
                    <div className="sideMenu mb-5 pl-5">
                        <div
                            onClick={handleUserNavClose}
                            className="shadow-slate-100 p-2 cursor-pointer"
                        >
                            <AiOutlineClose size={30} />
                        </div>
                    </div>
                    <div className="navLink flex flex-col items-start gap-2 w-full">
                        <div className="bg-yellow-300 border-black w-full">
                            <Link href="./Messages">
                                <UserNav
                                    Icon={AiOutlineMessage}
                                    title="Message"
                                />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link href="./Transactions">
                                <UserNav
                                    Icon={BsCardChecklist}
                                    title="Transactions"
                                />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link href="./Notification">
                                <UserNav
                                    Icon={IoMdNotificationsOutline}
                                    title="Notification"
                                />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link href="./MyPost">
                                <UserNav
                                    Icon={BsFillPostcardFill}
                                    title="My Posting"
                                />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link href="./Settings">
                                <UserNav
                                    Icon={AiOutlineSetting}
                                    title="Settings"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
