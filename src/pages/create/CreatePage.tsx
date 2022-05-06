import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categoriesAPI } from "../../API-data/categories/categoriesAPI";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { goToPage } from "../../router/routes";
import { Category } from "../../types/categories";
import NotFoundPage from "../notFound/NotFoundPage";
import CreateForm from "./form/CreateForm";
import CreateCategory from "./intro/CreateCategory";

const CreatePage = () => {
  const [params] = useSearchParams();
  const category = params.get("category");
  const [curentCategory, setCurrentCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (category) setCurrentCategory(categoriesAPI.getCategory(category));
  }, [category]);

  return (
    <>
      {!category ? (
        <>
          <Breadcrumbs parents={[]} current={"Выбор категории"} />
          <CreateCategory />
        </>
      ) : (
        <>
          <Breadcrumbs
            parents={[{ title: "Выбор категории", link: goToPage.create }]}
            current={"Ввод данных"}
          />
          {curentCategory ? (
            <CreateForm category={curentCategory} />
          ) : (
            <NotFoundPage title="Ошибка категории" />
          )}
        </>
      )}
    </>
  );
};

export default CreatePage;
