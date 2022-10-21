import React, { useEffect } from 'react';
import { slidersPhoto } from '../../../mocks/sliderPhoto';
import { SliderPhotos } from '../../../types';
import './photoSliderLayout.scss';

interface IProps {
  photoIndex: number;
  indexSlider: number;
  stopSlider: number;
  sliders: SliderPhotos;
  setIndexSlider: React.Dispatch<React.SetStateAction<number>>;
}

export const PhotoSliderLayout = ({
  setIndexSlider,
  indexSlider,
  stopSlider,
  photoIndex,
  sliders,
}: IProps) => {
  //auto slide
  useEffect(() => {
    const lastIndex = slidersPhoto.length - 1;
    if (indexSlider < 0) {
      setIndexSlider(lastIndex);
    }
    if (indexSlider > lastIndex) {
      setIndexSlider(0);
    }
  }, [indexSlider, sliders]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndexSlider(indexSlider + 1);
    }, stopSlider);
    return () => clearInterval(slider);
  }, [indexSlider, stopSlider]);

  //change style for hide no active slides
  let position = 'next-slide';
  if (photoIndex === indexSlider) {
    position = 'active-slide';
  }
  if (
    photoIndex === indexSlider - 1 ||
    (indexSlider === 0 && photoIndex === slidersPhoto.length - 1)
  ) {
    position = 'last-slide';
  }

  return (
    <>
      <article className={position} key={sliders.id}>
        <div className='slider-img-box'>
          <img src={sliders.image1} alt={sliders.title} className='slide-img' />
          <img src={sliders.image2} alt={sliders.title} className='slide-img' />
        </div>
        <div className='product-info'>
          <p className='text'>{sliders.quote}</p>
          <div>
            <h4>0{photoIndex + 1}</h4>
            <div>
              <p>Lorem ipsum dolor sit.</p>
              <h2 className='title'>{sliders.title}</h2>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
