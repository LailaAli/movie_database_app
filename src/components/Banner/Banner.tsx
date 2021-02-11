import React, { useEffect, useState } from "react";
import css from "./Banner.module.scss";
import axios from "../../axios";
import requests from "../../request";

interface IBanner {
   title: string;
   onClick: () => void;
   description: string;
}

export const Banner: React.FC<IBanner> = (props) => {
   const { title, onClick, description } = props;

   const [movie, setMovie] = useState<any>([]);

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

   console.log(movie);

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
               <button className={css.button} onClick={onClick}>
                  Play
               </button>
               <p className={css.description}>{movie?.overview}</p>
            </div>
         </header>
         <div className={css.fadeBottom}></div>
      </>
   );
};
