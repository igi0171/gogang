import React from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import styles from "./Header.module.css";

const Header = (props) => {
  const data = useSearchContext().data;

  const Greeting = (props) => {
    return (
      <h1 className={styles.headerText}>
        <span className={styles.spanText}>Hello, </span>
        {props.isLoggedIn === true ? (
          <span> {props.username}</span>
        ) : (
          <span> Stranger</span>
        )}
      </h1>
    );
  };

  const CityName = (props) => {
    return (
      <h1 className={styles.headerText}>
        {props.city}, <span className={styles.spanText}>{props.country}</span>
      </h1>
    );
  };

  return (
    <div className={styles.headerContainer}>
      {window.location.pathname === "/" ? (
        <Greeting isLoggedIn={false} username={"Suzu"} />
      ) : (
        <CityName city={"tokyo"} country={"Japan"} />
      )}
    </div>
  );
};

export default Header;
