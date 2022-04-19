import cl from "classnames";
import React, { useState } from "react";
import IconButton from "../../UI/buttons/IconButton/IconButton";
import styles from "./appHeaderSearch.module.scss";

const AppHeaderSearch = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div>
      <IconButton className={styles.button} onClick={handleOpen} />
      <div className={cl(styles.search, isOpen && styles.search_open)}>
        <div
          className={cl(styles.blackout)}
          onClick={handleClose}
          aria-hidden="true"
        />
        <form className={styles.panel} onSubmit={handleSubmit}>
          <IconButton className={styles.button} type="submit" />
          <label>
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
            />
          </label>
          <IconButton className={styles.close} onClick={handleClose} />
        </form>
      </div>
    </div>
  );
};

export default AppHeaderSearch;
