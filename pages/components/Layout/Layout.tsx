import React, { useState } from "react";
import styles from "./Layout.module.css";
import MenuBar from "../MenuBar/MenuBar";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";
import Trending from "../Trending/Trending";
import MoviesPage from "../MoviesPage/MoviesPage";
import Recommended from "../Recommended/Recommended";

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

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <MenuBar />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.searchContainer}>
            <SearchBar
              searchDescription={searchDescription}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </div>
          {route.pathname === "/" && (
            <div className={styles.trendingContainer}>
              <Trending page={movieArrayParams} />
            </div>
          )}
          {route.pathname === "/" && (
            <div className={styles.trendingContainer}>
              <Recommended />
            </div>
          )}
          {route.pathname === "/movies" && (
            <div className={styles.trendingContainer}>
              <MoviesPage
                page={movieArrayParams}
                title={"Movies"}
                searchFilter={searchText}
              />
            </div>
          )}
          {route.pathname === "/tv-series" && (
            <div className={styles.trendingContainer}>
              <MoviesPage
                page={movieArrayParams}
                title={"TV Series"}
                searchFilter={searchText}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
