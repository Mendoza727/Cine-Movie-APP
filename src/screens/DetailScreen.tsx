import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/NavigationController';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetailsComponent } from '../components/MovieDetailsComponent';

import Icon from 'react-native-vector-icons/Ionicons';

import tailwind from 'twrnc';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const { isLoading, movieDetails, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      {/* boton para regresar */}
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Icon
            color="white"
            name="arrow-back-outline"
            size={45}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.imageDetails}
        />
      </View>

      <View style={tailwind.style('p-1 mx-2')}>
        <Text style={tailwind.style('font-bold text-gray-800')}>{movie.original_title}</Text>
        <Text style={tailwind.style('font-bold text-2xl text-gray-800')}>{movie.title}</Text>
      </View>

      <View style={tailwind.style('p-1 mx-2 flex flex-row')}>
        
        {
          isLoading ?
            <ActivityIndicator color="blue" size={50} style={tailwind.style('my-5 mx-34')} />
            : <MovieDetailsComponent
              MovieFull={movieDetails!}
              Cast={cast}
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
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: screenHeight * 0.02,
    left: 20
  }
});
