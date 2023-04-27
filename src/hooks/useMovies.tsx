import { useEffect, useState } from 'react'
import movieBDPetitions from '../api/MovieBDApiRequest';
import { MovieInterface, Movie } from '../interfaces/MovieIntefaceData';

interface useMovies {
   nowPlaying: Movie[];
   popular: Movie[];
   topRated: Movie[];
   upComing: Movie[];
}


export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [peliculasState, setPeliculasState] = useState<useMovies>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const GetMovies = async () => {
    const nowPlayingPromise  = movieBDPetitions.get<MovieInterface>("/now_playing");
    const popularPromise     =  movieBDPetitions.get<MovieInterface>("/popular");
    const topRatedPromise    = movieBDPetitions.get<MovieInterface>("/top_rated");
    const upcomingPromise    = movieBDPetitions.get<MovieInterface>("/upcoming");

    const responseMovies = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ]);

    setPeliculasState({
      nowPlaying: responseMovies[0].data.results,
      popular:    responseMovies[1].data.results,
      topRated:   responseMovies[2].data.results,
      upComing:   responseMovies[3].data.results
    })

    setIsLoading(false);
  }

  useEffect(() => {
    // now playing
    GetMovies();
  }, []);

  return {
    ...peliculasState,
    isLoading
  }

}
