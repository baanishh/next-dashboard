import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Page = () => {
  return (
    <section className="p-2 w-full flex flex-col gap-3 ">
      {/* banner */}
      <div className="bg-[#112143] h-[60px] flex items-center justify-between p-4">
        <p className="text-white font-medium text-[22px] ">Add New Banner</p>
        <button className=" text-white text-[13px] font-semibold bg-[#0D99FF] w-[89px] h-[35px] hover:bg-[#091A3A]">
          Save
        </button>
      </div>

      <div className="flex w-full gap-3">
        <div className="bg-[#112143] p-4 flex-1">
          <div className="bg-[#112143] mt-4">
            <label className="block text-white mb-2">
              Title
              <input
                type="text"
                placeholder="Title for banner"
                className="block w-full mt-1 p-2 placeholder-[#9B4CCC] text-white bg-transparent border border-[#0D99FF] text-[13px] pl-4"
              />
            </label>
          </div>

          <div className="bg-[#112143] mt-4">
            <label className="block text-white mb-2">
              Sub Title
              <input
                type="text"
                placeholder="Sub Title for banner"
                className="block w-full mt-1 p-2 placeholder-[#9B4CCC] text-white bg-transparent border border-[#0D99FF] text-[13px] pl-4"
              />
            </label>
          </div>

          <div className="bg-[#112143] mt-4 flex flex-col gap-2">
            <label className="block text-white">Button</label>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Button Name"
                className="block w-full mt-1 p-2 placeholder-[#9B4CCC] text-white bg-transparent border border-[#0D99FF] text-[13px] pl-4"
              />
              <input
                type="text"
                placeholder="Link to"
                className="block w-full mt-1 p-2 placeholder-[#9B4CCC] text-white bg-transparent border border-[#0D99FF] text-[13px] pl-4"
              />
            </div>
          </div>

          <div className="bg-[#112143] mt-4 flex flex-col gap-2">
            <label className="block text-white">Add Media</label>
            <div className="flex gap-3 ">
              <label>
                <input type="file" className="hidden" />
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    fill="#DFDFDF"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M37 21H23C21.8954 21 21 21.8954 21 23V37C21 38.1046 21.8954 39 23 39H37C38.1046 39 39 38.1046 39 37V23C39 21.8954 38.1046 21 37 21Z"
                    stroke="#8B97B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.5 28C27.3284 28 28 27.3284 28 26.5C28 25.6716 27.3284 25 26.5 25C25.6716 25 25 25.6716 25 26.5C25 27.3284 25.6716 28 26.5 28Z"
                    stroke="#8B97B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M39 33L34 28L23 39"
                    stroke="#8B97B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
              <label>
                <input type="file" className="hidden" />
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    fill="#DFDFDF"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M41 25L34 30L41 35V25Z"
                    stroke="#8B97B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32 23H21C19.8954 23 19 23.8954 19 25V35C19 36.1046 19.8954 37 21 37H32C33.1046 37 34 36.1046 34 35V25C34 23.8954 33.1046 23 32 23Z"
                    stroke="#8B97B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
              <div className="flex justify-end items-end w-full">
                <input
                  type="text"
                  placeholder="Video url"
                  className="block w-full mt-1 p-2 placeholder-[#9B4CCC] text-white bg-transparent border border-[#0D99FF] text-[13px] pl-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* checkbox */}
        <div className="flex flex-col  flex-1 h-full">
          <div className="bg-[#091A3A] border border-[#8b97b234] flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 h-full">
              <div className="text-white flex items-center justify-between w-full">
                <div className="flex items-center">
                  <span className="mr-2 w-4 h-4 border border-[#8b97b234] inline-block"></span>
                  <span className="text-[14px]">Name</span>
                </div>
                <p className="text-[14px]">Actions</p>
              </div>
            </div>
          </div>

          <div className="bg-[#112143] border border-[#8b97b234] flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 h-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="text-white flex justify-between pb-2">
                  <div>
                    <span className="mr-2 w-4 h-4 border border-[#8b97b234] inline-block"></span>
                    <span className="text-[14px]">Banner 1</span>
                  </div>
                  <div className="flex gap-2">
                    <AiOutlineDelete size={20} color="#8B97B2" />
                    <FiEdit size={20} color="#8B97B2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
