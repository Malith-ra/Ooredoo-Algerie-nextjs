import React from 'react';
import ButtonsFilled from './ButtonsFilled';

const index = () => {
  return (
    <div className="p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Filled buttons
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Predefined button styles
      </p>
      <ButtonsFilled />
    </div>
  );
};

export default index;
