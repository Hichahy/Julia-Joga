import React from 'react';
import './navigationBar.scss';
import { useTranslator } from '../../hooks';

export const NavigationBar = () => {
  const T = useTranslator();

  return (
    <nav>
      {T.appName}
      <div className='menu-icon'>
        <input className='menu-icon-cheeckbox' type='checkbox' id='burger-menu' />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
