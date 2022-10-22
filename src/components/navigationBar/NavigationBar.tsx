import React from 'react';
import { useState, useContext, useEffect } from 'react';
import './navigationBar.scss';
import { SectionContext } from '../../app/App';
import { SelectNavbar } from '../layout/selectNavbar';
import { useTranslator } from '../../hooks';

export const NavigationBar = () => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [openBurger, setOpenBurger] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const T = useTranslator();

  const { sectionRef1, sectionRef2, sectionRef3, sectionRef4 } = useContext(SectionContext);

  const handleBurgerMenu = () => {
    setOpenBurger((prev) => !prev);
  };

  const handleScroll = (ref: any) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
    if (openBurger) {
      setOpenBurger((prev) => !prev);
    }
  };

  const handleHideNav = () => {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;
    setYOffset(currentYOffset);
    setVisible(visible);

    setOpenBurger(false);
    setOpenSelect(false);
  };

  //Hidden nav when scroll and show when scroll up
  useEffect(() => {
    window.addEventListener('scroll', handleHideNav);
    return () => window.removeEventListener('scroll', handleHideNav);
  });

  return (
    <>
      {openBurger ? <div onClick={handleBurgerMenu} className='burger-overlay' /> : null}
      <nav style={{ top: `${visible ? '-1px' : '-70px'}` }}>
        <div className='nav-content-box'>
          <h1>{T.appName}</h1>
            <SelectNavbar openSelect={openSelect} setOpenSelect={setOpenSelect} handleScroll={handleScroll}/>
          {openBurger ? (
            <div className='active-burger'>
              <ul>
                <li onClick={() => handleScroll(sectionRef1.current)}>section1</li>
                <li onClick={() => handleScroll(sectionRef2.current)}>section2</li>
                <li onClick={() => handleScroll(sectionRef3.current)}>section3</li>
                <li onClick={() => handleScroll(sectionRef4.current)}>section4</li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className='nav-icon-box'>
          <a href='mailto:contact@test.com'>
            <button>Contact me?</button>
          </a>
          <a href='https://www.instagram.com' target='_blank'>
            <i className='bi bi-instagram'></i>
          </a>
          <a href='https://www.fb.com' target='_blank'>
            <i className='bi bi-facebook'></i>
          </a>
        </div>
        <div className='menu-icon'>
          <input
            className='menu-icon-cheeckbox'
            type='checkbox'
            checked={openBurger}
            onChange={(e) => {}}
            id='burger-menu'
            onClick={handleBurgerMenu}
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};
