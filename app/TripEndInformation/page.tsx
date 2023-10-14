import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";

function page() {
  return (
    <>
      <div className="w-full py-10">
        <div className="max-w-[1140px] md:mx-auto mx-5 my-20">
          <Link href="./PaymentSuccesfull">
            <div className="flex gap-1 items-center text-sm text-gray-600 font-semibold cursor-pointer">
              <BsChevronLeft />
              <span>Back</span>
            </div>
          </Link>
          <div className="bg-white shadow-lg border border-gray-50 py-10 rounded-2xl mt-5 w-[90%] mx-auto flex items-center justify-center flex-col">
            <h6 className="text-2xl mb-3">Trip ends</h6>
            <p className="w-[90%] md:w-[40%] text-center text-gray-400 leading-none">
              Lorem ipsum dolor sit amet consectetur. Donec eu leo cursus neque
              rhoncus scelerisque{" "}
            </p>

            <Image
              src="/assets/image10.png"
              width={300}
              height={300}
              className="object-contain"
              alt="/"
            />

            {/* User review */}
            <div className="">
              <div className="flex items-start gap-2">
                <Image
                  src="/assets/profile2.png"
                  width={50}
                  height={50}
                  alt="/"
                  className="rounded-full object-contain"
                />
                <div>
                  <h4 className="text-sm">Adeyanju</h4>
                  <p className="text-gray-400 text-sm">Posting publicly</p>
                  <div className="flex items-center gap-2">
                    <AiFillStar size={20} className="text-yellow-400" />
                    <AiFillStar size={20} className="text-yellow-400" />
                    <AiFillStar size={20} className="text-yellow-400" />
                    <AiFillStar size={20} className="text-yellow-400" />
                    <AiFillStar size={20} className="text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Comment */}
              <form className="mt-5">
                <div className="flex flex-col gap-2">
                  <label>Comment</label>
                  <textarea
                    placeholder="Tell us about your trip"
                    className="resize-none bg-gray-100 h-20 w-[200px] sm:w-[314px] md:w-[414px] border-none outline-none rounded-2xl px-5 py-3 text-sm"
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <button className="bg-yellow-400 hover:bg-yellow-300 duration-500 px-10 py-1 rounded-full font-bold text-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
