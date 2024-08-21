import React from "react";

const StudentPerformanceGraph = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Performance graph</h1>
      <div className="flex space-x-4 mb-6">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Grade
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="10"
          >
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Section
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="B"
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
      
      <div style={{alignItems:"end",paddingLeft:"90px"}} className="flex flex-row gap-4" >
        
        <div className="flex flex-col items-center" >
          <div className="bg-gray-400 h-24 w-4 rounded-lg" ></div>
          <span className=" text-sm text-gray-600">Maths</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 h-32 w-4 rounded-lg"></div>
          <span className="mt-2 text-sm text-gray-600">Eng</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 h-16 w-4 rounded-lg"></div>
          <span className="mt-2 text-sm text-gray-600">Eng</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-green-800 h-40 w-4 rounded-lg"></div>
          <span className="mt-2 text-sm text-gray-600">Eng</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 h-24 w-4 rounded-lg"></div>
          <span className="mt-2 text-sm text-gray-600">Eng</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 h-32 w-4 rounded-lg"></div>
          <span className="mt-2 text-sm text-gray-600">Eng</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 h-24 w-4 rounded-lg"></div>
          <span className="mt-2 text-sm text-gray-600">Eng</span>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformanceGraph;
