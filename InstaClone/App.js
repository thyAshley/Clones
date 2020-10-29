import React from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar />
      <HomeScreen />
    </>
  );
};

export default App;
