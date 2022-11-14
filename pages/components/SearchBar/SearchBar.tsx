import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../SearchBar/SearchBar.module.css";

interface Props {
  searchDescription: string;
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar = ({ searchDescription, searchText, setSearchText }: Props) => {
  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.searchDiv}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      <input
        type="text"
        placeholder={searchDescription}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
