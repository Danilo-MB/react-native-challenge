import React from 'react';
import { StatusBar } from 'react-native';
import MainScreenStack from './src/screens/MainScreenStack';

const App = () => {

  return (
    <>
      <StatusBar hidden />
      <MainScreenStack />
    </>

  );
};

export default App;
