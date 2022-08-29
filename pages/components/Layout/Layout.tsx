import React from "react";
import styles from "./Layout.module.css";
import MenuBar from "../MenuBar/MenuBar";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";
import Trending from "../Trending/Trending";

interface Props {}

const Layout = (props: Props) => {
  const route = useRouter();

  const searchDescription =
    route.pathname === "/movies"
      ? "Search for Movies"
      : route.pathname === "/tv-series"
      ? "Search for TV series"
      : route.pathname === "/bookmarked"
      ? "Search for Bookmarked media"
      : "Search for Movies or TV series";

  const movieArrayParams =
    route.pathname === "/movies"
      ? "Movie"
      : route.pathname === "/tv-series"
      ? "TV Series"
      : route.pathname === "/bookmarked"
      ? "Bookmarked"
      : "/";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <MenuBar />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.searchContainer}>
            <SearchBar searchDescription={searchDescription} />
          </div>
          <div className={styles.trendingContainer}>
            <Trending page={movieArrayParams} />
          </div>
          {/* <div className={styles.allMoviesContainer}>
            <SearchBar />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
