import { Fragment } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function UserDetails() {
  return (
    <Fragment>
      <>
        <div className="bg-white w-[90%] md:w-[550px] py-10 px-9 rounded-[36px]">
          <div className="modalHeader flex justify-between items-center">
            <span className="font-bold text-xl md:text-3xl">User details</span>
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-sm md:text-lg underline cursor-pointer">
                message
              </p>
              <Link href="./../TripInformation">
                <span className="bg-yellow-400 px-3 md:px-6 text-sm py-1 md:py-3 rounded-full cursor-pointer font-semibold">
                  Connect
                </span>
              </Link>
            </div>
          </div>

          <div className="profile my-7 flex items-center gap-5">
            <Image
              src="/assets/profile2.png"
              alt=""
              width={70}
              height={70}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg">Ayo tolani</span>
              <span className="text-gray-400 text-sm">ID: QWOE0W</span>
            </div>
          </div>

          <div className="content mt-5">
            <div className="content-text">
              <div className="flex flex-col items-start gap-3">
                <div>
                  <h5 className="text-[16px]">Travel date</h5>
                  <p className="text-[12px] text-gray-400">01/08/23</p>
                </div>
                <div className="">
                  <h5 className="text-[16px]">Luggage size</h5>
                  <p className="text-[12px] text-gray-400">Medium</p>
                </div>
                <div className="">
                  <h5 className="text-[16px]">Number of kids</h5>
                  <p className="text-[12px] text-gray-400">2</p>
                </div>
                <div className="">
                  <h5 className="text-[16px]">Ride class</h5>
                  <p className="text-[12px] text-gray-400">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
}

export default UserDetails;
