import React from 'react';
import ButtonDisabled from './ButtonDisabled';
import ButtonFilled from './ButtonFilled';
import ButtonIcon from './ButtonIcon';
import ButtonOutline from './ButtonOutline';

const index = () => {
  return (
    <>
      <div className="p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Filled buttons
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Predefined button styles
        </p>
        <ButtonFilled />
      </div>
      <div className="p-6 mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Border buttons
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Predefined button styles variant=outline
        </p>
        <ButtonOutline />
      </div>
      <div className="p-6 mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Icon buttons
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Predefined button styles variant=outline
        </p>
        <ButtonIcon />
      </div>
      <div className="p-6 mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Disabled buttons
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Predefined button styles variant=outline
        </p>
        <ButtonDisabled />
      </div>
    </>
  );
};

export default index;
