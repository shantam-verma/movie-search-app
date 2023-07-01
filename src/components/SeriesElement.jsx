import React, { useEffect } from "react";
import defaultImage from "../assets/default_poster.jpg";
import { IMG_URL } from "../config/useApiURL";
import Spinner from "./Spinner";
import ErrorBoundary from "../ErrorBoundary";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useContext";

export default function SeriesElement({ fetchUrl, headline }) {
  const { loading, seriesData, getMovies } = useGlobalContext();

  useEffect(() => {
    getMovies(fetchUrl, false, true);
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
            {seriesData.map((movie) => (
              <div key={movie.id}>
                <div
                  className="card text-bg-dark bg-transparent border border-0 position-relative mt-1"
                  style={{ width: "15rem" }}
                >
                  <NavLink
                    to={`/search/movie/${movie.original_title}/${movie.id}`}
                    className="elements-link"
                  >
                    <div className="text-center">
                      <img
                        src={
                          movie?.poster_path
                            ? `${IMG_URL}${movie?.poster_path}`
                            : defaultImage
                        }
                        className="card-img-top rounded-0 w-75"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-start ps-3">
                        {movie?.original_name}
                      </h4>
                      <p className="card-text">
                        <small className="text-body-dark ps-3">
                          Released: {movie?.first_air_date}
                        </small>
                      </p>
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-bg-light">
                      {movie?.vote_average.toFixed(1)}
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </ErrorBoundary>
      )}
    </>
  );
}
