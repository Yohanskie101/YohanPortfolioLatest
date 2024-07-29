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
        <img
          className="w-full h-full"
          src={FirstProjectImg}
          onClick={() => document.getElementById("my_modal_1").showModal()}
        />
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
            2023-2024
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">ITrak</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Projectfirst;
