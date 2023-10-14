"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

function Page() {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("No selected file");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFileName(files[0].name);
            setImage(URL.createObjectURL(files[0]));
        }
    };

    return (
        <div className="w-full py-10">
            <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
                <div className="flex gap-2 items-center cursor-pointer w-fit">
                    <Link href="/postPackage" className="flex items-center">
                        <IoIosArrowBack size={25} />
                        <span className="text-gray-400">Back</span>
                    </Link>
                </div>

                <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7 mt-10 rounded-2xl border border-gray-200">
                    <div className="heading flex flex-col items-center justify-center gap-5">
                        <h2 className="text-2xl md:text-3xl text-center">
                            International passport
                        </h2>
                        <span className="text-center text-[12px] w-full md:w-[55%] text-gray-400">
                            Lorem ipsum dolor sit amet consectetur. Donec eu leo
                            cursus neque rhoncus scelerisque{" "}
                        </span>
                    </div>

                    {image ? (
                        <>
                            <form className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] h-[200px] rounded-3xl my-5 cursor-pointer border-0">
                                <label
                                    htmlFor="file-input"
                                    className="w-full h-full flex flex-col items-center justify-center mt-10 "
                                >
                                    <Image
                                        src={image}
                                        className="object-cover w-[500px] h-[180px]"
                                        width={300}
                                        height={200}
                                        alt={fileName}
                                    />
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="file-input"
                                    className="input-field cursor-pointer"
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </form>
                            <div className="removeOnUpload flex items-center justify-center mt-16">
                                <button className="bg-yellow-400 px-16 py-2 rounded-full text-gray-400 font-semibold">
                                    Proceed
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="removeOnUpload flex items-center justify-center my-6">
                                <span className="text-center font-semibold">
                                    Upload image
                                </span>
                            </div>
                            <form className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] h-[200px] rounded-3xl my-5 cursor-pointer border-dashed border-gray-200 border-2">
                                <label
                                    htmlFor="file-input"
                                    className="w-full h-full flex flex-col items-center justify-center"
                                >
                                    <BsFillFolderFill
                                        color="#1475cg"
                                        className="mt-6"
                                        size={50}
                                    />
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="file-input"
                                    className="input-field cursor-pointer"
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </form>
                            <span className="removeOnUpload flex items-center justify-center text-gray-300 font-bold">
                                Drag and drop image here
                            </span>
                            <div className="removeOnUpload flex items-center justify-center mt-7">
                                <button className="bg-yellow-400 px-16 py-2 rounded-full text-gray-400 font-semibold">
                                    Proceed
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page;
