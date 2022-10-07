import React from 'react';
import { cards } from '../../../mocks/homeCards';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './homeSectionThree.scss';

export const HomeSectionThree = () => {
  return (
    <section className='home-section-three'>
      <div className='home-section-three-box-1'>
        <img src='/public/images/img-1.jpg' alt='joga' />
        <div className='content-box'>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, consequuntur
            quis. Velit consequatur repellendus sapiente obcaecati! Esse nobis, obcaecati reiciendis
            magnam dolor rerum eveniet soluta quod sunt cupiditate quo magni officiis itaque aut
            autem debitis veniam, dolores consequatur delectus illo harum. Amet modi repellendus id
            iure necessitatibus, repudiandae quis placeat, dignissimos facere nesciunt quasi commodi
            quidem libero consequatur eius hic accusamus quibusdam, officiis accusantium voluptate
            obcaecati sequi explicabo. Dolorum obcaecati nulla quam illum, eum excepturi molestias
            labore culpa maiores? Recusandae eius quam quo a obcaecati, provident similique
            consequuntur id! Sequi sed quibusdam vero aut ducimus placeat quia in dolorem rerum.
          </p>
        </div>
      </div>
      <div className='home-section-three-box-2'>
        <img src='/public/images/img-2.jpg' alt='joga' />
        <div className='content-box'>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, consequuntur
            quis. Velit consequatur repellendus sapiente obcaecati! Esse nobis, obcaecati reiciendis
            magnam dolor rerum eveniet soluta quod sunt cupiditate quo magni officiis itaque aut
            autem debitis veniam, dolores consequatur delectus illo harum. Amet modi repellendus id
            iure necessitatibus, repudiandae quis placeat, dignissimos facere nesciunt quasi commodi
            quidem libero consequatur eius hic accusamus quibusdam, officiis accusantium voluptate
            obcaecati sequi explicabo. Dolorum obcaecati nulla quam illum, eum excepturi molestias
            labore culpa maiores? Recusandae eius quam quo a obcaecati, provident similique
            consequuntur id! Sequi sed quibusdam vero aut ducimus placeat quia in dolorem rerum.
          </p>
        </div>
      </div>
      
    </section>
  );
};
