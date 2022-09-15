import React from 'react';
import Rubik300 from './Rubik300';
import Rubik400 from './Rubik400';
import Rubik500 from './Rubik500';
import Rubik600 from './Rubik600';
import Rubik700 from './Rubik700';

const Typography = () => {
  return (
    <>
      <div className="w-full rounded overflow-hidden border bg-white">
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-5">Typography</h1>
        </div>
        <Rubik300 />
        <Rubik400 />
        <Rubik500 />
        <Rubik600 />
        <Rubik700 />
      </div>
    </>
  );
};

export default Typography;
