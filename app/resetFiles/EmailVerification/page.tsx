"use client";

import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoIosArrowBack } from "react-icons/io";

function Page() {
    const [emails, setEmails] = useState(["", "", "", ""]);

    const handleEmailChange = (
        event: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const truncatedValue = event.target.value.slice(0, 1);
        const updatedEmails = [...emails];
        updatedEmails[index] = truncatedValue;
        setEmails(updatedEmails);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform any necessary actions with the truncated email values
    };

    return (
        <div className="w-full py-10">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
                <div className="cursor-pointer w-fit">
                    <Link
                        href="/signup"
                        className="w-fit flex  gap-1 items-center"
                    >
                        <IoIosArrowBack size={25} />
                        <span className="text-gray-400">Back</span>
                    </Link>
                </div>

                <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
                    <div className="heading flex flex-col items-center justify-center gap-5">
                        <h2 className="text-3xl">Email verification</h2>
                        <span className="text-center text-[12px] w-full md:w-[55%] text-gray-400">
                            Lorem ipsum dolor sit amet consectetur. Donec eu leo
                            cursus neque rhoncus scelerisque{" "}
                        </span>
                    </div>

                    <form
                        action=""
                        className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex gap-2 flex-col">
                            <div className="flex items-center justify-between">
                                <span className="font-light text-gray-400 text-[16px]">
                                    Email
                                </span>
                                <span className="font-light text-gray-400 text-[16px]">
                                    3:00
                                </span>
                            </div>
                            <div className="otp-input flex justify-center items-center gap-4">
                                {emails.map((email, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        className="border-b w-[50%] text-center outline-none border-gray-500  rounded-md px-3 py-2"
                                        value={email}
                                        onChange={(event) =>
                                            handleEmailChange(event, index)
                                        }
                                        maxLength={1}
                                        required
                                    />
                                ))}
                            </div>

                            <div className="flex justify-end cursor-pointer w-fit mx-auto mr-0 my-4">
                                <span className="text-[12px] font-semibold w-fit">
                                    Didn&apos;t recieved the code?
                                </span>
                            </div>
                        </div>
                        <div className="button flex items-center justify-center">
                            <Link href="./PhoneVerification">
                                <button className="bg-yellow-400 px-16 py-2 rounded-full font-semibold">
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
