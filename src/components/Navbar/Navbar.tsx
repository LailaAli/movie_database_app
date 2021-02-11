import React, { useEffect, useState } from "react";
import css from "./Navbar.module.scss";
import classes from "classnames";
import { ReactComponent as Logo } from "../../assets/logo-13.svg";

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
         <Logo className={css.logo} />
      </div>
   );
};
