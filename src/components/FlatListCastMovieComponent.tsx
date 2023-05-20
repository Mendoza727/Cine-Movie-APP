import React from 'react'
import { View, Text, Image } from 'react-native';
import tailwind from 'twrnc'
import { Cast } from '../interfaces/creditInterface'


interface Props {
    Cast: Cast;
}

export const FlatListCastMovieComponent = ({ Cast }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${Cast.profile_path}`;

    return (
        <View style={tailwind.style('my-1 flex')}>
            <View style={tailwind.style('bg-white rounded-lg flex flex-row mx-4 shadow-lg p-3')}>
                {
                    Cast.profile_path ? (
                        <Image
                            source={{ uri }}
                            style={tailwind.style('rounded-lg mx-1 w-24 h-24')}
                        />
                    ) : (
                        <Image
                            source={require('../assets/img/notPhoto.png')}
                            style={tailwind.style('rounded-lg mx-1 w-24 h-24')}
                        />
                    )
                }
                <View style={tailwind.style('flex flex-col mx-4')}>
                    <Text style={tailwind.style('font-bold p-1 mx-1 mb-1 text-center text-gray-800')}>{Cast.name}</Text>
                    <Text style={tailwind.style('font-bold p-1 mx-1 mb-1 text-center text-gray-800')}>{Cast.character}</Text>
                </View>
            </View>
        </View>
    )
}
