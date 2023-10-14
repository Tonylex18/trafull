"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

const Page = () => {
    const [images, setImages] = useState<Array<string | null>>([
        null,
        null,
        null,
        null,
        null,
    ]);

    const handleImageChange = (
        event: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = reader.result as string;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full">
            <div className="max-w-[1140px] md:mx-auto mx-5 pt-32">
                <div className="w-full mx-auto">
                    <div className="header flex gap-1 items-center font-bold text-lg cursor-pointer w-fit">
                        <Link
                            href="./vehicleInfo"
                            className="flex items-center gap-2 w-fit"
                        >
                            <BsChevronLeft />
                            <span>Back</span>
                        </Link>
                    </div>
                    <div className="mt-5 flex flex-col gap-6">
                        <span className="text-3xl font-bold">Add image</span>
                        <p className="text-sm font-light lg:w-[30%] opacity-50">
                            Add a minimum of 3 images, Your first image will be
                            used as your cover.
                        </p>
                    </div>
                </div>
                {/* CAR CONTAINER */}
                <div className="relative h-64 lg:h-96 mt-10 mx-auto">
                    <div className="h-full w-full bg-gray-100 rounded-2xl border border-gray-100">
                        {images[0] ? (
                            <Image
                                src={images[0]}
                                alt="Front view"
                                fill
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        ) : (
                            <label
                                htmlFor="image1-input"
                                className="flex items-center justify-center h-full m-auto"
                            >
                                <IoMdAddCircleOutline size={30} />
                                <input
                                    type="file"
                                    hidden
                                    id="image1-input"
                                    onChange={(e) => handleImageChange(e, 0)}
                                />
                            </label>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-10">
                    <div className="">
                        <div className="bg-[#F4F4F7] rounded-2xl h-32">
                            {images[1] ? (
                                <Image
                                    src={images[1]}
                                    alt="Front view"
                                    width={90}
                                    height={70}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <label
                                    htmlFor="image1-input"
                                    className="flex items-center justify-center h-full m-auto"
                                >
                                    <IoMdAddCircleOutline size={30} />
                                    <input
                                        type="file"
                                        hidden
                                        id="image1-input"
                                        onChange={(e) =>
                                            handleImageChange(e, 1)
                                        }
                                    />
                                </label>
                            )}
                        </div>
                        <h2 className="font-semibold text-lg pt-4 pl-2">
                            Front view
                        </h2>
                    </div>

                    <div className="">
                        <div className="bg-[#F4F4F7] rounded-2xl h-32">
                            {images[2] ? (
                                <Image
                                    src={images[2]}
                                    alt="Front view"
                                    width={90}
                                    height={70}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <label
                                    htmlFor="image2-input"
                                    className="flex items-center justify-center h-full m-auto"
                                >
                                    <IoMdAddCircleOutline size={30} />
                                    <input
                                        type="file"
                                        hidden
                                        id="image2-input"
                                        onChange={(e) =>
                                            handleImageChange(e, 2)
                                        }
                                    />
                                </label>
                            )}
                        </div>
                        <h2 className="font-semibold text-lg pt-4 pl-2">
                            Back view
                        </h2>
                    </div>
                    <div className="">
                        <div className="bg-[#F4F4F7] rounded-2xl h-32">
                            {images[3] ? (
                                <Image
                                    src={images[3]}
                                    alt="Front view"
                                    width={90}
                                    height={70}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <label
                                    htmlFor="image3-input"
                                    className="flex items-center justify-center h-full m-auto"
                                >
                                    <IoMdAddCircleOutline size={30} />
                                    <input
                                        type="file"
                                        hidden
                                        id="image3-input"
                                        onChange={(e) =>
                                            handleImageChange(e, 3)
                                        }
                                    />
                                </label>
                            )}
                        </div>
                        <h2 className="font-semibold text-lg pt-4 pl-2">
                            interior
                        </h2>
                    </div>
                    <div className="">
                        <div className="bg-[#F4F4F7] rounded-2xl h-32">
                            {images[4] ? (
                                <Image
                                    src={images[4]}
                                    alt="Front view"
                                    width={90}
                                    height={70}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <label
                                    htmlFor="image4-input"
                                    className="flex items-center justify-center h-full m-auto"
                                >
                                    <IoMdAddCircleOutline size={30} />
                                    <input
                                        type="file"
                                        hidden
                                        id="image4-input"
                                        onChange={(e) =>
                                            handleImageChange(e, 4)
                                        }
                                    />
                                </label>
                            )}
                        </div>
                        <h2 className="font-semibold text-lg pt-4 pl-2">
                            interior
                        </h2>
                    </div>
                </div>
                <div className="mx-auto flex my-5 justify-end">
                    <Link href="./DriverImageUpload">
                        <button className="bg-[#FFD700] hover:bg-yellow-400 duration-200 font-bold w-48 px-6 bg-opacity-50 py-2 rounded-3xl">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
