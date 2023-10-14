"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function Page() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
        <div className="cursor-pointer w-fit">
        <Link href="/" className="w-fit flex items-center">
          <IoIosArrowBack size={25} />
          <span className="text-gray-400">Back</span>
        </Link>
        </div>

        <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
          <div className="heading flex flex-col items-center justify-center gap-5">
            <h2 className="text-2xl md:text-3xl text-center">
              Package carrier
            </h2>
            <span className="text-center text-[12px] w-full md:w-[55%] text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Donec eu leo cursus neque
              rhoncus scelerisque{" "}
            </span>
          </div>

          <form
            action=""
            className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
          >
            <label className="text-center font-medium">Upload a document</label>
            <div className="flex w-[50%] m-auto mr-16 gap-5 flex-col">
              <div className="flex gap-2">
                <input
                  type="radio"
                  value="national-id"
                  checked={selectedOption === "national-id"}
                  onChange={handleOptionChange}
                  id="national-id"
                  className="accent-yellow-400"
                />
                <Link href="./imageUpload">
                  <label className="text-sm font-light cursor-pointer">
                    National ID
                  </label>
                </Link>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value="international-passport"
                  checked={selectedOption === "international-passport"}
                  onChange={handleOptionChange}
                  id="international-passport"
                  className="accent-yellow-400"
                />
                <Link href="./imageUpload">
                  <label className="text-sm font-light cursor-pointer">
                    International passport
                  </label>
                </Link>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value="driver-license"
                  checked={selectedOption === "driver-license"}
                  onChange={handleOptionChange}
                  id="driver-license"
                  className="accent-yellow-400"
                />
                <Link href="./imageUpload">
                  <label className="text-sm font-light">
                    Driver&apos;s license
                  </label>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
