import React, { useContext } from 'react';
import { SectionContext } from '../../../app/App';
import { cards } from '../../../mocks/homeCards';
import './homeSectionFourth.scss';
import { Slide } from 'react-awesome-reveal';


export const HomeSectionFourth = () => {
  const { sectionRef3 } = useContext(SectionContext);

  return (
    <section ref={sectionRef3} className='home-section-fourth'>
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
