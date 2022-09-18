import React from 'react';
import './button.css';

interface ButtonProps {
  children: string;
  width: string;
  height: string;
  size: string;
  onClick?: () => void;
}

export const Button = ({
  width,
  height,
  children,
  size,
  ...props
}: ButtonProps) => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    width: width,
    height: height,
    fontSize: size,
  };

  return (
    <div className="py-2 my-2">
      <button
        type="button"
        className="rounded-4xl border border-red-200 bg-slate-900 text-white my-2  font-rubik leading-[17px] font-semibold not-italic"
        // style={style}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
