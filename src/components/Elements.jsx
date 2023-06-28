import React from "react";
import defaultImage from "../assets/default_poster.jpg";
import { NavLink } from "react-router-dom";
import { IMG_URL } from "../config/useApiURL";

export default function Items({ movies }) {
  return (
    <>
      <div
        className="card text-bg-dark bg-transparent border border-0 position-relative mt-1"
        style={{ width: "15rem" }}
      >
        <NavLink
          to={`/search/movie/${movies.original_title}/${movies.id}`}
          className="elements-link"
        >
          <div className="text-center">
            <img
              src={
                movies?.poster_path
                  ? `${IMG_URL}${movies?.poster_path}`
                  : defaultImage
              }
              className="card-img-top rounded-0 w-75"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h4 className="card-title text-start ps-3">
              {movies?.original_title}
            </h4>
            <p className="card-text">
              <small className="text-body-dark ps-3">
                Released: {movies?.release_date}
              </small>
            </p>
          </div>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-bg-light">
            {movies?.vote_average.toFixed(1)}
            <i className="fa-solid fa-star"></i>
          </span>
        </NavLink>
      </div>
    </>
  );
}
