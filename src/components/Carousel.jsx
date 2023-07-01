import React, { useEffect } from "react";
import { useGlobalContext } from "../hooks/useContext";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export default function Carousel({ fetchUrl }) {
  const { carouselData, getMovies } = useGlobalContext();

  console.info({ carouselData });
  useEffect(() => {
    getMovies(fetchUrl, true, false);
  }, [fetchUrl]);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-wrap="true"
    >
      <div className="carousel-inner">
        {carouselData?.map((movie, index) => (
          <div
            className={`carousel-item${index === 0 ? " active" : ""}`}
            data-bs-interval="2000"
            key={movie.id}
          >
            <div className="img-gradient">
              <img
                src={`${IMG_URL}${movie.backdrop_path}`}
                className="d-block carousel-image carousel-image"
                alt="..."
              />
            </div>
            <div className="card-img-overlay carousel-caption d-none d-md-block">
              <h1 className="header-title" style={{ fontWeight: "400" }}>
                {movie.original_title}
              </h1>
              <p>
                {movie.vote_average} <i className="fa-solid fa-star"></i>
              </p>
              <button type="button" className="btn btn-info btn-mg">
                <i className="fa-solid fa-play pe-1"></i> play
              </button>
              <button type="button" className="btn btn-secondary btn-mg ms-3">
                <i className="fa-sharp fa-solid fa-circle-play pe-1"></i> watch
                trailer
              </button>

              {/* <p>{movie.overview}</p> */}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide="next"
      >
        <span className="carousel-control-next" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
