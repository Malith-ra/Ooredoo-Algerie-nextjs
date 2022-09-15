import React from 'react';
import FilledButton from './Filled Button/FilledButton';

const Buttons = () => {
  return (
    <>
      <div className="w-full rounded overflow-hidden border bg-white ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-9">Filled Button</div>
          <FilledButton />
        </div>
      </div>
    </>
  );
};

export default Buttons;
