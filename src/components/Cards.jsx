import React, { useEffect, useState } from "react";
import Element from "./Elements";
import domainInstance from "../lib/useAxios";
import { useGlobalContext } from "../hooks/useContext";
import Spinner from "./Spinner";
import ErrorBoundary from "../ErrorBoundary";

export default function Cards({ fetchUrl, headline }) {
  const { loading, movies, getMovies } = useGlobalContext();

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(fetchUrl);
    }, 1000);
    return () => clearTimeout(timerOut);
  }, [fetchUrl]);

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
              <div key={movie.id}>
                <Element movies={movie} />
              </div>
            ))}
          </div>
        </ErrorBoundary>
      )}
    </>
  );
}
