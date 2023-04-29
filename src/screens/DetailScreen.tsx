import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/NavigationController';
import Icon  from "react-native-vector-icons/Ionicons";
import tailwind from 'twrnc';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetailsComponent } from '../components/MovieDetailsComponent';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const { isLoading, movieDetails, cast} = useMovieDetails( movie.id );

  console.log( movieDetails?.adult );


  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.imageDetails}
        />
      </View>

      <View style={ tailwind.style('p-1 mx-3') }>
          <Text style={ tailwind.style('font-bold') }>{ movie.original_title }</Text>
          <Text style={ tailwind.style('font-bold text-2xl') }>{ movie.title }</Text>
      </View>

      <View style={ tailwind.style('p-1 mx-3 flex flex-row') }> 
          {
             isLoading ?
             <ActivityIndicator color="blue" size={50} style={ tailwind.style('my-5 mx-38') } />
             : <MovieDetailsComponent 
                MovieFull={ movieDetails!} 
                Cast={ cast }
            />
          }
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
