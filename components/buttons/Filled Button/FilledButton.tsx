import React from 'react';

const FilledButton = ({ className, text }: any) => {
  return (
    <div>
      <button type="button" className={className}>
        {text}
      </button>
    </div>
  );
};

export default FilledButton;
