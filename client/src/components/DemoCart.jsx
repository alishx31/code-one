import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DemoCart = ({ selectedTime, selectedDate }) => {
  // console.log(selectedDate, selectedTime)
  return (
    <>
      <div className="mx-auto w-[800px] shadow-md p-8 ">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-[#33475B] text-xl mb-2">Your Information</h3>
            <div className="flex items-start gap-2">
              <p className="text-md text-[#33475B]">
                {selectedDate.toDateString()} {selectedTime}{" "}
              </p>
              <p className="text-sm text-blue-400">Edit</p>
            </div>
          </div>
        </div>

        <form className="flex mt-3 ">
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-2 mb-4">
              <div className="flex flex-col w-1/2">
                <label
                  for="firstname"
                  className="items-start text-[#33475B] text-xs mb-1"
                >
                  First name *
                </label>
                <input
                  type="text"
                  className="border outline-none border-gray-400 rounded-sm px-2 py-2"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  for="firstname"
                  className="items-start text-[#33475B] text-xs mb-1"
                >
                  Last name *
                </label>
                <input
                  type="text"
                  className="border outline-none border-gray-400 rounded-sm px-2 py-2"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label
                for="firstname"
                className="items-start text-[#33475B] text-xs"
              >
                Your email address *
              </label>
              <input
                type="text"
                className="border outline-none border-gray-400 rounded-sm px-2 py-2"
              />
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center justify-center border border-gray-400 px-4 py-2 rounded-sm">
                <MdKeyboardArrowLeft />
                <button className="text-[#33475B] text-sm px-4">Back</button>
              </div>

              <div className="flex items-center justify-center border border-gray-400 px-4 py-2 rounded-sm">
                <button className="text-[#33475B] text-sm">Confirm</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DemoCart;
