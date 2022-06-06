import { FC } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../../../types/categories";
import scss from "./createCategoryCard.module.scss";

const CreateCategoryCard: FC<{ category: Category }> = ({ category }) => {
  return (
    <Link to={`?category=${category.id}`} className={scss.link}>
      <figure className={scss.root}>
        <img src={category.icon} alt={category.name} className={scss.image} />
        <figcaption className={scss.caption}>{category.name}</figcaption>
      </figure>
    </Link>
  );
};

export default CreateCategoryCard;
