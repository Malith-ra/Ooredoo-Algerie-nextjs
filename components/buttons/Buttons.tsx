import React from 'react';
import FilledButton from './Filled Button/FilledButton';

const Buttons = () => {
  return (
    <>
      <div className="w-full rounded overflow-hidden border bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-9">Filled Button</div>
          <FilledButton
            className={
              'text-white bg-red-100 rounded-4xl border-red-200 border-1 w-242 hover:opacity-80 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            }
            text="Register"
          />
        </div>
      </div>
    </>
  );
};

export default Buttons;
