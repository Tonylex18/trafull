"use client";
import React, { ReactElement } from "react";
interface UserNavProps {
    Icon?: React.ComponentType<any>;
    title: String;
}

function UserNav({ Icon, title }: UserNavProps): ReactElement {
    return (
        <>
            <div className="flex items-center cursor-pointer pl-10 py-3 gap-5 hover:bg-yellow-200 duration-200 w-full border-b-2 font-bold">
                {Icon && <Icon className="UsernavIcon" size={20} />}
                <span className="">{title}</span>
            </div>
        </>
    );
}

export default UserNav;
