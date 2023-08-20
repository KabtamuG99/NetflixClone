import React from "react";
import "./app.css";
import Row from "./Components/Row/Row";
import requests from "./requests/requests";
import Banner from "./Components/Banner/Banner";
import Nav1 from "./Components/Nav/Nav1";




function App() {
  return (
    <div className="app">
    <Nav1/>
      <Banner/>
      <Row tittle="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals}
      isLargeRow
      />
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
