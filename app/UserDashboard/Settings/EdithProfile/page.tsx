"use client";
import React, { ChangeEvent } from "react";
import { BsGenderFemale } from "react-icons/bs";

function EdithProfile() {
    const options = ["Male", "Female"];
    const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log("User Selected Value - ", event.target.value);
    };

    return (
        <>
            <div className="flex flex-col w-full py-10 gap-5 px-3 md:px-10 bg-white rounded-2xl h-[80vh]">
                <div className="header">
                    <span className="bg-yellow-300 px-7 py-1 text-xl rounded-full font-bold">
                        Edith Profile
                    </span>
                </div>
                <div className="flex items-end justify-end">
                    <span className="cursor-pointer font-bold text-sm underline">
                        Verify your emmail address
                    </span>
                </div>

                <div className="main">
                    <form action="" className="flex flex-col gap-7">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Full name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="bg-gray-100 outline-yellow-300 border-none rounded-full px-5 font-bold w-full md:w-[70%] py-3"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Email address
                            </label>
                            <input
                                type="text"
                                placeholder="Johndoe@gmail.com"
                                className="bg-gray-100 border-none rounded-full px-5 font-bold w-full md:w-[70%] py-3 outline-yellow-300"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Phone number
                            </label>
                            <input
                                type="number"
                                placeholder="07039018318"
                                className="bg-gray-100 border-none rounded-full px-5 font-bold w-full md:w-[70%] py-3 outline-yellow-300"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Gender
                            </label>
                            <div className="bg-gray-100 border-none rounded-full px-5 w-full md:w-[70%] font-semibold py-3 outline-yellow-300 flex gap-2 items-center">
                                <BsGenderFemale />
                                <select
                                    onChange={onOptionChangeHandler}
                                    className="bg-transparent outline-none border-none w-full"
                                >
                                    <option>Gender</option>
                                    {options.map((option, index) => {
                                        return (
                                            <option key={index}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EdithProfile;
