import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaRegGrinSquint } from "react-icons/fa";
import { faqData2, faqDatas } from "../constants/data";

function page() {
  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] md:mx-auto mx-5 mt-20">
        <div className="md:flex justify-between items-start">
          <div className="flex-auto w-full md:w-40">
            <h2 className="text-xl sm:text-3xl md:text-5xl md:max-w-[50%]">
              Frequently ask question?
            </h2>
            <p className="mt-7 md:max-w-[50%] text-gray-400">
              Quick answers to questions you might have? Can’t find answers to
              what you are looking for contact our customer care.
            </p>
          </div>
          <div>
            <button className="flex items-center gap-5 border rounded-3xl px-7 py-1 font-bold mt-7 md:mt-0">
              Customer support
              <BsArrowUpRight />
            </button>
          </div>
        </div>

        <div className="md:flex justify-between mt-20">
          <div className="flex-auto w-full md:w-50">
            <div className="flex flex-col gap-6">
              {faqDatas.map((item) => (
                <div key={item.id} className="flex items-start gap-5">
                  <div>
                    <FaRegGrinSquint className="border-2 text-4xl text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-2xl font-bold text-gray-600">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 text-[12px] md:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-auto w-full md:w-50">
            <div className="flex flex-col gap-6">
              {faqData2.map((item) => (
                <div key={item.id} className="flex items-start gap-5">
                  <div>
                    <FaRegGrinSquint className="border-2 text-4xl text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-2xl font-bold text-gray-600">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 text-[12px] md:text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
