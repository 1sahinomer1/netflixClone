import React, { useState, useEffect } from "react";
import requests from "../API/requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import SearchRow from "./SearchRow";
import "./MainScreen.css";
function MainScreen({ selectedFoto, selectedName }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className="main">
      <Nav
        selectedFoto={selectedFoto}
        selectedName={selectedName}
        search={search}
        setSearch={setSearch}
      />

      {search.length > 0 ? (
        <div>
          <SearchRow search={search} setSearch={setSearch} />
        </div>
      ) : (
        <div>
          <Banner />

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
      )}
    </div>
  );
}

export default MainScreen;
