import React from "react";
import { ActivityIndicator, Dimensions, Text, View, ScrollView} from 'react-native';
import { useMovies } from "../hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Carousel from 'react-native-snap-carousel';

import { MoviePosterSlice } from "../components/MoviePosterSlice";
import tailwind from 'twrnc';
import { FlatListMovies } from "../components/FlatListMovies";

const { width } = Dimensions.get('window');


export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();


  if ( isLoading ) {
      return (
        <View style={ tailwind.style("flex justify-center my-92") }>
            <ActivityIndicator color="blue" size={100}/>
            <Text style={ tailwind.style('text-center font-bold text-2xl my-4') }>Loading...</Text>
        </View>
      )
  }


  return (
    <ScrollView>

        <View style={{ marginTop: top + 20 }}>
                {/* carrousel principal*/}


                <View style={ tailwind.style('mb-4') }>
                    <Carousel 
                      data={ nowPlaying }
                      renderItem={ ({ item}: any) => <MoviePosterSlice movie={ item } /> }
                      sliderWidth={ width }
                      itemWidth={ 300 }
                      inactiveSlideOpacity={0.9}
                    />
                </View>

            {/* Peliculas Populares */}
            <FlatListMovies  title="Popular" movies={ popular }/>
            <FlatListMovies  title="Top Rated" movies={ topRated }/>
            <FlatListMovies  title="Upcoming" movies={ upComing }/>


        </View>
    </ScrollView>
  )
}
