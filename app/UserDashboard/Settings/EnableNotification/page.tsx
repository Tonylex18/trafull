"use client";
import React, { useState } from "react";
import ReactSwitch from "react-switch";

function Page() {
    const [messageNotification, setMessageNotification] = useState(false);
    const [tripNotification, setTripNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);

    const handleMessageToggle = () => {
        setMessageNotification(!messageNotification);
    };
    const handleTripNotification = () => {
        setTripNotification(!tripNotification);
    };
    const handleEmailNotification = () => {
        setEmailNotification(!emailNotification);
    };

    return (
        <>
            <div className="flex flex-col w-full py-10 gap-16 px-3 md:px-10 bg-white rounded-2xl h-[80vh]">
                <div className="header">
                    <span className="bg-yellow-300 px-7 py-1 text-sm md:text-xl rounded-full font-bold">
                        Notification
                    </span>
                </div>

                <div className="main flex flex-col gap-7">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">
                            Enable message notifications
                        </span>
                        <ReactSwitch
                            checked={messageNotification}
                            onChange={handleMessageToggle}
                            height={23}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">
                            Enable trip notifications
                        </span>
                        <ReactSwitch
                            checked={tripNotification}
                            onChange={handleTripNotification}
                            height={23}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">
                            Email notifications
                        </span>
                        <ReactSwitch
                            checked={emailNotification}
                            onChange={handleEmailNotification}
                            height={23}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
