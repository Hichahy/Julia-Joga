import React, { useState, useContext } from 'react';
import { SectionContext } from '../../../app/App';
import './selectNavbar.scss';

interface IProps {
  openSelect: boolean;
  setOpenSelect: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: (ref: any) => void;
}

export const SelectNavbar = ({ openSelect, setOpenSelect, handleScroll }: IProps) => {
  const handleOpenSelect = () => {
    setOpenSelect((prev) => !prev);
    console.log(openSelect);
  };

  const { sectionRef1, sectionRef2, sectionRef3, sectionRef4 } = useContext(SectionContext);

  return (
    <>
      {openSelect ? <div onClick={handleOpenSelect} className='burger-overlay'></div> : null}
      <div className='custom-select-container'>
        <button onClick={handleOpenSelect}>
          Yoga <i className='bi bi-chevron-down'></i>
        </button>
        {openSelect ? (
          <ul >
            <li onClick={() => handleScroll(sectionRef1.current)}>lorem</li>
            <li onClick={() => handleScroll(sectionRef2.current)}>About Me</li>
            <li onClick={() => handleScroll(sectionRef3.current)}>Yoga types</li>
            <li onClick={() => handleScroll(sectionRef4.current)}>Lorem Ipsum</li>
          </ul>
        ) : null}
      </div>
    </>
  );
};
