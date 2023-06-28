import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import useApiURL from "../config/useApiURL";
import AboutMovie from "./AboutMovie";

export default function Home() {
  const { fetchTopMovies, fetchTopRated } = useApiURL();
  return (
    <ProtectedRoute>
      <NavBar />
      <Carousel fetchUrl={fetchTopRated} />
      <Cards
        headline="top rated movies at Max Entertainment"
        fetchUrl={fetchTopMovies}
      />
    </ProtectedRoute>
  );
}
