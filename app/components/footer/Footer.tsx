import React from "react";

function Footer() {
  return (
    <div className="w-full bg-yellow-300 pt-4">
      <div className="max-w-[1140px] mx-5 lg:m-auto pt-20">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-start">
          <div className="flex-auto w-full md:w-32 mb-20 lg:mb-0">
            <h1 className="text-5xl font-bold cursor-pointer">Trafull</h1>
          </div>
          <div className="flex-auto w-full lg:w-7/12">
            <div className="grid md:grid-cols-3 gap-5">
                <div>
                    <h2 className="mb-3 text-2xl font-medium">Get Started</h2>
                    <div className="flex flex-col gap-2">
                        <span className="cursor-pointer w-fit text-lg font-medium">Partner with us</span>
                        <span className="cursor-pointer w-fit text-lg font-medium">Actualizing SDG</span>
                    </div>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-medium">About Us</h2>
                    <div className="flex flex-col gap-2">
                        <span className="cursor-pointer w-fit text-lg font-medium">Meet the Team</span>
                        <span className="cursor-pointer w-fit text-lg font-medium">Privacy Policy</span>
                        <span className="cursor-pointer w-fit text-lg font-medium">Terms and Condition</span>
                    </div>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-medium">Community</h2>
                    <div className="flex flex-col gap-2">
                        <span className="cursor-pointer w-fit text-lg font-medium">Upcoming Events</span>
                        <span className="cursor-pointer w-fit text-lg font-medium">Join our Virtual Community</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <span className="flex justify-center items-center mx-auto text-xl tracking-widest font-semibold mt-20 pb-10">© COPYRIGHT - trafull 2023</span>
      </div>
    </div>
  );
}

export default Footer;
