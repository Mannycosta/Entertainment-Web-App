import React from "react";
import styles from "../Trending/Trending.module.css";
import MovieData from "../../MovieData/MovieData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";

interface Props {
  page: string;
}

const Trending = ({ page }: Props) => {
  const moviesByPage =
    page === "Movie" || page === "TV Series"
      ? MovieData.filter((movie) => movie.category === `${page}`)
      : page === "Bookmarked"
      ? MovieData.filter((movie) => movie.isBookmarked)
      : MovieData;

  const trendingMovies = MovieData.filter((movie) => movie.isTrending);

  const movies = trendingMovies.map((movie) => {
    const icon =
      movie.category === "Movie" ? (
        <FontAwesomeIcon icon={faFilm} size="xs" />
      ) : (
        <FontAwesomeIcon icon={faTv} size="xs" />
      );

    return (
      <div className={styles.movieBox}>
        <div className={styles.imageContainer}>
          <img
            src={`${movie.thumbnail.trending?.large.slice(1)}`}
            width={470}
            height={230}
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
    <div className={styles.container}>
      <h1>Trending</h1>
      <div className={styles.movieContainer}>{movies}</div>
    </div>
  );
};

export default Trending;
