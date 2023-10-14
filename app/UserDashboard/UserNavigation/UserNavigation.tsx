"use client";
import React, { useState } from "react";
import {
    AiOutlineClose,
    AiOutlineMessage,
    AiOutlineSetting,
} from "react-icons/ai";
import { BsCardChecklist, BsFillPostcardFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserNav from "../UserNav/UserNav";
import Link from "next/link";

function UserNavigation() {
    const [userNav, setUsernav] = useState(false);

    const handleUserNavClose = () => {
        setUsernav(false);

        document.body.style.overflow = "unset";
    };

    return (
        <>
            <div className="flex flex-col items-center w-full py-10 gap-16 bg-white rounded-2xl h-[80vh]">
                <div className="heading">
                    <h2 className="font-bold text-2xl">Your Account</h2>
                </div>
                <div className="navLink flex flex-col items-start gap-2 w-full">
                    <div className="bg-yellow-300 border-black w-full">
                        <Link href="./Messages">
                            <UserNav Icon={AiOutlineMessage} title="Message" />
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
                    <UserNav
                        Icon={IoMdNotificationsOutline}
                        title="Notification"
                    />
                    <UserNav Icon={BsFillPostcardFill} title="My Posting" />
                    <UserNav Icon={AiOutlineSetting} title="Settings" />
                </div>
            </div>
            <div
                className={
                    userNav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[200]"
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
                            <UserNav Icon={AiOutlineMessage} title="Message" />
                        </div>
                        <UserNav Icon={BsCardChecklist} title="Transactions" />
                        <UserNav
                            Icon={IoMdNotificationsOutline}
                            title="Notification"
                        />
                        <UserNav Icon={BsFillPostcardFill} title="My Posting" />
                        <UserNav Icon={AiOutlineSetting} title="Settings" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserNavigation;
