import React, { useState, useEffect } from "react";
import axios from "../API/axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="rowTitle">{title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            loading="lazy"
            height="150px"
            key={movie.id}
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
