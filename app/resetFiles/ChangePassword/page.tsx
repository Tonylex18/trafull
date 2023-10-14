import Link from "next/link";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

function Page() {
    return (
        <div className="w-full py-10">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
                <div className="cursor-pointer w-fit">
                    <Link
                        href="./PhoneVerification"
                        className="flex gap-1 items-center w-fit"
                    >
                        <IoIosArrowBack size={25} />
                        <span className="text-gray-400">Back</span>
                    </Link>
                </div>

                <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
                    <div className="heading flex flex-col items-center justify-center gap-5">
                        <h2 className="text-3xl">Password</h2>
                        <span className="text-center text-[12px] w-full md:w-[55%] text-gray-400">
                            Lorem ipsum dolor sit amet consectetur. Donec eu leo
                            cursus neque rhoncus scelerisque{" "}
                        </span>
                    </div>

                    <form
                        action=""
                        className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
                    >
                        <div className="flex gap-5 flex-col">
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
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-[16px]">
                                    Confirm password
                                </label>
                                <div className="h-12 w-full flex items-center relative">
                                    <input
                                        type="password"
                                        placeholder="********"
                                        className="bg-gray-100 px-5 rounded-full w-full h-full outline-yellow-200 border-none text-[12px]"
                                    />
                                    <BsEyeSlash className="absolute top-[35%] right-5 translate-x-px cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="button flex items-center justify-center">
                            <Link href="../signin">
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
