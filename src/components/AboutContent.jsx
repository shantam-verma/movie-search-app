import React from "react";

export default function AboutContent(props) {
  const { label, content } = props;
  return (
    <>
      <h4 className="card-title text-start text-light">{label}</h4>
      <p className="text-light my-3">{content}</p>
    </>
  );
}
