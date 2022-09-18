import React, { useMemo } from 'react';

const STYLE = ['btn--primary--solid', 'btn-warning--solid'];

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  width: string;
  height: string;
  size: string;
  className: string;
}

const Button = ({
  width,
  height,
  children,
  size,
  className,
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
    <button {...props} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
