import React, { useContext } from 'react';
import {SectionContext} from '../../../app/App'
import './homeSectionSecound.scss';

export const HomeSectionSecound = () => {

  const {sectionRef1} = useContext(SectionContext)

  return (
    <section ref={sectionRef1} className='home-section-secound'>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora fugiat nemo totam earum
        nesciunt, nihil, eos sed ut inventore iste aliquid asperiores commodi nisi harum numquam
        illo obcaecati assumenda vel.lo Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis ad corrupti aperiam animi excepturi odio accusamus. Sapiente nostrum esse
        recusandae, itaque cum, obcaecati assumenda ipsam, fuga nisi ab libero dolorem? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Velit nisi molestiae minima rerum? Ipsam
        laudantium, sed quae consequatur, ex praesentium ut, aliquid mollitia asperiores quibusdam
        enim voluptas consequuntur neque unde?
      </p>
      <button>Join to us!</button>
    </section>
  );
};
