import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsEyeSlash } from "react-icons/bs";

function Page() {
    return (
        <div className="w-full py-10">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
                <div className="w-[95%] md:max-w-[95%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
                    <div className="heading flex flex-col items-center justify-center gap-5">
                        <h2 className="text-3xl">Report account</h2>
                        <span className="text-center text-[12px] w-full md:w-[40%] text-gray-400">
                            Lorem ipsum dolor sit amet consectetur. Donec eu leo
                            cursus neque rhoncus scelerisque{" "}
                        </span>
                    </div>

                    <form
                        action=""
                        className="flex justify-center gap-10 flex-col m-auto w-full md:w-[65%] my-10"
                    >
                        <div className="flex gap-2 flex-col">
                            <label className="font-semibold text-[16px]">
                                Subject
                            </label>
                            <textarea
                                rows={5}
                                cols={40}
                                placeholder="Tell us about your trip"
                                className="bg-gray-100 rounded-3xl py-5 px-5 w-full outline-none border-none text-[20px] resize-none font-semibold"
                            />
                        </div>
                        <div className="button flex items-center justify-center">
                            <button className="bg-yellow-400 px-16 py-2 rounded-full font-semibold">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
