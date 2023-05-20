import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MovieDetailsFull } from '../interfaces/MovieDetailsInterface';
import { Cast } from '../interfaces/creditInterface';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

import currencyFormater from 'currency-formatter';
import { FlatListCastMovieComponent } from './FlatListCastMovieComponent';

interface Props {
   MovieFull: MovieDetailsFull;
   Cast: Cast[];
}


export const MovieDetailsComponent = ({ MovieFull, Cast }: Props) => {
   return (
      <View>

         {/* vote movie */}
         <View style={tailwind.style('my-1 flex flex-row bg-white gap-4 rounded-lg shadow-lg p-3')}>
            <Icon
               name='star-outline'
               color="gray"
               size={25}
            />
            <Text style={tailwind.style('font-bold mx-2 text-gray-800')}>{MovieFull.vote_average.toFixed()} / 10</Text>
            <Text style={tailwind.style('font-bold w-64 text-center text-gray-800')}> {MovieFull.genres.map(g => g.name).join(', ')}</Text>
         </View>

         {/* resume */}
         <View style={tailwind.style('my-4')}>
            <Text style={tailwind.style('font-bold text-2xl text-gray-800')} >Sinopsis</Text>
            <Text style={tailwind.style('my-2 p-2 text-gray-800')}>{MovieFull.overview || 'No hay informacion reciente'} </Text>
         </View>


         {/* Presupuesto */}
         <View style={tailwind.style('flex flex-row justify-between')}>
            <View style={tailwind.style('my-1')}>
               <Text style={tailwind.style('font-bold text-2xl text-gray-800')}>Presupuesto</Text>
               <Text style={tailwind.style('bg-white rounded-lg shadow-lg text-center p-3 w-40 text-gray-800')}>{currencyFormater.format(MovieFull.budget, { code: 'USD' }) || 'no hay informacion'}</Text>
            </View>
            <View style={ tailwind.style('my-1') }>
               <Text style={ tailwind.style('font-bold text-2xl mx-12 text-gray-800') }>Estado</Text>
               <Text style={tailwind.style('bg-white rounded-lg shadow-lg text-center p-3 w-40 text-gray-800')}>{ MovieFull.status }</Text>
            </View>
         </View>


         {/* casting */}
         <View style={ tailwind.style('my-3')}>
            <Text style={tailwind.style('font-bold text-2xl mb-4 text-gray-800')}>Actores</Text>
            <FlatList 
               data={ Cast }
               keyExtractor={(item) => item.id.toString()}
               renderItem={ ({ item }) => <FlatListCastMovieComponent Cast={ item } />}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
            />
         </View>
      </View>
   )
}
