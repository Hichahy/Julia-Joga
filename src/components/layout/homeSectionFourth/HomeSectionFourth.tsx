import React from 'react';
import './homeSectionFourth.scss';
import { cards } from '../../../mocks/homeCards';

export const HomeSectionFourth = () => {
  return (
    <section className='home-section-fourth'>
      <div className='content'>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem assumenda
          inventore eaque enim iure necessitatibus nisi vitae? Deleniti sint animi molestias eum
          beatae voluptatibus repudiandae commodi quidem corrupti alias!
        </p>
      </div>

      <div className='card-box'>
        {cards.map((i) => (
          <div className='card' key={i.id}>
            <img src={i.image} alt='joga position' />
            <h3>{i.title}</h3>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
