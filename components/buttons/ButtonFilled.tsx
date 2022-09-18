import React from 'react';
import Button from './Button';

const ButtonFilled = () => {
  return (
    <div className="flex">
      <div className="mr-5">
        <Button
          className="rounded-4xl border-[1px] border-cherry-200 text-white bg-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic"
          width="242px"
          height="52px"
          size="14px"
        >
          REGISTER
        </Button>
      </div>

      <div className="mr-5">
        <Button
          className="rounded-4xl border-[1px] border-cherry-200 text-white bg-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic"
          width="231px"
          height="52px"
          size="14px"
        >
          AGREE & CONTINUE
        </Button>
      </div>

      <div className="mr-5">
        <Button
          className="rounded-4xl border-[0.8px] border-cherry-200 text-white bg-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic"
          width="231px"
          height="52px"
          size="14px"
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default ButtonFilled;
