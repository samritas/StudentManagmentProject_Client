import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../Layouts/layout";

const AllQuestions = () => {
  return (
    <Layout>
      <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto px-6 pt-24">
        <h1 className="text-start font-normal text-2xl font-serif py-4">
          All Questions
        </h1>
        <div className="flex justify-around">
          <button class="bg-[#002B16] text-white font-bold py-1 px-2 md:px-8 rounded-full">
            Latest
          </button>
          <button class="bg-[#002B16] text-white font-bold py-1 px-2 md:px-8 rounded-full">
            Answered
          </button>
          <button class="bg-[#002B16] text-white font-bold py-1 px-2 md:px-8 rounded-full">
            Unanswered
          </button>
        </div>
        <div className="w-full xl:w-8/12 lg:w-8/12 md:w-9/12 mx-auto space-y-6 mt-12">
          <a
            href="#"
            class="block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the size of Venus.
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the size of Venus.
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the size of Venus.
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the size of Venus.
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the size of Venus.
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the size of Venus.
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default AllQuestions;
