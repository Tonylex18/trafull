import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsEyeSlash } from "react-icons/bs";

function Page() {
    return (
        <div className="w-full py-10">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
                <div className="hero-image-container relative h-[30vh] w-full rounded-3xl">
                    <Image
                        src="/assets/image7.png"
                        alt="/"
                        fill
                        className="absolute h-full w-full object-cover rounded-3xl"
                    />
                </div>

                <div className="flex mt-10 items-center justify-end">
                    <Link href="/signup">
                        <span className="cursor-pointer font-bold text-lg">
                            Don&apos;t have an account?
                        </span>
                    </Link>
                </div>

                <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
                    <div className="heading flex flex-col items-center justify-center gap-5">
                        <h2 className="text-3xl">Sign in</h2>
                        <span className="text-center text-[12px] w-full md:w-[65%] text-gray-400">
                            Lorem ipsum dolor sit amet consectetur. Donec eu leo
                            cursus neque rhoncus scelerisque{" "}
                        </span>
                    </div>

                    <form
                        action=""
                        className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
                    >
                        <div className="flex gap-2 flex-col">
                            <label className="font-semibold text-[16px]">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="John doe@gmail.com"
                                className="bg-gray-100 w-full border-none text-[12px] h-12  flex outline-yellow-200 items-center px-5 rounded-full"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-[16px]">
                                Password
                            </label>
                            <div className="h-12 flex items-center border-yellow-200  rounded-full relative">
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="bg-gray-100 w-full outline-yellow-200 px-5 h-full rounded-full border-none text-[12px]"
                                />
                                <BsEyeSlash className="absolute top-[35%] right-5 translate-x-px cursor-pointer" />
                            </div>
                        </div>
                        <Link href="./forgetpassword/ForgetPassword">
                            <div className="flex justify-end cursor-pointer w-fit mx-auto mr-0">
                                <span className="text-[12px] font-semibold w-fit">
                                    Forget password?
                                </span>
                            </div>
                        </Link>
                        <Link href="/UserDashboard/Messages">
                            <div className="button flex items-center justify-center">
                                <button className="bg-yellow-400 px-16 py-2 rounded-full font-semibold">
                                    Continue
                                </button>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
