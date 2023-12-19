import React from 'react';

const Filtering = ({ industries, onFilterChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="filterDropdown" className="text-gray-600">Filter by:</label>
      <select
        id="filterDropdown"
        onChange={(e) => onFilterChange(e.target.value)}
        className="border border-gray-300 p-1 rounded-md focus:outline-none focus:border-indigo-500"
      >
        <option value="">Industries,Name</option>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtering;
