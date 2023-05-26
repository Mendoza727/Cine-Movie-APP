import React from 'react'
import { View, Text, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FaceInScreen = () => {

  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{ backgroundColor: 'blue', width: 150, height: 150, borderColor: 'white', borderWidth: 5, opacity }}>
                <Text>Hola Mundo</Text>
        </Animated.View>

        <Button title='FadeIn'
            onPress={ fadeIn }
            color='red'
        />
        <Button title='FadeOut'
        onPress={ fadeOut }
        />
    </View> 
  )
}
