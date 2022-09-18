import React from 'react';
import Button from './Button';

const ButtonOutline = () => {
  return (
    <div className="flex">
      <div className="mr-5">
        <Button
          className="rounded-4xl border-[0.8px] border-cherry-200 text-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic"
          width="231px"
          height="52px"
          size="14px"
        >
          SIGN UP
        </Button>
      </div>
      <div className="mr-5">
        <Button
          className="rounded-4xl border-[0.8px] border-cherry-200 text-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic"
          width="231px"
          height="52px"
          size="14px"
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default ButtonOutline;
