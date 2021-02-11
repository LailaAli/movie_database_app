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

   const [movie, setMovie] = useState([]);

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

   return <header></header>;
};
