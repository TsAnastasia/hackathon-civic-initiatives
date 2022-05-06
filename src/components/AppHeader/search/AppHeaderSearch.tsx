import cl from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../../router/routes";
import IconButton from "../../UI/buttons/IconButton/IconButton";
import styles from "./appHeaderSearch.module.scss";

const AppHeaderSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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
    if (!search) return;
    setIsOpen(false);
    setSearch("");
    navigate(goToPage.search);
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
        <form
          className={cl(styles.panel, isOpen && styles.panel_open)}
          onSubmit={handleSubmit}
        >
          <IconButton className={styles.button} type="submit" />
          <label className={styles.field}>
            <input
              className={styles.input}
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Поиск"
              autoComplete="off"
            />
          </label>
          <IconButton className={styles.close} onClick={handleClose} />
        </form>
      </div>
    </div>
  );
};

export default AppHeaderSearch;
