import React from "react";
import styles from "../MoviesPage/MoviesPage.module.css";

interface Props {}

const MoviesPage = (props: Props) => {
  return (
    <>
      <div className={styles.container}>
        <h1>Movies</h1>
      </div>
    </>
  );
};

export default MoviesPage;
