import React from 'react';
import Rubik300 from './Rubik300';
import Rubik500 from './Rubik500';

const Typography = () => {
  return (
    <>
      <div className="w-full rounded overflow-hidden border bg-white">
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-5">Typography</h1>
        </div>
        <Rubik300 />
        <Rubik500 />
      </div>
    </>
  );
};

export default Typography;
