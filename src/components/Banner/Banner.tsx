import React, { useEffect, useState } from "react";
import css from "./Banner.module.scss";
import axios from "../../axios";
import requests from "../../request";
import YouTube from "react-youtube";

const movieTrailer = require("movie-trailer");

const opts: any = {
   height: "390",
   width: "100%",
   playerVars: {
      autoplay: 1,
   },
};

export const Banner: React.FC = (props) => {
   const [movie, setMovie] = useState<any>([]);
   const [trailerUrl, setTrailerUrl] = useState<any>("");

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchPopular);
         setMovie(
            request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
            ]
         );
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
      }
   };

   return (
      <>
         <header
            className={css.banner}
            style={{
               backgroundSize: "cover",
               backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
               backgroundPosition: "center",
            }}
         >
            <div className={css.bannerContents}>
               <h1 className={css.title}>
                  {movie?.title || movie?.name || movie?.original_name}
               </h1>
               <button
                  className={css.button}
                  onClick={() => handleClick(movie)}
               >
                  Play
               </button>
               <p className={css.description}>{movie?.overview}</p>
            </div>
            {trailerUrl && (
               <YouTube
                  videoId={trailerUrl}
                  opts={opts}
                  className={css.trailer}
               />
            )}
         </header>
         <div className={css.fadeBottom}></div>
      </>
   );
};
