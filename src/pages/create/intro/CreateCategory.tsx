import { useEffect, useState } from "react";
import { categoriesAPI } from "../../../API-data/categories/categoriesAPI";
import AppLoader from "../../../components/AppLoader/AppLoader";
import { Category } from "../../../types/categories";
import { TIMEOUT_API } from "../../../utils/constants";
import CreateCategoryCard from "./card/CreateCategoryCard";
import scss from "./createCategory.module.scss";

const CreateCategory = () => {
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeout(() => {
      setCategories(categoriesAPI.getCategories());
    }, TIMEOUT_API);
  }, []);

  return (
    <>
      <section className={scss.root}>
        <h1 className={scss.title}>Выберите категорию</h1>
        {categories ? (
          <ol className={scss.list}>
            {categories.map((category) => (
              <li key={category.id}>
                <CreateCategoryCard category={category} />
              </li>
            ))}
          </ol>
        ) : (
          <AppLoader />
        )}
      </section>
    </>
  );
};

export default CreateCategory;
