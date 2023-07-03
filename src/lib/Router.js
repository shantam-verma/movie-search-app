import { useRoutes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import useApiURL from "../config/useApiURL";
import Home from "../pages/Home";
import AboutMovie from "../pages/AboutMovie";
import SeriesElement from "../components/SeriesElement";

export default function Router() {
  const {
    fetchSearches,
    fetchMovies,
    fetchSeries,
    fetchTrendings,
    fetchUpcomings,
    fetchSingleMovie,
    fetchTv,
  } = useApiURL();
  let elements = useRoutes([
    {
      path: "/login",
      key: "login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      key: "signup",
      element: <SignUp />,
    },
    {
      path: "/",
      key: "Home-Page",
      element: <Home />,
    },
    {
      path: "/tv",
      key: "tv",
      element: (
        <>
          <NavBar />
          <SeriesElement headline="Max Entertainment TV" fetchUrl={fetchTv} />
        </>
      ),
    },
    {
      path: "/movies",
      key: "movies",
      element: (
        <>
          <NavBar />
          <Cards headline="new at Max Entertainment" fetchUrl={fetchMovies} />
        </>
      ),
    },
    {
      path: "/series",
      key: "series",
      element: (
        <>
          <NavBar />
          <SeriesElement
            headline="The complete series"
            fetchUrl={fetchSeries}
          />
        </>
      ),
    },
    {
      path: "/trending",
      key: "trending",
      element: (
        <>
          <NavBar />
          <Cards headline="trending now" fetchUrl={fetchTrendings} />
        </>
      ),
    },
    {
      path: "/upcomings",
      key: "upcomings",
      element: (
        <>
          <NavBar />
          <Cards headline="Featured & Coming Soon" fetchUrl={fetchUpcomings} />
        </>
      ),
    },
    {
      path: "/search/movie",
      key: "searchedMovie",
      element: (
        <>
          <NavBar />
          <Cards headline="Now Available" fetchUrl={fetchSearches} />
        </>
      ),
    },
    {
      path: "/search/movie/:title/:id",
      key: "searchedMovieAbout",
      element: (
        <>
          <NavBar />
          <AboutMovie />
        </>
      ),
    },
  ]);
  return elements;
}
