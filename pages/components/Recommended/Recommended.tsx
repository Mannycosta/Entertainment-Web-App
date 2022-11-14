import React from "react";
import styles from "../MoviesPage/MoviesPage.module.css";
import MovieData from "../../MovieData/MovieData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

interface Props {}

const Recommended = ({}: Props) => {
  const displayedMovies = MovieData.map((movie) => {
    const icon = <FontAwesomeIcon icon={faFilm} size="xs" />;
    return (
      <div key={uuidv4()}>
        <div className={styles.imageContainer}>
          <img
            src={`${movie.thumbnail.regular.large.slice(1)}`}
            width={280}
            height={174}
          />
        </div>
        <div className={styles.details}>
          <p>{movie.year}</p>
          <p>
            {icon} {movie.category}
          </p>
          <p>{movie.rating}</p>
        </div>
        <p className={styles.title}>{movie.title}</p>
      </div>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <h1>Recommended for you</h1>
        <div className={styles.movieContainer}>{displayedMovies}</div>
      </div>
    </>
  );
};

export default Recommended;
