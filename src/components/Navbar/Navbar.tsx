import React, { useEffect, useState } from "react";
import css from "./Navbar.module.scss";
import classes from "classnames";

export const Navbar = () => {
   const [handleShow, setHandleshow] = useState(false);

   // Listener for sticky nav
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            setHandleshow(true);
         } else setHandleshow(false);
      });
      return () => {
         window.removeEventListener("scroll", () => console.log(""));
      };
   }, []);
   return (
      <div className={classes(css.nav, handleShow && css.background)}>
         <img
            src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
            alt=""
            className={css.logo}
         />
      </div>
   );
};
