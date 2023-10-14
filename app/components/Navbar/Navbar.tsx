"use client"; // This is a client component.
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCar, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineConnectWithoutContact, MdPermIdentity } from "react-icons/md";
import { BsBox2Heart } from "react-icons/bs";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(true);

        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    };

    const handleNavClose = () => {
        setNav(false);

        document.body.style.overflow = "unset";
    };

    return (
        <div className="fixed w-full h-20 nav z-[100]">
            <div className="max-w-[1140px] mx-5 lg:m-auto h-full flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                    <Image
                        src="/assets/logo.png"
                        alt="/"
                        className="image logo"
                        width={70}
                        height={40}
                    />
                    <span className="text-2xl lg:text-3xl text-black font-bold">
                        Trafull
                    </span>
                </div>
                <div className="hidden md:flex">
                    <Link href="/">
                        <li className="flex items-center gap-1">
                            <AiOutlineCar size={30} />
                            <span className="mr-5 text-black font-semibold">
                                Find Ride
                            </span>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="flex items-center gap-1">
                            <MdOutlineConnectWithoutContact size={30} />
                            <span className="mr-5 text-black font-semibold">
                                Connect with Travellers
                            </span>
                        </li>
                    </Link>
                    <Link href="/PackageCarrier/optionFile">
                        <li className="flex items-center gap-1">
                            <BsBox2Heart size={20} />
                            <span className="mr-5 text-black font-semibold">
                                Send a package
                            </span>
                        </li>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-5">
                    <Link href="/signin">
                        <span className="flex gap-2 items-center text-black font-semibold">
                            <MdPermIdentity className="text-3xl" />
                            profile
                        </span>
                    </Link>
                </div>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu className="cursor-pointer" size={25} />
                </div>
            </div>

            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <Image
                                    src="/assets/logo.png"
                                    alt="/"
                                    className="image logo"
                                    width={70}
                                    height={40}
                                />
                                <span className="text-2xl lg:text-3xl text-black font-bold">
                                    Trafull
                                </span>
                            </div>
                            <div
                                onClick={handleNavClose}
                                className="shadow-slate-100 p-2 cursor-pointer"
                            >
                                <AiOutlineClose size={25} />
                            </div>
                        </div>

                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&apos;s give you the best experience
                            </p>
                        </div>

                        <div>
                            <ul className="text-black">
                                <Link
                                    href="/"
                                    className="py-4 flex items-center gap-2 w-fit"
                                >
                                    <AiOutlineCar size={30} />
                                    <span className="text-black font-semibold">
                                        Find Ride
                                    </span>
                                </Link>
                                <Link
                                    href="/"
                                    className="py-4 flex items-center gap-2 w-fit"
                                >
                                    <MdOutlineConnectWithoutContact size={30} />
                                    <span className="text-black font-semibold">
                                        Connect with Travellers
                                    </span>
                                </Link>
                                <Link
                                    href="/PackageCarrier/optionFile"
                                    className="py-4 flex items-center gap-2 w-fit"
                                >
                                    <BsBox2Heart size={20} />
                                    <span className="text-black font-semibold">
                                        Send a package
                                    </span>
                                </Link>
                                <Link
                                    href="/signin"
                                    className="py-4 flex items-center gap-2 w-fit"
                                >
                                    <MdPermIdentity size={30} />
                                    <span className="mr-5 text-black font-semibold">
                                        profile
                                    </span>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
