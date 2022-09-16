import React, { useMemo } from 'react';

const STYLE = ['btn--primary--solid', 'btn-warning--solid'];

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  width: string;
  height: string;
  size: string;
}

const Button = ({
  width,
  height,
  children,
  size,
  ...props
}: ButtonProps) => {
  let style = useMemo(
    () => ({
      width: width,
      height: height,
      fontSize: size,
    }),
    [width, height, size]
  );

  return (
    <button
      {...props}
      style={style}
      className="rounded-4xl border-red-200 text-white bg-red-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic"
    >
      {children}
    </button>
  );
};

export default Button;
