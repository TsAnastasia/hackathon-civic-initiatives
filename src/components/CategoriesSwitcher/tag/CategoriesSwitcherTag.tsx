import cl from "classnames";
import { FC, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  addUserCategory,
  deleteUserCategory,
} from "../../../redux/userSlice/userSlice";
import { Category } from "../../../types/categories";
import scss from "./categoriesSwitcherTag.module.scss";

const CategoriesSwitcherTag: FC<{ category: Category }> = ({ category }) => {
  const { user_categories } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const isActive = user_categories.some((item) => item.id === category.id);

  const handleClick = useCallback(() => {
    if (isActive) dispatch(deleteUserCategory(category));
    else dispatch(addUserCategory(category));
  }, [isActive, category, dispatch]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cl(scss.tag, isActive && scss.active)}
    >
      {category.name}
    </button>
  );
};

export default CategoriesSwitcherTag;
