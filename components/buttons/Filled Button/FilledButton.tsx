import React from 'react';

const FilledButton = () => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-red-100 rounded-4xl border-red-200 border-1 w-242 hover:opacity-90 focus:ring-4 focus:ring-red-100 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Register
      </button>
    </div>
  );
};

export default FilledButton;
