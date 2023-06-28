import { createContext, useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import domainInstance from "../lib/useAxios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [hasError, setHasError] = useState({ status: false, msg: "" });
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const getMovies = async (fetchUrl) => {
    setProgress(10);
    setLoading(true);
    try {
      const response = await domainInstance.get(fetchUrl);
      setProgress(40);
      if (response.data.results) {
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
          getMovies,
          hasError,
          setHasError,
          loading,
          setLoading,
          setProgress,
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
