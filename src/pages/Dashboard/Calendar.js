import React from "react";

const MyCalendar = () => {
  // Helper function to render the days of the calendar
  const renderCalendar = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <div
          key={i}
          className={`w-10 h-10 flex items-center justify-center ${
            i === 10 ? "bg-green-800 text-white rounded-full" : "text-gray-600"
          }`}
        >
          {i === 10 ? i : "6"}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="p-6">
      <h1 className="font-bold mb-4">Calendar</h1>
      <div className="text-sm text-gray-400 font-bold mb-4">July 2024</div>
      <div className="grid grid-cols-7 gap-2 mt-4">
        {/* Days of the week */}
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <div key={index} className="text-center text-gray-400 text-sm">
            {day}
          </div>
        ))}
        {/* Calendar days */}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default MyCalendar;
