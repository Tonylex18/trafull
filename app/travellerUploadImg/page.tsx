"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { BsChevronLeft, BsPlusCircle } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";

const PackageSenderMain = () => {
    // const [fileName, setFileName] = useState<string>("No selected file");
    const options3 = ["Electronic", "Home appliances", "Wood"];
    const [images, setImages] = useState<Array<string | null>>([
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

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = event.target.files;
    //     if (files && files.length > 0) {
    //         setFileName(files[0].name);
    //         setImage(URL.createObjectURL(files[0]));
    //     }
    // };

    const onOptionChangeHandler = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        console.log("User Selected Value - ", event.target.value);
    };

    return (
        <div className="w-full py-10">
            <section className="max-w-[1140px] lg:mx-auto mx-5 mt-16">
                <Link
                    href="/postPackage"
                    className="flex gap-1 items-center md:mx-auto"
                >
                    <BsChevronLeft />
                    <h2 className="font-bold text-sm lg:text-lg opacity-50">
                        Back
                    </h2>
                </Link>
                <div className="flex flex-col md:flex-row justify-between mt-4 md:items-center md:mx-auto">
                    <div className="">
                        <h1 className="font-normal md:font-semibold text-lg md:text-3xl xl:text-l">
                            Add image
                        </h1>
                        <p className="font-normal text-sm md:text-lg opacity-50 md:w-3/4">
                            Add a minimum of 3 images, Your first image will be
                            used as your cover.
                        </p>
                    </div>
                    <div className="flex gap-8 items-center justify-between">
                        <div className="w-full font-semibold py-5 outline-none flex gap-2 items-center">
                            <select
                                onChange={onOptionChangeHandler}
                                className="bg-transparent outline-none border-none w-32"
                            >
                                {options3.map((option, index) => {
                                    return (
                                        <option key={index}>{option}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto mt-14 h-full">
                    <div className="relative w-full flex flex-col mx-auto justify-center self-center  h-80 ">
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
                                    <span className="text-center font-normal md:font-semibold text-lg xl:text-xl 2xl-texl flex flex-col items-center">
                                        <IoMdAddCircleOutline size={30} />
                                        <p>Front view</p>
                                    </span>
                                    <input
                                        type="file"
                                        hidden
                                        id="image1-input"
                                        onChange={(e) =>
                                            handleImageChange(e, 0)
                                        }
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                    {/* UPLOADING FRONT VIEW */}
                    <div className="flex flex-col md:flex-row gap-8 mt-7">
                        <div className="row-span-1 w-full h-3/4 md:h-1/2 ">
                            <div className="bg-[#F4F4F7] rounded-2xl  h-48 xl:h-64">
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
                            <p className="font-normal md:font-semibold text-lg xl:text-xl 2xl-texl mt-5">
                                Front view
                            </p>
                        </div>
                        {/* UPLOADING BACK VIEW */}
                        <div className="row-span-1 w-full h-3/4 md:h-1/2">
                            <div className="bg-[#F4F4F7] rounded-2xl h-48 xl:h-64">
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

                            <p className="font-normal md:font-semibold text-lg xl:text-xl mt-5">
                                Back view
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto mt-8 md:mt-20 mb-10">
                    <label className="font-semibold text-xl">Description</label>
                    <div className="flex flex-col md:flex-row md:w-full md:mx-auto mt-8">
                        <div className="w-full md:w-3/4 h-48 py-4 md:py-0">
                            <textarea
                                className="bg-[#F4F4F7] p-5 w-full h-full md:w-3/4  block rounded-xl outline-none
            border-none font-medium text-lg resize-none"
                                placeholder=" Add a package description..."
                                rows={4}
                                cols={10}
                            ></textarea>
                        </div>
                        <div className="w-full mt-7 md:w-1/4 pb-8 xl:w-[15%] xl:ml-auto">
                            <Link href="/journeyDesc">
                                <button className="bg-yellow-400 hover:bg-yellow-300 duration-200 w-full cursor-pointer  mx-auto px-6 py-4 md:px-4 md:py-2 xl:px-4 xl:py-2 font-bold rounded-xl md:rounded-3xl">
                                    NEXT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PackageSenderMain;
