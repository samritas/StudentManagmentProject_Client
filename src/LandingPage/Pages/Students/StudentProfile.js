import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../Layouts/layout";

const StudentProfile = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto py-4 flex flex-col justify-start items-start px-6 pt-32">
          <div class="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="absolute w-16 h-16 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <form>
            <div className="py-4 text-xl font-bold">
              <label>first Name</label>: John
            </div>
            <div className="py-4 text-xl font-bold">
              <label>Last Name</label>: Doe
            </div>
            <div className="py-4 text-xl font-bold">
              <label>Class</label>: 9
            </div>
            <div className="py-4 text-xl font-bold">
              <label>Section</label>: B
            </div>
          </form>
        </div>
        <div class="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto flex justify-end pr-10 pt-4 md:pt-2">
          <button class="bg-[#002B16] text-white font-bold py-2 px-6 md:px-8 rounded">
            Edit
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default StudentProfile;
