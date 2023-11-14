import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DiceScreen from './src/DiceScreen';

function App() {

  return (
    <DiceScreen />
  );
}

const styles = StyleSheet.create({

});

export default App;
