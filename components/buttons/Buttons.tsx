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
              'text-white font-rubik font-semibold not-italic text-sm leading-[17px] bg-red-100 rounded-4xl border-red-200 border-1  w-[231px] h-[52px] uppercase hover:opacity-80  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800'
            }
          >
            Register
          </FilledButton>
        </div>
      </div>
    </>
  );
};

export default Buttons;
