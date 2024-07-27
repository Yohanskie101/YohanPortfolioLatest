import React from "react";
import FirstProjectImg from "../assets/pj4-img.png";

function Projectfirst() {
  return (
    <>
      <div className="heading-project text-base xl:text-4xl lg:text-3xl sm:text-2xl leading-relaxed">
        ITrak
      </div>

      <div className="flex justify-between mb-5">
        <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl lg:text-2xl  ">
          Tracking Management System
        </div>
        <div className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
          Read the full details
        </div>
      </div>

      <div className="Project-img-cont w-full mb-5 h-1/2">
        <img className="w-full h-full" src={FirstProjectImg} />
      </div>

      <div className="relative">
        <div className="flex justify-around ">
          <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            Role
          </div>
          <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            Years
          </div>
        </div>

        <div className="flex justify-around">
          <div className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            Lead Programmer
          </div>
          <div className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            2022-2024
          </div>
        </div>
      </div>
    </>
  );
}

export default Projectfirst;
