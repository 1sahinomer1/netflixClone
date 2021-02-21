import React from "react";
import requests from "../API/requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import "./MainScreen.css";
function MainScreen({ selectedFoto, selectedName }) {
  return (
    <div className="main">
      <Nav selectedFoto={selectedFoto} selectedName={selectedName} />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Gündemdekiler" fetchUrl={requests.fetchTrending} />
      <Row
        title="En çok değerlendirilenler"
        fetchUrl={requests.fetchTopRated}
      />
      <Row title="Aksiyon Filmleri" fetchUrl={requests.fetchActionMovies} />
      <Row title="Komedi Filmleri" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Korku Filmleri" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantik" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Belgesel" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default MainScreen;
