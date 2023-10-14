import React from "react";

function page() {
    return (
        <>
            <div className="flex flex-col w-full pt-10 gap-7 px-4 bg-white rounded-2xl h-[80vh]">
                <div className="header">
                    <span className="bg-yellow-300 px-7 py-1 text-xl rounded-full font-bold">
                        Password
                    </span>
                </div>

                <div className="main">
                    <form action="" className="flex flex-col gap-7">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                Old password
                            </label>
                            <input
                                type="text"
                                placeholder="Johndoe@gmail.com"
                                className="bg-gray-100 border-none rounded-full px-5 font-bold w-full md:w-[80%] py-3 outline-yellow-300"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="" className="font-semibold">
                                New password
                            </label>
                            <input
                                type="text"
                                placeholder="Johndoe@gmail.com"
                                className="bg-gray-100 border-none rounded-full px-5 font-bold w-full md:w-[80%] py-3 outline-yellow-300"
                            />
                        </div>
                        <div>
                            <button className="bg-yellow-300 px-7 py-2 rounded-full font-bold">
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default page;
