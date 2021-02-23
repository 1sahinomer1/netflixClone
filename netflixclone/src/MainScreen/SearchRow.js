import React, { useState, useEffect } from "react";

import "./Row.css";

function SearchRow({ search, setSearch }) {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=7d10e9133e40db8a26d7ee976e6795cc&query=";
  const [movies, setMovies] = useState([]);
  let title = "İlgili içeriğe göz atın";
  useEffect(() => {
    fetch(SEARCH_API + search)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, [search]);
  return (
    <div className="search">
      <div className="row">
        <h2 className="rowTitle">{title}</h2>
        <div className="rowPosters">
          {movies
            .filter((movie) => movie.backdrop_path)
            .map((movie) => (
              <img
                loading="lazy"
                height="150px"
                key={movie.id}
                className={"rowPoster"}
                src={`${IMG_API}${movie.backdrop_path}`}
                alt={movie.name}
              ></img>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchRow;
