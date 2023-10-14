import Image from "next/image";
import React from "react";

function popupModal() {

  return (
    <div className="bg-white w-[90%] md:w-[450px] py-10 px-9 rounded-[36px]">
      <div className="header flex items-center justify-between">
        <h6>Driver&apos;s info</h6>
        <h6>X</h6>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/assets/profile2.png"
          width={40}
          height={40}
          alt="/"
          className="rounded-full object-contain"
        />
        <div>
          <h4 className="md:text-sm">Adeyanju</h4>
          <p className="text-gray-400 text-sm">ID: QWOE0W</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-start gap-3">
        <div>
          <h6 className="text-lg">Full name</h6>
          <p className="text-gray-400 text-sm">Ayo tolani</p>
        </div>
        <div>
          <h6 className="text-lg">Email address</h6>
          <p className="text-gray-400 text-sm">Ayotolani2345@gmail.com</p>
        </div>
        <div>
          <h6 className="text-lg">Phone number</h6>
          <p className="text-gray-400 text-sm">090345867292</p>
        </div>
      </div>
    </div>
  );
}

export default popupModal;
