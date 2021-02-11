import React from "react";
import css from "./App.module.scss";
import { Row } from "./components/Row/Row";
import requests from "./request";

const rowData = [
   {
      title: "Now Playing",
      fetchUrl: requests.fetchNowPlaying,
      isRowLarge: true,
   },
   { title: "Upcoming", fetchUrl: requests.fetchUpcoming },
   { title: "Popular", fetchUrl: requests.fetchPopular },
   { title: "Top Rated", fetchUrl: requests.fetchTopRated },
   { title: "Action", fetchUrl: requests.fetchActionMovies },
   { title: "Adventure", fetchUrl: requests.fetchAdventureMovies },
   { title: "Comedy", fetchUrl: requests.fetchComedyMovies },
   { title: "Crime", fetchUrl: requests.fetchCrimeMovies },
   { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
   { title: "Drama", fetchUrl: requests.fetchDramaMovies },
   { title: "Horror", fetchUrl: requests.fetchHorrorMovies },
   { title: "Romance", fetchUrl: requests.fetchRomanceMovies },
   { title: "SciFi", fetchUrl: requests.fetchSciFiMovies },
];

export const App = () => {
   return (
      <div className={css.app}>
         <div className={css.moviesDisplay}>
            {rowData.map((item) => (
               <Row
                  title={item.title}
                  fetchUrl={item.fetchUrl}
                  isRowLarge={item.isRowLarge}
                  key={item.title}
               />
            ))}
         </div>
      </div>
   );
};

export default App;
