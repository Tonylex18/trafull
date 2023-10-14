"use client";
import React, { ChangeEvent, useState } from "react";
import { BsCalendar2Date, BsCarFront, BsFileImage } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
import Navigation from "../../components/Navigation/Navigation";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const Page = () => {
    const [passportImage, setPassportImage] = useState("upload image");
    const [certificateImage, setCertificateImage] = useState("upload image");

    // creating different Variables to store the array of data diplayed in the dropdown
    const options = ["Toyota", "Honda", "lexus", "Golf"];
    const options2 = ["Sedan", "Convertible", "Crossover", "SUV"];
    const options3 = ["Fair", "Strong", "Broken", "Durable"];
    const options4 = ["Yes", "No", "Maybe"];
    const options5 = ["Yes", "No", "Maybe"];

    const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log("User Selected Value - ", event.target.value);
    };

    // function handle for uploading of driver passport
    const handlePassportImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            setPassportImage(file.name);
        } else {
            setPassportImage("upload image");
        }
    };

    // function handle for uploading of driver certificate
    const handleCertificateImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            setCertificateImage(file.name);
        } else {
            setCertificateImage("upload image");
        }
    };

    return (
        <div className="w-full">
            <div className="max-w-[1140px] md:mx-auto mx-5 pt-32">
                <Navigation
                    title="Driver"
                    back="./driverPage/DriverPage"
                    next="./driverPage/addImage"
                />
                <div className="py-8 shadow-lg mt-14 mb-32 border border-gray-100 rounded-2xl border-xl">
                    <div className="font-semibold bg-[#CCCCCC] my-10 px-2 md:px-5 py-2 bg-opacity-20 text-2xl">
                        Vehicle information
                    </div>
                    <form action="">
                        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:p-6 gap-6 lg:gap-x-14">
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Car type
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <BsCarFront />
                                        <select
                                            onChange={onOptionChangeHandler}
                                            className="bg-transparent outline-none border-none w-full font-semibold"
                                        >
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
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Body type
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <BsCarFront />
                                        <select
                                            onChange={onOptionChangeHandler}
                                            className="bg-transparent outline-none border-none w-full font-semibold"
                                        >
                                            {options2.map((option, index) => {
                                                return (
                                                    <option key={index}>
                                                        {option}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:p-6 gap-6 lg:gap-x-14">
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Model
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <BsCarFront />
                                        <input
                                            type="text"
                                            placeholder="2012"
                                            className="w-full bg-transparent border-none outline-none font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Manufacturing year
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <BsCalendar2Date />
                                        <input
                                            type="text"
                                            placeholder="2012"
                                            className="w-full bg-transparent border-none outline-none font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Plate No
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <AiOutlineFieldNumber />
                                        <input
                                            type="text"
                                            placeholder="2012"
                                            className="w-full bg-transparent border-none outline-none font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Color
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <BsCarFront />
                                        <input
                                            type="text"
                                            placeholder="2012"
                                            className="w-full bg-transparent border-none outline-none font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:p-6 gap-6 lg:gap-x-14">
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Vehicle condition
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <FaEquals />
                                        <select
                                            onChange={onOptionChangeHandler}
                                            className="bg-transparent outline-none border-none w-full font-semibold"
                                        >
                                            {options3.map((option, index) => {
                                                return (
                                                    <option key={index}>
                                                        {option}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Do you have certificate of road worthiness?
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <TbCertificate />
                                        <select
                                            onChange={onOptionChangeHandler}
                                            className="bg-transparent outline-none border-none w-full font-semibold"
                                        >
                                            {options4.map((option, index) => {
                                                return (
                                                    <option key={index}>
                                                        {option}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm md:text-base mb-3">
                                    Are your vehicle papers up-to-date?
                                </label>
                                <div className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300">
                                    <div className="flex gap-3 items-center w-full">
                                        <TbCertificate />
                                        <select
                                            onChange={onOptionChangeHandler}
                                            className="bg-transparent outline-none border-none w-full font-semibold"
                                        >
                                            {options5.map((option, index) => {
                                                return (
                                                    <option key={index}>
                                                        {option}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Uploading of reconmended document script */}
                    <div className="font-semibold bg-[#CCCCCC] my-10 px-2 md:px-5 py-2 bg-opacity-20 text-2xl">
                        Upload documents
                    </div>
                    <div className="w-11/12 flex flex-col md:flex-row justify-between items-center gap-10 mx-auto">
                        <div className="w-full">
                            <span className="font-bold text-lg">Passport</span>
                            <div className="flex gap-2">
                                <MdErrorOutline />
                                <span className="text-xs opacity-50 mb-3">
                                    Image size should not be less than 5MB
                                </span>
                            </div>
                            <label
                                htmlFor="file-input"
                                className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300"
                            >
                                <BsFileImage />
                                {passportImage}
                            </label>
                            <input
                                type="file"
                                hidden
                                id="file-input"
                                className="w-full cursor-pointer"
                                onChange={handlePassportImageChange}
                            />
                        </div>
                        <div className="w-full">
                            <span className="font-bold text-lg mb-6">
                                Certificate of road worthiness
                            </span>

                            <label
                                htmlFor="cert-input"
                                className="bg-gray-100 border border-transparent rounded-full px-5 w-full font-semibold py-3 outline-none flex gap-2 items-center hover:border-yellow-300 mt-6"
                            >
                                <BsFileImage />
                                {certificateImage}
                            </label>
                            <input
                                type="file"
                                hidden
                                id="cert-input"
                                className="w-full cursor-pointer"
                                onChange={handleCertificateImageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
