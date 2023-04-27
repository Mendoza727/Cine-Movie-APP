import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieIntefaceData'
import tailwind from 'twrnc'
import { MoviePosterSlice } from './MoviePosterSlice'

interface Props {
    title?: string,
    movies: Movie[],
}


export const FlatListMovies = ({ title, movies }: Props) => {
    return (
        <View style={[tailwind.style('h-68 my-1'), { height: (title) ? 260 : 220 }]}>
            {
                title && <Text style={tailwind.style('text-2xl font-bold p-2')}>{ title }</Text>
            }
            <FlatList
                data={ movies }
                renderItem={({ item }: any) => (
                    <MoviePosterSlice movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    )
}
