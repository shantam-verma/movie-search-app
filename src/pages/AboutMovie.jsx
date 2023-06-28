import React, { useEffect } from "react";
import { useGlobalContext } from "../hooks/useContext";
// import { IMG_URL } from "../config/useApiURL";
// import defaultImage from "../assets/default_poster.jpg";

export default function AboutMovie({ fetchUrl }) {
  const { movies, getMovies } = useGlobalContext();

  useEffect(() => {
    getMovies(fetchUrl);
  }, [fetchUrl]);
  return (
    <div className="p-4 pt-0">
      <div className="my-card">
        <div class="card text-bg-dark about-backdrop ">
          <img
            src="https://image.tmdb.org/t/p/original/7e9MVGg8efOhoA2R9XhZcGWTC5Z.jpg"
            class="card-img single_poster"
            alt="..."
          />
          <div class="card-img-overlay mt-5">
            <h5 class="card-title header-title" style={{ fontWeight: "400" }}>
              Card title
            </h5>
            <p class="card-text">
              8<i className="fa-solid fa-star"></i>
            </p>
            <button type="button" className="btn btn-info btn-mg">
              <i className="fa-solid fa-play pe-1"></i> play
            </button>
            <button type="button" className="btn btn-secondary btn-mg ms-3">
              <i className="fa-sharp fa-solid fa-circle-play pe-1"></i> watch
              trailer
            </button>
          </div>
        </div>
      </div>
      <h2 className="section-header my-5 border-info ps-1">About</h2>
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="card-title text-light featurette-heading lh-1">
            Oh yeah, it’s that good.
          </h2>
          <p class="text-light my-3">Opposites react.</p>
          <div className="card-body">
            <h4 className="card-title text-start text-light">Description</h4>
            <p class="text-light my-3">
              In a city where fire, water, land and air residents live together,
              a fiery young woman and a go-with-the-flow guy will discover
              something elemental: how much they have in common.
            </p>
            <h4 className="card-title text-start text-light">Genre :</h4>
            <p class="text-light my-3">Animation Comedy Family Fantasy</p>
            <h4 className="card-title text-start text-light">
              Revenue Earned : $
            </h4>
            <p class="text-light my-3">48000000</p>
            <h4 className="card-title text-start text-light">Status : </h4>
            <p class="text-light my-3">Released</p>
          </div>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            src="https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
