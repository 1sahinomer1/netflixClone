import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

import axios from "../API/axios";
import requests from "../API/requests";

import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(request);
    }

    fetchData();
  }, []);

  //shorten if the description is too long
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.tittle || movie?.name || movie?.original_name}
        </h1>
        <h1 className="bannerDescription">{truncate(movie?.overview, 300)}</h1>
        <div className="bannerButtons">
          <button className="playButton">
            <BsFillPlayFill size="20px" color="black" />
            <span className="play">Oynat</span>
          </button>
          <button className="informationButton">
            <HiOutlineInformationCircle size="20px" />
            <span className="information"> Daha Fazla Bilgi</span>
          </button>
        </div>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;
