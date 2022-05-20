import { FC, useEffect, useState } from "react";
import { categoriesAPI } from "../../../API-data/categories/categoriesAPI";
import Loader from "../../../components/Loader/Loader";
import { Category } from "../../../types/categories";
import { TIMEOUT_API } from "../../../utils/constants";
import CreateCategoryCard from "./card/CreateCategoryCard";
import scss from "./createCategory.module.scss";

const CreateCategory: FC<{ onMount: () => void }> = ({ onMount }) => {
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined
  );

  useEffect(() => {
    onMount();
    setTimeout(() => {
      setCategories(categoriesAPI.getCategories());
    }, TIMEOUT_API);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className={scss.root}>
        <h2 className={scss.title}>Выберите категорию</h2>
        {categories ? (
          <ol className={scss.list}>
            {categories.map((category) => (
              <li key={category.id}>
                <CreateCategoryCard category={category} />
              </li>
            ))}
          </ol>
        ) : (
          <Loader blackout={false} />
        )}
      </section>
    </>
  );
};

export default CreateCategory;
