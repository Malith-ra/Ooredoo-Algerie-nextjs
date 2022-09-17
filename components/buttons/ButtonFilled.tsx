import React from 'react';
import Button from './Button';

const ButtonFilled = () => {
  return (
    <div className="flex">
      <div className="mr-5">
        <Button width="242px" height="52px" size="14px">
          REGISTER
        </Button>
      </div>

      <div className="mr-5">
        <Button width="231px" height="52px" size="14px">
          AGREE & CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default ButtonFilled;
