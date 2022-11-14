import React from "react";
import Image from "next/image";
import styles from "./MenuBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faHouse,
  faBookmark,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const MenuBar = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faClapperboard} className={styles.logo} />
        <Link href="/">
          <a>
            <FontAwesomeIcon
              icon={faHouse}
              className={router.pathname === "/" ? styles.active : ""}
            />
          </a>
        </Link>
        <Link href="/movies">
          <a>
            <FontAwesomeIcon
              icon={faFilm}
              className={router.pathname === "/movies" ? styles.active : ""}
            />
          </a>
        </Link>
        <Link href="/tv-series">
          <a>
            <FontAwesomeIcon
              icon={faTv}
              className={router.pathname === "/tv-series" ? styles.active : ""}
            />
          </a>
        </Link>
        <Link href="/bookmarked">
          <a>
            <FontAwesomeIcon
              icon={faBookmark}
              className={router.pathname === "/bookmarked" ? styles.active : ""}
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default MenuBar;
