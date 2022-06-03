import cl from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../../router/routes";
import IconButton from "../../UI/buttons/IconButton/IconButton";
import scss from "./headerSearch.module.scss";

const HeaderSearch = () => {
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
    navigate(goToPage.search(search));
  };

  return (
    <div>
      <IconButton className={scss.button} onClick={handleOpen} />
      <div className={cl(scss.search, isOpen && scss.search_open)}>
        <div
          className={cl(scss.blackout)}
          onClick={handleClose}
          aria-hidden="true"
        />
        <form
          className={cl(scss.panel, isOpen && scss.panel_open)}
          onSubmit={handleSubmit}
        >
          <IconButton className={scss.button} type="submit" />
          <label className={scss.field}>
            <input
              className={scss.input}
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Поиск"
              autoComplete="off"
            />
          </label>
          <IconButton className={scss.close} onClick={handleClose} />
        </form>
      </div>
    </div>
  );
};

export default HeaderSearch;
