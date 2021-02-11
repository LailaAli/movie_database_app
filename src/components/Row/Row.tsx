import React, { useState, useEffect } from "react";
import css from "./Row.module.scss";
import classes from "classnames";
import axios from "../../axios";
import YouTube from "react-youtube";

const movieTrailer = require("movie-trailer");

interface IRow {
   title: string;
   fetchUrl: string;
   isRowLarge?: boolean;
}

const base_url = "https://image.tmdb.org/t/p/original/";

const opts: any = {
   height: "390",
   width: "100%",
   playerVars: {
      autoplay: 1,
   },
};

export const Row: React.FC<IRow> = (props) => {
   const { title, fetchUrl, isRowLarge } = props;
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState<any>("");
   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, []);

   const handleClick = (movie: any) => {
      if (trailerUrl) {
         setTrailerUrl("");
      } else {
         movieTrailer(movie?.title || "")
            .then((url: any) => {
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v"));
            })
            .catch((error: string) => console.log(error));
         console.log(trailerUrl);
      }
   };

   return (
      <div className={css.row}>
         <h2 className={css.rowTitle}>{title}</h2>
         <div className={css.rowContainer}>
            {movies.map((movie: any) => (
               <div key={movie.id} className={css.movieParentContainer}>
                  <div className={css.movieContainer}>
                     <div
                        className={classes(
                           css.posterContainer,
                           isRowLarge && css.largePoster
                        )}
                     >
                        <img
                           src={`${base_url}${movie.poster_path}`}
                           alt={movie.name}
                           className={css.posterImage}
                           onClick={() => handleClick(movie)}
                        />
                     </div>
                  </div>
                  <div
                     className={classes(
                        css.movieInfo,
                        isRowLarge && css.largePoster
                     )}
                  >
                     <p className={css.date}>{movie.release_date}</p>
                     <p className={css.overview}>{movie.overview}</p>
                  </div>
               </div>
            ))}
         </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
   );
};
