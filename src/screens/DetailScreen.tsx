import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { RootStackParams } from '../navigation/NavigationController'
import tailwind from 'twrnc';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;


  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.imageDetails}
        />
      </View>

      <View style={ tailwind.style('p-1 mx-3') }>
          <Text style={ tailwind.style('font-bold text-2xl') }>{ movie.title }</Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9
  },
  imageDetails: {
    flex: 1,
  }
});
