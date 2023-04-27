import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import { NavigationController } from './src/navigation/NavigationController';

const App = () => {
  return (
    <NavigationContainer>
          <NavigationController />
    </NavigationContainer>
  )
}

export default App;