import Image from "next/image";
import Link from "next/link";
import React from "react";
import axiosClient from "@/utils/axios-client";

function Page() {
  const client = axiosClient();

  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
        <div className="hero-image-container relative h-[30vh] w-full rounded-3xl">
          <Image
            src="/assets/image7.png"
            alt="/"
            fill
            className="absolute object-cover w-full h-full rounded-3xl"
          />
        </div>

        <div className="flex items-center justify-end mt-10">
          <Link href="/signin">
            <span className="text-lg font-bold cursor-pointer">
              Already have an account?
            </span>
          </Link>
        </div>

        <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
          <div className="flex flex-col items-center justify-center gap-5 heading">
            <h2 className="text-3xl">Create account</h2>
            <span className="text-center text-[12px] w-full md:w-[65%] text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Donec eu leo cursus neque
              rhoncus scelerisque{" "}
            </span>
          </div>

          <form
            action=""
            className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[16px]">Full name</label>
              <div className="flex items-center w-full h-12">
                <input
                  type="text"
                  placeholder="John doe"
                  className="px-5 bg-gray-100 w-full outline-yellow-200 rounded-full h-full border-none text-[12px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[16px]">Email address</label>
              <div className="flex items-center w-full h-12">
                <input
                  type="email"
                  placeholder="John doe@gmail.com"
                  className="px-5 bg-gray-100 w-full h-full rounded-full outline-yellow-200 border-none text-[12px]"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold text-[16px]">Phone number</label>
              <div className="relative flex items-center w-full h-12">
                <input
                  type="number"
                  placeholder="09152163040"
                  className="px-5 bg-gray-100 outline-yellow-200 rounded-full h-full border-none w-full text-[12px]"
                />
              </div>
            </div>
            <div className="flex justify-end mx-auto mr-0 cursor-pointer w-fit">
              <span className="text-[12px] font-semibold w-fit">
                Forget password?
              </span>
            </div>
            <div className="flex items-center justify-center button">
              <Link href="/resetFiles/EmailVerification">
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
