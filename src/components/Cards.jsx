import React, { useEffect, useState } from "react";
import Element from "./Elements";
import { useGlobalContext } from "../hooks/useContext";
import Spinner from "./Spinner";
import ErrorBoundary from "../ErrorBoundary";

export default function Cards({ fetchUrl, headline }) {
  const {
    loading,
    movies,
    getMovies,
    hasError,
    setHasError,
    setSelectedMovie,
  } = useGlobalContext();

  const win = window.sessionStorage;

  useEffect(() => {
    let timerOut = setTimeout(() => {
      try {
        getMovies(fetchUrl);
      } catch (error) {
        setHasError({ status: true, mgs: error.message });
      }
    }, 1000);
    return () => clearTimeout(timerOut);
  }, [fetchUrl]);

  if (hasError.status) {
    return <h1>{hasError.mgs}</h1>;
    console.info(hasError.mgs);
  }

  function handleMovieClick(movie) {
    win.setItem("aboutPage", JSON.stringify(movie));
    setSelectedMovie(movie);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ErrorBoundary>
          <h2 className="section-header ps-2 border-info my-5 mx-3">
            {headline}
          </h2>
          <div className="d-flex flex-wrap justify-content-around">
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                <Element movies={movie} />
              </div>
            ))}
          </div>
        </ErrorBoundary>
      )}
    </>
  );
}
