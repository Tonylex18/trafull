import React from "react";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
type NavigateProps = {
    title: string;
    back: string;
    next: string;
};

const Navigation = (props: NavigateProps) => {
    return (
        <section className="flex justify-between">
            <div className="flex flex-col gap-3">
                <Link
                    href={`/${props.back}`}
                    className="flex gap-2 items-center"
                >
                    <BsChevronLeft />
                    <h2 className="font-semibold text-sm lg:text-lg opacity-50">
                        Back
                    </h2>
                </Link>
                <h1 className="font-semibold text-sm lg:text-2xl">
                    {props.title}
                </h1>
            </div>
            <Link href={`/${props.next}`}>
                <button className="bg-[#FFD700] hover:bg-yellow-300 duration-200 rounded-3xl bg-opacity-50 px-8 py-2">
                    <span className="font-bold text-2xl flex justify-center text-[#000000]"></span>
                    Next
                </button>
            </Link>
        </section>
    );
};

export default Navigation;
