import { useState, useEffect } from 'react';
import movieBDPetitions from '../api/MovieBDApiRequest';
import { MovieDetailsFull } from '../interfaces/MovieDetailsInterface';
import { Cast, CredistsResponse } from '../interfaces/creditInterface';

interface MovieDetails {
    isLoading: Boolean;
    movieDetails?: MovieDetailsFull
    cast: Cast[];
}

export const useMovieDetails = ( movieID: number ) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        isLoading: true,
        movieDetails: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const MovieDetailsPromise = await movieBDPetitions.get<MovieDetailsFull>(`/${ movieID }`);
        const CastDetailsPromise  = await movieBDPetitions.get<CredistsResponse>(`/${ movieID }/credits`);

        const [ MovieDetailsResponse, CastDetailsResponse ] = await Promise.all([
            MovieDetailsPromise,
            CastDetailsPromise
        ]);

        setMovieDetails({
            isLoading: false,
            movieDetails: MovieDetailsResponse.data,
            cast: CastDetailsResponse.data.cast
        });

    }

    useEffect(() => {
        getMovieDetails();
    }, []);
    

    return {
        ...movieDetails
    }

}
