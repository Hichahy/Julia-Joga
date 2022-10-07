import React from 'react';
import { Home } from '../components/home';
import { NavigationBar } from '../components/navigationBar';
import './app.scss';


export const App = () => {

  return (
    <div className='app-container'>
      <NavigationBar />
      <Home />
    </div>
  );
};

export default App;
