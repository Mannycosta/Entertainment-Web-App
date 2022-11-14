import React, { useState } from "react";
import styles from "../Trending/Trending.module.css";
import MovieData from "../../MovieData/MovieData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

interface Props {
  page: string;
}

const Trending = ({ page }: Props) => {
  // const moviesByPage =
  //   page === "Movie" || page === "TV Series"
  //     ? MovieData.filter((movie) => movie.category === `${page}`)
  //     : page === "Bookmarked"
  //     ? MovieData.filter((movie) => movie.isBookmarked)
  //     : MovieData;

  const trendingMovies = MovieData.filter((movie) => movie.isTrending);

  const movies = trendingMovies.map((movie) => {
    const icon =
      movie.category === "Movie" ? (
        <FontAwesomeIcon icon={faFilm} size="xs" />
      ) : (
        <FontAwesomeIcon icon={faTv} size="xs" />
      );

    return (
      <div className={styles.movieBox} key={uuidv4()}>
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

  const [count, setCount] = useState(0);

  const leftButtonClick = () => {
    return count < 3 && setCount(count + 1);
  };

  const rightButtonClick = () => {
    return count > 0 && setCount(count - 1);
  };

  let moviePosition =
    count === 0
      ? "start"
      : count === 1
      ? "firstClick"
      : count === 2
      ? "secondClick"
      : count === 3
      ? "thirdClick"
      : "";

  const isLeftDisabled = count === 0 ? "disabled" : "";
  const isRightDisabled = count === 3 ? "disabled" : "";

  return (
    <>
      <div className={styles.container}>
        <h1>Trending</h1>
        <div className={`${styles.movieContainer} ${styles[moviePosition]}`}>
          {movies}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.scrollBtn} ${styles.scrollBtnLeft} ${styles[isLeftDisabled]}`}
          onClick={rightButtonClick}
          disabled={count === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button
          className={`${styles.scrollBtn} ${styles.scrollBtnRight} ${styles[isRightDisabled]}`}
          onClick={leftButtonClick}
          disabled={count === 3}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
    </>
  );
};

export default Trending;
