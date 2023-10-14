import React from "react";

function Notification() {
    return (
        <>
            <div className="flex flex-col w-full py-10 gap-16 px-4 bg-white rounded-2xl h-[80vh]">
                <div className="header">
                    <h2>Notification</h2>
                </div>
                <div className="main flex flex-col gap-7 overflow-y-scroll no-scrollbar">
                    <div className="flex justify-between items-center">
                        <p className="truncate w-[500px] font-medium cursor-pointer">
                            From{" "}
                            <span className="font-bold">Minna to Oshogbo</span>{" "}
                            - Pick any of these packages and make money on your
                            trip
                        </p>
                        <button className="bg-yellow-300 hover:bg-yellow-200 duration-200 font-semibold px-10 py-1 rounded-full">
                            Connect
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="truncate w-[500px] font-medium cursor-pointer">
                            Benz E-class Driver chidinma is travelling from -
                            <span className="font-bold"> Ibadan to Lagos</span>{" "}
                        </p>
                        <button className="bg-yellow-300 hover:bg-yellow-200 duration-200 font-semibold px-10 py-1 rounded-full">
                            Connect
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="truncate w-[500px] font-medium cursor-pointer">
                            From{" "}
                            <span className="font-bold">Minna to Oshogbo</span>{" "}
                            - Pick any of these packages and make money on your
                            trip
                        </p>
                        <button className="bg-yellow-300 hover:bg-yellow-200 duration-200 font-semibold px-10 py-1 rounded-full">
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
