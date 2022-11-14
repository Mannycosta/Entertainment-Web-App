import React from "react";
import styles from "../MoviesPage/MoviesPage.module.css";
import MovieData from "../../MovieData/MovieData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../SearchBar/SearchBar";

interface Props {
  page: string;
  title?: string;
  searchFilter: string;
}

const MoviesPage = ({ page, title, searchFilter }: Props) => {
  const movies = MovieData.filter((movie) => movie.category === page);

  const searchedMovies = movies.filter(
    (movie) =>
      movie.title.includes(searchFilter) ||
      movie.title.toLowerCase().includes(searchFilter)
  );

  const displayedMovies = searchedMovies.map((movie) => {
    const icon =
      movie.category === "Movie" ? (
        <FontAwesomeIcon icon={faFilm} size="xs" />
      ) : (
        <FontAwesomeIcon icon={faTv} size="xs" />
      );

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
        <h1>{title}</h1>
        <div className={styles.movieContainer}>{displayedMovies}</div>
      </div>
    </>
  );
};

export default MoviesPage;
