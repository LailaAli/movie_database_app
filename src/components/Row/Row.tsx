import React, { useState, useEffect } from "react";
import css from "./Row.module.scss";
import axios from "../../axios";
import requests from "../../request";

interface IRow {
   title: string;
   fetchUrl: string;
}

const base_url = "https://image.tmdb.org/t/p/original/";

export const Row: React.FC<IRow> = (props) => {
   const { title, fetchUrl } = props;
   const [movies, setMovies] = useState([]);
   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         console.log(request.data.results);
         return request;
      }
      fetchData();
   }, []);

   return (
      <div className={css.row}>
         <h2 className={css.rowTitle}>{title}</h2>
         <div className={css.rowContainer}>
            {movies.map((movie: any) => (
               <div className={css.movieParentContainer}>
                  <div className={css.movieContainer}>
                     <div className={css.posterContainer}>
                        <img
                           src={`${base_url}${movie.poster_path}`}
                           alt={movie.name}
                           className={css.posterImage}
                        />
                     </div>
                  </div>
                  <div className={css.movieInfo}>
                     <p className={css.date}>{movie.release_date}</p>
                     <p className={css.overview}>{movie.overview}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};