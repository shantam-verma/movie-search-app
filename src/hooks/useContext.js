import { createContext, useContext, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import domainInstance from "../lib/useAxios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [carouselData, setCarouselData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [hasError, setHasError] = useState({ status: false, msg: "" });
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovies = async (
    fetchUrl,
    isCarouselRequest = false,
    isSeriesPage = false
  ) => {
    console.info("getMovies");
    setProgress(10);
    setLoading(true);
    try {
      const response = await domainInstance.get(fetchUrl);
      setProgress(40);
      if (isCarouselRequest && response.data.results) {
        setCarouselData(response.data.results);
        setProgress(70);
      } else if (isSeriesPage && response.data.results) {
        setSeriesData(response.data.results);
        setProgress(70);
      } else if (response.data.results) {
        setMovies(response.data.results);
        setProgress(70);
      } else {
        console.info(response.error);
        setHasError({ status: true, msg: response.error.message });
      }
    } catch (error) {
      console.log(error);
      setHasError({ status: true, msg: error.message });
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  return (
    <>
      <LoadingBar
        height={2}
        color="#0d6efd"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      ;
      <AppContext.Provider
        value={{
          search,
          setSearch,
          movies,
          carouselData,
          getMovies,
          hasError,
          setHasError,
          loading,
          setLoading,
          setProgress,
          seriesData,
          selectedMovie,
          setSelectedMovie,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
