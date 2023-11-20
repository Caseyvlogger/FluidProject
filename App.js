import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
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