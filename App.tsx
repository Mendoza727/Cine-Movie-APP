import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationController } from './src/navigation/NavigationController';
// import { GradientBgComponent } from './src/components/GradientBgComponent';

const App = () => {
  return (
     <NavigationContainer>
           <NavigationController />
           /* componente que contiene el import del gradiente */
           {/* <GradientBgComponent /> */}
     </NavigationContainer>
  )
}

export default App;