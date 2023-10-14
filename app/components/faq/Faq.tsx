import { faqDatas } from "@/app/constants/data";
import Link from "next/link";
import React from "react";
import { FaRegGrinSquint } from "react-icons/fa";
 
function Faq() {
  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-[1140px] mx-5 md:m-auto rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
          <div className="flex-auto w-full md:w-40">
            <h2 className="w-full md:max-w-[80%] text-4xl">
              Frequently asked questions?
            </h2>
            <p className="my-5 text-gray-500 w-full md:max-w-[75%]">
              Quick answers to questions you might have? Can’t find answers to
              what you are looking for contact our customer care.
            </p>
          </div>
          <div className="flex-auto w-full md:w-60 ">
            {faqDatas.map((item) => (  
            <div key={item.id} className="flex items-start my-5 gap-5">
              <div>
                <FaRegGrinSquint className="border-2 text-4xl text-gray-400" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-md md:text-2xl font-bold text-gray-600">{item.title}</h5>
                <p className="text-gray-500 text-[12px] md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
            ))}
            
          </div>
        </div>
        <Link href="/faq">
          <button  className="flex m-auto me-2 border px-10 py-2 mt-4 bg-slate-50 rounded-2xl">See more</button>
        </Link> 
      </div>
    </div>
  );
}

export default Faq;
