import { useEffect, useState } from "react";
import { categoriesAPI } from "../../API-data/categories/categoriesAPI";
import { Category } from "../../types/categories";
import { TIMEOUT_API } from "../../utils/constants";
import CategoriesSwitcherTag from "./tag/CategoriesSwitcherTag";
import scss from "./categoriesSwitcher.module.scss";
import { scrollOnWheel } from "../../utils/scroll";

const CategoriesSwitcher = () => {
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeout(() => {
      setCategories(categoriesAPI.getCategories());
    }, TIMEOUT_API);
  }, []);

  return (
    <section className={scss.root}>
      {categories ? (
        <ul className={scss.list} onWheel={scrollOnWheel}>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoriesSwitcherTag category={category} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={scss.message}>Загрузка ...</p>
      )}
    </section>
  );
};

export default CategoriesSwitcher;
