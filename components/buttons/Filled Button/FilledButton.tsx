import React from 'react';

const FilledButton = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <div>
      <button type="button" className={className}>
        {children}
      </button>
    </div>
  );
};

export default FilledButton;
