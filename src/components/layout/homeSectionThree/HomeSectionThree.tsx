import React, { useContext } from 'react';
import { SectionContext } from '../../../app/App';
import './homeSectionThree.scss';

export const HomeSectionThree = () => {
  const { sectionRef2 } = useContext(SectionContext);

  return (
    <section ref={sectionRef2} className='home-section-three'>
      <div className='home-section-three-box-1'>
        <div className='box-background-1'></div>
        <img src='/public/images/img-1.jpg' alt='joga' />
        <div className='content-box'>
          <h2>Lorem, ipsum.</h2>
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
        <div className='box-background-2'></div>
        <img src='/public/images/img-2.jpg' alt='joga' />
        <div className='content-box'>
          <h2>Lorem.</h2>
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
