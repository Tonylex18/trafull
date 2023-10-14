import { values } from "@/app/constants/data";
import Link from "next/link";
import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

function Value() {
  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] mx-5 md:m-auto rounded-2xl p-6 bg-yellow-300">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-10 px-5">
          <div className="flex-auto w-full  md:w-80 scroll-bar no-scrollbar no-scrollbar::-webkit-scrollbar">
            {values.map((item) => (
              <div key={item.id} className="flex my-5 gap-5 items-start">
                <BsFillCircleFill className="border-2 rounded-full" />
                <div className="flex flex-col gap-2">
                  <h5 className="text-xl font-semibold">{item.title}</h5>
                  <p className="md:max-w-[80%]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-auto w-full md:w-32">
            <h3 className="text-2xl md:text-4xl max-w-[80%]">
              Our value at trafull, we put you first{" "}
            </h3>
            <p className="my-4">
              Trafull’s aim is to simply make travelling easier and to help
              travelers travel faster, economically and coordinately. Our
              visions at Trafull are numerous, our ambitions are
              intercontinental;
            </p>

            <Link href="/signin">
              <button className="bg-white px-6 py-4 rounded-3xl hover:bg-slate-100 ease-in duration-300">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
