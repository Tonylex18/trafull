"use client";

import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface DropdownProps {
  options: string[];
  className?: string;
  iconInput: React.ReactElement;
}

const Dropdown: React.FC<DropdownProps> = ({ options, iconInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="inline-block ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <div>{iconInput}</div>
          <span className={` font-medium shrink-0   text-sm`}>
            {selectedOption || "Select "}
          </span>
        </div>
        <div>
          <button
            className="absolute flex items-end justify-end py-2 font-extrabold rounded top-4 right-4 h-1/2 "
            onClick={toggleDropdown}
          >
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 w-full mt-2">
          <div className="bg-white shadow-lg rounded-2xl">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:font-extrabold hover:bg-lightYellow"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
