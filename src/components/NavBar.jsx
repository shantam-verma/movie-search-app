import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalAuth } from "../hooks/useAuthContext";
import { useGlobalContext } from "../hooks/useContext";

export default function NavBar() {
  const { search, setSearch } = useGlobalContext();
  const { user, logout } = useGlobalAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = async () => {
    await logout()
      .then(() => navigate("/login"))
      .catch((err) => console.log(err));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(search);
    console.info(search);
    navigate("/search/movie");
  };

  return (
    <>
      <nav className="navbar navbar1 fixed-top navbar-dark bg-dark-nav head py-1">
        <div className="container-fluid max">
          <a className="navbar-brand" href="/tv">
            Max Entertainment
          </a>
          <a className="navbar-brand" href="/">
            Max
          </a>
        </div>
      </nav>
      <nav className="navbar navbar2 navbar-dark bg-transparent mt-4">
        <div className="container-fluid">
          <div className="navbar-brand"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header mt-4">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                {user && `Hi ${user.displayName}`}
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/movies"
                  >
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/series">
                    Series
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/trending">
                    Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/upcomings">
                    Upcoming
                  </a>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control me-2"
                  type="search"
                  placeholder="i.e. Jurassic Park"
                  aria-label="Search"
                />
                <button
                  onClick={handleSearch}
                  className="btn btn-outline-light"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start my-4">
                <button
                  onClick={handleLogin}
                  className="btn btn-success me-md-2 px-4"
                  type="button"
                >
                  Sign in
                </button>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-secondary px-4"
                  type="button"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
