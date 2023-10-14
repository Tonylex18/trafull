"use client";
import Image from "next/image";
import { useState } from "react";
export const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggledropDown = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
        <div className="flex justify-center gap-2 items-center">
          <Image
            src="/image/la_truck-pickup.png"
            className="w-4 h-4"
            width="50"
            height="50"
            alt="cancel"
          />
          <input
            type="number"
            placeholder="2"
            className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
          />
        </div>
        <Image
          src="/image/icon-park_down.png"
          className="w-4 h-4 flex self-center"
          width="50"
          height="50"
          alt="location"
          onClick={toggledropDown}
        />
      </div>
      {isOpen && (
        <ul className="shadow-xl md:w-1/2 md:ml-auto p-2 flex flex-col gap-3 rounded-lg mt-3">
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

export default Dropdown2;
