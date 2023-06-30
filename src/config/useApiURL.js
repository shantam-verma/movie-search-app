import { useParams } from "react-router-dom";
import { useGlobalContext } from "../hooks/useContext";

export const IMG_URL = "https://image.tmdb.org/t/p/original";

export default function useApiURL() {
  const { id } = useParams();
  const { search } = useGlobalContext();

  console.info("search: ", search)
  const movieName = encodeURIComponent(search);

  const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_KEY}`;

  const fetchMovies = `discover/movie${API_KEY}&include_adult=false&language=en-US`;
  const fetchTopMovies = `movie/popular${API_KEY}&include_adult=false&language=en-US`;
  const fetchSeries = `tv/popular${API_KEY}&include_adult=false&language=en-US`;
  const fetchTopRated = `movie/top_rated${API_KEY}&include_adult=false&language=en-US`;
  const fetchTrendings = `trending/movie/week${API_KEY}&include_adult=false&language=en-US`;
  const fetchUpcomings = `movie/upcoming${API_KEY}&include_adult=false&language=en-US`;
  const fetchSearches = `search/movie${API_KEY}&query=${movieName}&include_adult=false&language=en-US&page=1`;
  const fetchSingleMovie = `movie/${id}${API_KEY}&include_adult=false&language=en-US&page=1`;
  const fetchTv = `discover/tv${API_KEY}&include_adult=false&language=en-US&page=1`;

  return {
    movieName,
    fetchMovies,
    fetchSeries,
    fetchTopRated,
    fetchTrendings,
    fetchUpcomings,
    fetchSearches,
    fetchSingleMovie,
    fetchTopMovies,
    fetchTv,
  };
}
