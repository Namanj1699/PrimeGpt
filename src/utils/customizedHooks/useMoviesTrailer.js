import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../redux/movieSlice';
import { tmdbGetOptions } from '../constant/Constant';

const useMoviesTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
      getMovieVideos();
    }, []);
  
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        tmdbGetOptions
      );
      const json = await data.json();
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json[0];
      dispatch(addTrailerVideo(trailer));
    };
}

export default useMoviesTrailer