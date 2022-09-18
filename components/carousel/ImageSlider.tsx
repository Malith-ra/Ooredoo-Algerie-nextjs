import React, { useState } from 'react';
import speaker from './assets/speaker.svg';
import bell from './assets/bell.svg';
import spring from './assets/spring.svg';
import girl from './assets/slider-girl.svg';
import left from './assets/arrow/left.png';
import right from './assets/arrow/right.png';
import classnames from 'classnames';
import Image from 'next/image';

const items = [
  {
    class: 'bg-rose',
    id: 1,
  },
  {
    class: 'bg-cherry-100',
    id: 2,
  },
  {
    class: 'bg-black',
    id: 3,
  },
];

const heading = `${`Express\nyour\nSELF`}`;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(items) || items.length <= 0) {
    return null;
  }

  return (
    <div
      id="animation-carousel"
      className="relative w-[642px] mb-12"
      data-carousel="static"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="duration-200 ease-linear" data-carousel-item>
          {items.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? 'slide active' : 'slide'
                }
                key={index}
              >
                {index === current && (
                  <div
                    className={classnames(
                      `rounded-[11px] h-[794px] ${slide.class}`
                    )}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-12 right-28 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <Image src={left} alt="left-arrow" width={32} height={32} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-12 right-16 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <Image
          src={right}
          alt="right-arrow"
          width={32}
          height={32}
        />
      </button>
      <div className="absolute left-32 top-20">
        <Image src={bell} alt="bell" />
      </div>
      <div className="absolute right-3 top-36">
        <Image src={speaker} alt="speaker" />
      </div>
      <div className="absolute left-6 bottom-14">
        <Image src={spring} alt="spring" />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image src={girl} alt="girl" />
      </div>
      <div className="absolute left-14 top-40 whitespace-pre">
        <h1 className="font-outfit font-black text-white text-[90px] uppercase leading-[108px]">{`${`Express\nyour\nSELF`}`}</h1>
      </div>
      <div className="absolute left-16 top-[500px] whitespace-pre">
        <h4 className="font-NotoSans font-normal text-white text-base leading-[22px]">
          {`${`Creating a new world class digital\ntelco for Algeria.`}`}
        </h4>
      </div>
    </div>
  );
};

export default ImageSlider;
