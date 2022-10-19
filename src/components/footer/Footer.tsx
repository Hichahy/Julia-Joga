import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-content-1'>
        <h1>Fly with Baksana</h1>
      </div>
      <div className='footer-content-2'>
        <div className='footer-content-2-box'>
          <div className='footer-content-contact'>
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontWeight: '600' }}>Social Media</p>
              <a href='https://www.instagram.com' target='_blank'>
                <i className='bi bi-instagram'></i>
              </a>
              <a href='https://www.fb.com' target='_blank'>
                <i className='bi bi-facebook' style={{ margin: '0' }}></i>
              </a>
            </div>
            <div>
              <p style={{ fontWeight: '600' }}>Kontakt</p>
              <div className='contact-box'>
                <i className='bi bi-envelope'></i> <p>juliaJulia@wpl.pl</p>
              </div>
              <div className='contact-box'>
                <i className='bi bi-telephone'></i> <p>+48 234 324 222</p>
              </div>
            </div>
          </div>
          <div className='footer-content-about'>
            <h4>Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo quas
              excepturi exercitationem earum incidunt, similique aut doloribus distinctio beatae
              recusandae ex dolores tenetur vitae fugit nulla accusantium eos id.
            </p>
          </div>
          <div className='footer-content-button'>
            <h4>Lorem.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo quas
              excepturi exercitationem earum incidunt.
            </p>
            <button>Training now!</button>
          </div>
        </div>
        <span>© 2022 by Fly with Baksana</span>
      </div>
    </footer>
  );
};
