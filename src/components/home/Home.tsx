import React from 'react';
import './home.scss';
import { HomeSectionFirst } from '../layout/homeSectionFirst';
import { HomeSectionSecound } from '../layout/homeSectionSecound';
import { HomeSectionThree } from '../layout/homeSectionThree';
import { HomeSectionFourth } from '../layout/homeSectionFourth';
import { PhotoSlider } from '../photoSlider';

export const Home = () => {
  return (
    <div className='home-content-contaier'>
      <div className='home-content-box'>
        <HomeSectionFirst />
        <HomeSectionSecound />
        <HomeSectionThree />
        <HomeSectionFourth />
        <PhotoSlider />
      </div>
    </div>
  );
};
