import Image from "next/image";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

function AddCardModal() {
  return (
    <div className="bg-white w-[90%] md:w-[550px] py-10 px-9 rounded-[36px]">
      <div className="header flex items-center justify-between">
        <AiOutlineArrowLeft size={20} className="font-semibold cursor-pointer" />
        <p className="font-semibold">Add card</p>
        <span className="font-semibold cursor-pointer">X</span>
      </div>

      <form>
        {/* User card details */}
        <div className="flex gap-2 flex-col w-full mt-3">
          <label className="font-semibold text-[12px]">Card number</label>
          <div className="bg-gray-100 h-12 w-full flex items-center px-5 rounded-full relative">
            <Image
              src="/assets/mastercard.png"
              width={20}
              height={20}
              className="object-contain absolute left-4"
              alt="/"
            />
            <input
              type="number"
              placeholder="4563 2344 2234 1234"
              className="bg-transparent w-full outline-none border-none text-[12px] pl-6"
            />
          </div>
        </div>

        {/* User card name */}
        <div className="flex gap-2 flex-col w-full mt-4">
          <label className="font-semibold text-[12px]">Card holder name</label>
          <div className="bg-gray-100 w-full flex items-center px-5 rounded-full relative">
            <BsPerson className="absolute left-4" />
            <input
              type="text"
              placeholder="John doe"
              className="bg-transparent h-12 w-full outline-none border-none text-[12px] pl-6"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2 flex-col w-full md:w-[50%] mt-3">
            <label className="font-semibold text-[12px]">Expiry date</label>
            <div className="bg-gray-100 h-12 w-full flex items-center px-5 rounded-full">
              <input
                type="number"
                placeholder="12/34"
                className="bg-transparent w-full outline-none border-none text-[12px]"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col w-full md:w-[50%] mt-3">
            <label className="font-semibold text-[12px]">CVV</label>
            <div className="bg-gray-100 h-12 w-full flex items-center px-5 rounded-full">
              <input
                type="number"
                placeholder="345"
                className="bg-transparent w-full outline-none border-none text-[12px]"
              />
            </div>
          </div>
        </div>

        {/* save button */}

        <div className="flex justify-center mt-5">
         <button className="bg-yellow-400 hover:bg-yellow-300 duration-200 px-10 py-3 rounded-full font-bold">Save and confirm</button>
        </div>
      </form>
    </div>
  );
}

export default AddCardModal;
