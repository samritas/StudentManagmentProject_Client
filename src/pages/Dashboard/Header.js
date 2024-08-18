import React from 'react';
import { Search } from '@mui/icons-material'; // Importing only the icon you need

const Header = () => {
  return (
    <div className="flex flex-row mb-6" style={{justifyContent:'space-between'}}>
      {/* Dashboard Title */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Search Bar */}
      <div className="flex items-center ">
        <Search className="mr-2 text-gray-400 border-gray-300 text-sm rounded-md" />
        <input
          type="text"
          placeholder="Enter student name or class ID"
          className="rounded-md text-gray-400 w-6 text-sm "
        />
      </div>
    </div>
  );
};

export default Header;
