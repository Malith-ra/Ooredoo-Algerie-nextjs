import React from 'react';
import Button from './Button';
import { FacebookIcon, GoogleIcon } from '../../assets/Icons';

const ButtonIcon = () => {
  return (
    <div className="flex">
      <div className="mr-5">
        <Button
          className="rounded-4xl border-[0.8px] border-source-fb text-source-fb hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic flex justify-center place-items-center"
          width="231px"
          height="52px"
          size="14px"
          icon={<FacebookIcon />}
        >
          FACEBOOK
        </Button>
      </div>
      <div className="mr-5">
        <Button
          className="rounded-4xl border-[0.8px] border-source-google text-source-google hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic flex justify-center place-items-center"
          width="231px"
          height="52px"
          size="14px"
          icon={<GoogleIcon />}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default ButtonIcon;
