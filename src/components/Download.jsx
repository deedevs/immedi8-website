import React from "react";
import mobile from "../assets/newHeroImg.png";
import iOS from "../assets/appleIcon.svg";
import android from "../assets/googleIcon.svg";
import newImg from "../assets/mobile-view.png";

export const Download = () => {
  return (
    <div className="bg-[#0782BD] text-white 2xl:px-52 xl:px-24 md:px-14 px-5 pt-10 pb-24">
      <div className="lg:flex align-middle gap-12">
        <div className="lg:w-1/2 my-auto">
          <div>
            <div className="mt-2 md:mt-10 ">
              {/* <div className="h-full w-1/3 flex align-middle justify-stretch"> */}
              {/* <h4 className="text-white text-lg w-1/3 md:text-2xl mt-2">
                Get Start
              </h4> */}
              {/* </div> */}
              <p className="py-10 text-xl text-center md:text-left text-[#080145]">
                You can access our App using any of this devices.
              </p>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum enim labore porro, vitae eligendi repellat nihil
                necessitatibus fugit ipsam amet optio sint mollitia non
                accusamus excepturi. Eius voluptate laboriosam maxime. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Ad, autem!
                Voluptas et aperiam odio quisquam ex laboriosam magnam animi, ea
                maiores possimus error! Deserunt odio iste inventore cupiditate
                quasi quos.
              </p>
              <h3 className="text-2xl lg:text-5xl text-center md:text-left font-bold text-[#080145] mb-4">
                Get Started Now
              </h3>
              {/* <form action="#" className="w-full 2xl:w-2/3 mx-auto lg:mx-0">
                <div className="w-full flex align-middle">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="p-2 md:px-4 md:py-3 rounded-l-3xl  outline-none border border-blue-950 flex-1 w-[90%] lg:w-full"
                  />
                  <button
                    type="submit"
                    className="bg-blue-950 text-white p-2 md:px-3 md:py-3 rounded-r-3xl text-lg outline-none border-none"
                  >
                    Get Started
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto">
          <img
            src={newImg}
            alt=""
            srcSet=""
            className="w-full h-[550px] object-contain"
          />
          <div className="flex items-center space-x-6 w-1/2 lg:w-full mx-auto py-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.immedi8moneymt"
              target="_blank"
              onClick={() =>
                handleEvent({
                  category: "playstore",
                  action: "User clicked playstore download button",
                })
              }
              className="block w-full"
            >
              <img
                src={android}
                alt="Download Button"
                className="w-[185px] md:w-[140px] lg:w-[250px] mx-auto"
              />
            </a>
            {/* </div> */}
            {/* <div className="md:ml-8 w-[200px] mx-auto md:mx-0"> */}
            <a
              href="https://apps.apple.com/us/app/imoney-money-transfer/id6446627721"
              target="_blank"
              className="block w-full"
            >
              <img
                src={iOS}
                alt="Download Button"
                className="w-[225px] md:w-[170px] lg:w-[280px] mx-auto"
              />
            </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
