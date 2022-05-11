import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categoriesAPI } from "../../API-data/categories/categoriesAPI";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/Loader/Loader";
import { goToPage } from "../../router/routes";
import { Category } from "../../types/categories";
import NotFoundPage from "../notFound/NotFoundPage";
import CreateError from "./error/CreateError";
import CreateForm from "./form/CreateForm";
import CreateCategory from "./intro/CreateCategory";

const CreatePage = () => {
  const [params] = useSearchParams();
  const category = params.get("category");
  const [curentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [result, setResult] = useState<"success" | "error" | undefined>(
    undefined
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (category) setCurrentCategory(categoriesAPI.getCategory(category));
  }, [category]);

  const handleSuccess = () => {
    setResult("success");
  };

  const handleError = () => {
    setResult("error");
  };

  const handleResultClear = () => {
    setResult(undefined);
  };

  const handleSetLoaded = (value: boolean) => {
    setLoaded(value);
  };

  return (
    <>
      {!category ? (
        <>
          <Breadcrumbs crumbs={[{ title: "Выбор категории" }]} />
          <CreateCategory />
        </>
      ) : !result ? (
        <>
          <Breadcrumbs
            crumbs={[
              { title: "Выбор категории", link: goToPage.create },
              { title: "Ввод данных" },
            ]}
          />
          {curentCategory ? (
            <>
              {loaded && <Loader type="fixed" />}
              <CreateForm
                category={curentCategory}
                onSucess={handleSuccess}
                onError={handleError}
                setLoaded={handleSetLoaded}
              />
            </>
          ) : (
            <NotFoundPage title="Ошибка категории" />
          )}
        </>
      ) : (
        <>
          <Breadcrumbs
            crumbs={[
              { title: "Выбор категории", link: goToPage.create },
              { title: "Ввод данных", onClick: handleResultClear },
              { title: "Сохранение" },
            ]}
          />
          {result === "error" ? (
            <CreateError onBack={handleResultClear} />
          ) : (
            result === "success" && <p>success</p>
          )}
        </>
      )}
    </>
  );
};

export default CreatePage;
