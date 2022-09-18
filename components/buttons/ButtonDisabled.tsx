import React from 'react';
import Button from './Button';

const ButtonDisabled = () => {
  return (
    <div className="flex">
      <div className="mr-5">
        <Button
          className="rounded-4xl text-ash-100 bg-ash-200 font-rubik leading-[17px] font-semibold not-italic flex justify-center place-items-center"
          width="231px"
          height="52px"
          size="14px"
        >
          VERIFY
        </Button>
      </div>
      <div className="mr-5">
        <Button
          className="rounded-4xl text-ash-100 bg-ash-200 font-rubik leading-[17px] font-semibold not-italic flex justify-center place-items-center"
          width="231px"
          height="52px"
          size="14px"
        >
          CONFIRM
        </Button>
      </div>
    </div>
  );
};

export default ButtonDisabled;
