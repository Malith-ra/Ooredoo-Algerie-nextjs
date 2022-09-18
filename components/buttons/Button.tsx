import React, { useMemo } from 'react';

const STYLE = ['btn--primary--solid', 'btn-warning--solid'];

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  width: string;
  height: string;
  size: string;
  className: string;
  icon?: React.ReactElement;
}

const Button = ({
  width,
  height,
  children,
  size,
  className,
  icon,
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
      {icon}
      {children}
    </button>
  );
};

export default Button;
