import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../SearchBar/SearchBar.module.css";

interface Props {
  searchDescription: string;
}

const SearchBar = ({ searchDescription }: Props) => {
  console.log("test");
  return (
    <div className={styles.searchDiv}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      <input type="text" placeholder={searchDescription} />
    </div>
  );
};

export default SearchBar;
