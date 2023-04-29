import React from 'react'
import { View, Text } from 'react-native';
import { MovieDetailsFull } from '../interfaces/MovieDetailsInterface';
import { Cast } from '../interfaces/creditInterface';

interface Props {
   MovieFull: MovieDetailsFull;
   Cast: Cast[];
}


export const MovieDetailsComponent = ({ MovieFull, Cast }: Props) => {
  return (
     <View>
        <Text></Text>
     </View>
  )
}
