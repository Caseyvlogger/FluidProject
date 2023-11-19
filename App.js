import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
// import { } from 'react-native';
import DiceScreen from './src/DiceScreen';

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <DiceScreen />
  );
}

export default App;