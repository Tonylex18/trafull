import React from "react";

const Number = () => {
  return (
    <div className="shadow-md rounded-lg absolute top-8 right-14 cursor-pointer z-20 bg-white overflow-hidden">
      <ul className="font-semibold text-xs pb-2 md:ml-auto flex flex-col gap-3  mt-3">
        <li className="cursor-pointer px-3 py-2 border-b z-30 flex items-center">
          Edit trip posting
        </li>
        <li className="cursor-pointer px-3 pb-2 border-b flex items-center">
          Add a new trip
        </li>
        <li className="cursor-pointer px-3 py flex items-center">
          Close trip posting
        </li>
      </ul>
    </div>
  );
};

export default Number;
