"use client";
import Image from "next/image";
import { useState } from "react";
export const Dropdown = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggledropDown = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
        <button className="bg-[#FFD700] rounded-3xl  px-6 py-3 flex justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Electronics"
            className="font-normal text-sm xl:text-lg w-full md:w-10/12 bg-transparent border-none outline-none text-[#000000] opacity-50"
          />
          {/* <span className="opacity-50 text-sm font-normal">
                Electronics
              </span> */}
          <Image
            src="/image/iconoir_cancel.png"
            className="w-4 h-4"
            width="50"
            height="50"
            alt="cancel"
          />
        </button>
        <Image
          src="/image/icon-park_down.png"
          className="w-4 h-4 flex self-center mr-4"
          width="50"
          height="50"
          alt="location"
          onClick={toggledropDown}
        />
      </div>
      {isOpen && (
        <ul className="shadow-xl p-2 md:w-1/2 md:ml-auto flex flex-col gap-3 rounded-lg mt-3">
          <li className="bg-[#CCCCCC26] flex items-center rounded-lg p-3 bg-opacity-50 pb-2 font-normal text-sm">
            Option 1
          </li>
          <li className="bg-[#CCCCCC26] flex items-center rounded-lg p-3 bg-opacity-70 pb-2 font-normal text-sm">
            Option 2
          </li>
          <li className="bg-[#CCCCCC26] flex items-center rounded-lg p-3 bg-opacity-40 pb-2 font-normal text-sm">
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
