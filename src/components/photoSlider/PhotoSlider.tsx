import React, { useState } from 'react';
import { slidersPhoto } from '../../mocks/sliderPhoto';
import PhotoSliderLayout from '../layout/photoSlider/PhotoSliderLayout';
import './photoSlider.scss';

export const PhotoSlider = () => {
  const [indexSlider, setIndexSlider] = useState<number>(0);
  const [stopSlider, setStopSlider] = useState<number>(7000);
  return (
    <div
      onMouseEnter={() => setStopSlider(1000000)}
      onMouseLeave={() => setStopSlider(7000)}
      className='slider'
    >
      {slidersPhoto.map((i, photoIndex) => {
        return (
          <PhotoSliderLayout
            key={i.id}
            photoIndex={photoIndex}
            indexSlider={indexSlider}
            setIndexSlider={setIndexSlider}
            sliders={i}
            stopSlider={stopSlider}
          />
        );
      })}
      <button className='prev' onClick={() => setIndexSlider(indexSlider - 1)}>
        <i className='bi bi-arrow-left'></i>
      </button>
      <button className='next' onClick={() => setIndexSlider(indexSlider + 1)}>
        <i className='bi bi-arrow-right'></i>
      </button>
    </div>
  );
};
