import React from "react";
import loading from "../assets/spinner.gif";

export default function Spinner() {
  return (
    <div className="text-center my-5">
      <img className="my-5" src={loading} alt="buffering" />
      <h1 className="my-1 ps-1">Loading...</h1>
    </div>
  );
}
