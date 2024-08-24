import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../Layouts/layout";

const StudentResultDetailPage = () => {
  return (
    <Layout>
      <div className="w-full bg-[#F7FAF9]">
        <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto py-14 flex flex-col justify-start items-start px-6 pt-24">
          <h1 className="text-center font-normal text-2xl font-serif py-4">
            Subject Name
          </h1>
          <table className="mb-10 w-full">
            <thead>
              <tr className="bg-gray-200 p-1 py-4">
                <td className="font-bold">Evaluation Type</td>
                <td className="font-bold">Evaluation Total</td>
                <td className="font-bold">Evaluation Result</td>
              </tr>
            </thead>

            <tbody>
              <tr className="h-10">
                <td>Test 1</td>
                <td>21</td>
                <td>18</td>
              </tr>
              <tr className="h-10">
                <td>Worksheet 1</td>
                <td>5</td>
                <td>12</td>
              </tr>
              <tr className="h-10">
                <td>Test 2</td>
                <td>31</td>
                <td>28</td>
              </tr>
              <tr className="h-10">
                <td>Worksheet 2</td>
                <td>7</td>
                <td>2</td>
              </tr>
              <tr className="h-10">
                <td>Test 3</td>
                <td>21</td>
                <td>18</td>
              </tr>
              <tr className="h-10">
                <td>Worksheet 3</td>
                <td>5</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto flex justify-end space-x-4 pr-4 pt-4 md:pt-12">
        <label className="flex">Change Quarter</label>
        <select className="rounded-md border-0 py-1.5 px-7  ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  bg-gray-200 text-black opacity-50 border-gray-900">
          <option value="DEFAULT">Quarter One</option>
          <option value="DEFAULT">One half</option>
          <option value="DEFAULT">One Third</option>
        </select>
      </div>
      <div class="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto flex justify-center py-10">
        <div>
          <div className="bg-gray-200 flex p-4 space-x-4">
            <input className="p-2" />
            <button class="bg-[#002B16] text-white font-bold py-1 px-2 md:px-8 rounded">
              ASK
            </button>
          </div>
          <div className="py-4">
            <button> Previous Questions</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default StudentResultDetailPage;
