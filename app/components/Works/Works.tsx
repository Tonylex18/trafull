"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Works() {
  const slides = [
    {
      content: (
        <div className="mt-10 flex flex-col gap-8">
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>1.</p>
            <p>List available seats in their vehicles</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>2.</p>
            <p>Set their own prices and travel dates</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>3.</p>
            <p>specify their specify routes</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>4.</p>
            <p>Set each pickup and drop-off points from their ETA</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>5.</p>
            <p>Select thier miscellaneous comfort offerings</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>6.</p>
            <p>Post their travel plans</p>
          </span>
        </div>
      ),

      image: "/assets/image1.png",
      title: "How Trafull works for Drivers",
    },
    {
      content: (
        <div className="mt-10 flex flex-col gap-8">
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>1.</p>
            <p>Select Current Location, Travel Date and/or Return date</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>2.</p>
            <p>Browse available rides,</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>3.</p>
            <p>
              Peruse their preferred routes and select intended Pick-up and
              Drop-Off Points
            </p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>4.</p>
            <p>Compare prices and their Miscellaneous Comfort Offering</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>5.</p>
            <p>Book seats based on their preferences.</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>6.</p>
            <p>List available seats in their vehicles</p>
          </span>
        </div>
      ),
      image: "/assets/image1.png",
      title: "How Trafull works for Passengers",
    },
    {
      content: (
        <div className="mt-10 flex flex-col gap-8">
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>1.</p>
            <p>List and describe packages they want to send</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>2.</p>
            <p>
              Include the sending location, destination, weight and category
            </p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>3.</p>
            <p>Set their own prices and Minimum delivery time</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>4.</p>
            <p>Travelers can browse listed packages</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>5.</p>
            <p>Compare prices, weights and location</p>
          </span>
          <span className="flex gap-3 font-medium sm:text-lg">
            <p>6.</p>
            <p>Select a package according to convenience.</p>
          </span>
        </div>
      ),
      image: "/assets/image1.png",
      title: "How Trafull works for Package-Delivery",
    },
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white">
      {slides.map(
        (slide, index) =>
          index === currentIndex && (
            <div
              key={index}
              className="relative md:flex max-w-[1140px] bg-yellow-500 h-auto mx-5 md:m-auto md:my-10 rounded-2xl"
            >
              <div className="w-text flex-auto md:w-2/4 flex flex-col px-5 md:px-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold md:max-w-[550px] pt-10 sm:pt-20">
                  {slide.title}
                </h1>
                <div className="mt-3  md:mt-5 flex flex-col gap-8 pb-5 sm:pb-10">
                  {slide.content}
                </div>
              </div>
              <div className="w-blank flex-auto bg-yellow-300 w-10"></div>
              <div className="w-image flex-auto md:w-5/12">
                <Image
                  src={slide.image}
                  alt="/"
                  width={100}
                  height={100}
                  className="w-full  h-full object-cover rounded-b-2xl md:rounded-r-2xl"
                />
              </div>

              {currentIndex > 0 && (
                <div className="absolute top-[50%] md:top-[82%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-yellow-300 text-black cursor-pointer">
                  <IoIosArrowBack onClick={prevSlide} size={50} />
                </div>
              )}

              {currentIndex < slides.length - 1 && (
                <div className="absolute top-[50%] md:top-[82%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-yellow-300 text-black cursor-pointer">
                  <IoIosArrowForward onClick={nextSlide} size={50} />
                </div>
              )}
            </div>
          )
      )}

      <div className="w-full text-center mt-20">
        <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center">
          <div className="">
            <h1 className="font-bold max-w-[90%] md:max-w-[70%] m-auto capitalize text-2xl md:text-5xl sm:text-4xl  text-grey-700">
              Next-Generation Intercity transportation and Package Delivery At
              Your Service
            </h1>
            <p className="text-slate-500 font-medium py-6 max-w-[90%] md:max-w-[60%] m-auto text-sm sm:text-xl">
              Our platform offers a range of features and services designed to
              enhance the user experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
