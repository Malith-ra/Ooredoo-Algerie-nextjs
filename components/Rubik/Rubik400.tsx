import React from 'react';

const Rubik400 = () => {
  return (
    <div>
      <h1 className="font-medium text-lg px-6 text-red-500">
        Rubik font-weight: 400
      </h1>
      <div className="px-6 py-4 border my-2">
        <h1 className="mb-2">
          font-family: Rubik font-weight: 400 font-size: 16px
          line-height: 16px
        </h1>
        <h1 className="font-rubik font-normal not-italic text-[16px] leading-[16px] text-black">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </div>
      <div className="px-6 py-4 border my-2">
        <h1 className="mb-2">
          font-family: Rubik font-weight: 400 font-size: 14px
          line-height: 16px
        </h1>
        <h1 className="font-rubik font-normal not-italic text-[14px] leading-[16px] text-black">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </div>
    </div>
  );
};

export default Rubik400;
