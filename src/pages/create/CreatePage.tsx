import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categoriesAPI } from "../../API-data/categories/categoriesAPI";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch } from "../../hooks/redux";
import { clearCreateData } from "../../redux/initiativesSlice/initiativesSlice";
import { goToPage } from "../../router/routes";
import { Category } from "../../types/categories";
import { TIMEOUT_API } from "../../utils/constants";
import NotFoundPage from "../notFound/NotFoundPage";
import CreateError from "./error/CreateError";
import CreateForm from "./form/CreateForm";
import CreateCategory from "./intro/CreateCategory";
import CreateSuccess from "./success/CreateSuccess";

const CreatePage = () => {
  const [params] = useSearchParams();
  const category = params.get("category");
  const dispatch = useAppDispatch();
  const [curentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [result, setResult] = useState<"success" | "error" | undefined>(
    undefined
  );
  const [loaded, setLoaded] = useState(false);

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

  const handleRepeat = () => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
      setResult("success");
    }, TIMEOUT_API);
  };

  useEffect(() => {
    if (category) setCurrentCategory(categoriesAPI.getCategory(category));
  }, [category]);

  useEffect(() => {
    return () => {
      dispatch(clearCreateData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!category ? (
        <>
          <Breadcrumbs crumbs={[{ title: "Выбор категории" }]} />
          <CreateCategory onMount={handleResultClear} />
        </>
      ) : (
        <>
          {loaded && <Loader type="fixed" />}
          {!result ? (
            <>
              <Breadcrumbs
                crumbs={[
                  { title: "Выбор категории", link: goToPage.create },
                  { title: "Ввод данных" },
                ]}
              />
              {curentCategory ? (
                <>
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
                <CreateError
                  onBack={handleResultClear}
                  onRepeat={handleRepeat}
                />
              ) : (
                result === "success" && <CreateSuccess />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default CreatePage;
