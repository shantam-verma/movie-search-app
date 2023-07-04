import { useEffect } from "react";
import { useGlobalContext } from "../hooks/useContext";
import { IMG_URL } from "../config/useApiURL";
import defaultImage from "../assets/default_poster.jpg";
import AboutContent from "../components/AboutContent";

export default function AboutMovie() {
  const { selectedMovie, setSelectedMovie } = useGlobalContext();
  const win = window.sessionStorage;
  useEffect(() => {
    const getSingleData = win.getItem("aboutPage");
    const parsedData = JSON.parse(getSingleData);
    setSelectedMovie(parsedData);
    console.log(parsedData);
  }, []);

  const revenueFormatted = Intl.NumberFormat("en-US");
  return (
    <div className="p-4 pt-0">
      <div className="my-card">
        <div className="card text-bg-dark about-backdrop ">
          <img
            src={
              selectedMovie?.poster_path
                ? `${IMG_URL}${selectedMovie?.backdrop_path}`
                : defaultImage
            }
            className="card-img single_poster"
            alt="..."
          />
          <div className="card-img-overlay mt-5">
            <h5
              className="card-title header-title"
              style={{ fontWeight: "400" }}
            >
              {selectedMovie?.original_title}
            </h5>
            <p className="card-text">
              {selectedMovie?.vote_average}
              <i className="fa-solid fa-star"></i>
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
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="card-title text-light featurette-heading lh-1 mb-4">
            {selectedMovie?.original_title}
          </h2>
          <div className="card-bomoviesdy">
            <AboutContent
              label="Description"
              content={selectedMovie?.overview}
            />
            <AboutContent
              label="Released Date"
              content={`${selectedMovie?.release_date}`}
            />
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={
              selectedMovie?.poster_path
                ? `${IMG_URL}${selectedMovie?.poster_path}`
                : defaultImage
            }
            className="d-block mx-lg-auto img-fluid"
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
