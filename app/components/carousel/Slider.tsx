"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
type slideProp = {
  datas: any;
};

const Slider = ({ datas }: slideProp) => {
  const [slide, setSlide] = useState<number>(0);
  const nextSlide = () => {
    setSlide(slide === datas.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? datas.length - 1 : slide - 1);
  };
  return (
    <div className="flex">
      {datas.map((data: any, id: number) => {
        return (
          <>
            <BsArrowLeftCircleFill
              className="absolute text-white cursor-pointer w-8 h-8 left-8 top-1/2"
              onClick={prevSlide}
            />
            <Image
              src={data.img}
              alt={data.alt}
              className={`w-full h-72 object-cover rounded-3xl ${
                slide === id ? "block" : "hidden"
              }`}
              key={id}
              width={200}
              height={200}
            />
            <BsArrowRightCircleFill
              className="absolute text-white w-8 h-8 right-8 top-1/2 cursor-pointer"
              onClick={nextSlide}
            />
            <span className="absolute bottom-5 w-full">
              <span className="flex gap-4 justify-center">
                {datas.map((_: any, id: number) => {
                  return (
                    <button
                      key={id}
                      className={`${
                        slide === id ? "bg-[#FFD700]" : "bg-white"
                      } w-3 h-3 cursor-pointer rounded-full`}
                      onClick={() => {
                        setSlide(id);
                      }}
                    ></button>
                  );
                })}
              </span>
            </span>
          </>
        );
      })}
    </div>
  );
};

export default Slider;
