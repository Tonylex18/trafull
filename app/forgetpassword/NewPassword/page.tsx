import Image from "next/image";
import Link from "next/link";
import React from "react";
import axiosClient from "@/utils/axios-client";
import { IoIosArrowBack } from "react-icons/io";
import { BsEyeSlash } from "react-icons/bs";

function Page() {
    const client = axiosClient();

    return (
        <div className="w-full py-10">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
                <div className="cursor-pointer w-fit">
                    <Link
                        href="./EnterPassCode"
                        className="flex gap-1 items-center w-fit"
                    >
                        <IoIosArrowBack size={25} />
                        <span className="text-gray-400">Back</span>
                    </Link>
                </div>

                <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
                    <div className="flex flex-col items-center justify-center gap-5 heading">
                        <h2 className="text-3xl">Enter a new password</h2>
                        <span className="text-center text-[12px] w-full md:w-[65%] text-gray-400">
                            To secure your account create a new password
                        </span>
                    </div>

                    <form
                        action=""
                        className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-[16px]">
                                Password
                            </label>
                            <div className=" h-12 w-full flex items-center relative">
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="bg-gray-100 px-5 rounded-full h-full w-full outline-yellow-200 border-none text-[12px]"
                                />
                                <BsEyeSlash className="absolute top-[35%] right-5 translate-x-px cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center button">
                            <Link href="/signin">
                                <button className="px-16 py-2 font-semibold bg-yellow-400 rounded-full">
                                    Continue
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
