import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "../components/carousel/Slider";
import { ImageSlider } from "../constants/data";
import { BsChevronLeft } from "react-icons/bs";

const JourneyDescMain = () => {
    return (
        <section className="w-full py-10">
            <div className="max-w-[1140px] lg:mx-auto mx-5 mt-16">
                <Link
                    href="/travellerUploadImg"
                    className="flex items-center gap-1 w-fit my-5 font-bold text-gray-400 hover:text-black duration-200"
                >
                    <BsChevronLeft />
                    <h2 className="font-semibold  text-sm lg:text-lg">
                        Back
                    </h2>
                </Link>
                <div className="flex gap-5 md:mx-auto">
                    <h1 className="font-normal md:font-semibold text-lg md:text-xl xl:text-l">
                        Abuja
                    </h1>
                    <span className="font-normal text-lg opacity-50 flex items-end">
                        to
                    </span>
                    <h1 className="font-normal md:font-semibold text-lg md:text-xl xl:text-l">
                        Kaduna
                    </h1>
                </div>
                <div className="relative xl:my-10 mx-auto mt-6">
                  
                    <Slider datas={ImageSlider} />
                </div>
                <div className="mt-8 md:mx-auto">
                    <h1 className="font-medium text-lg md:font-bold md:text-xl">
                        Description
                    </h1>
                    <p className="font-semibold text-gray-400 text-sm md:w-4/5 xl:w-3/5 md:text-lg">
                        Lorem ipsum dolor sit amet consectetur. Ultrices nisl
                        vel tincidunt sed. Aliquet molestie feugiat elementum mi
                        elementum.
                    </p>
                    <div className="font-medium text-gray-400 text-sm md:text-lg">
                        <p>Delivery Date: <span>12-18th of July</span></p>
                    </div>
                    <div className="mt-5">
                        <h1 className="font-normal text-lg md:font-bold md:text-xl">
                            Category
                        </h1>
                        <input
                            type="text"
                            className="outline-none border-none bg-transparent"
                            placeholder="Electronics"
                        />
                    </div>
                    <div className="md:flex justify-between mt-7">
                        <div>
                            <h1 className="font-normal text-lg md:font-bold md:text-xl">
                                Prices
                            </h1>
                            <input
                                type="text"
                                className="outline-none border-none bg-transparent"
                                placeholder="N12000"
                            />
                        </div>

                        <div className="w-full my-5 md:w-1/4 pb-8 xl:w-[15%] xl:ml-auto">
                        <Link href="/PackageCarrier/optionFile">
                            <button className="bg-[#FFD700] hover:bg-yellow-300 font-bold duration-200 w-full  mx-auto px-6 py-4 md:px-4 md:py-2 xl:px-4 xl:py-2 rounded-xl md:rounded-3xl">
                                Connect
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyDescMain;
