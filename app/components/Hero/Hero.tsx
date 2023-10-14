import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="">
      <Image
        src="/assets/heroImage.png"
        alt="/"
        width={1040}
        height={720}
        className="w-full hero object-cover"
      />

      <div className="w-full text-center mt-12">
        <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center">
          <div className="">
            <h1 className="font-bold max-w-[90%] md:max-w-[70%] m-auto text-2xl md:text-5xl sm:text-4xl  text-grey-700">
              Peer-to-Peer Intercity Transportation and Package Delivery
            </h1>
            <p className="text-slate-500 font-medium py-6 max-w-[90%] md:max-w-[60%] m-auto text-sm sm:text-xl">
              Trafull is a platform that matches travellers with traveling car owners and connects package-senders
              with a network of verified travellers at an affordable rate.
            </p>

            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf-A60d5Zw6zQrFHI-syHsp5jWS8TsTcVCJfBwtKjOLkDhg-A/viewform?usp=pp_url">
              <button className="mb-6 bg-yellow-400 py-4 px-6 font-bold rounded-full text-sm">
                Join Waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
