import React from 'react';
import { useTranslator } from '../hooks';

export const App = () => {
  const T = useTranslator();

  return <div>{T.appName}</div>;
};

export default App;
