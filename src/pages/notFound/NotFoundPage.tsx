import { FC } from "react";
import scss from "./notFoundPage.module.scss";
import NotFoundImage from "../../assets/images/notFound.svg";
import { useDocTitle } from "../../hooks/useDocTitle";

const NotFoundPage: FC<{ title?: string }> = ({
  title = "Страница не найдена",
}) => {
  useDocTitle(title);

  return (
    <section className={scss.root}>
      <h1 className={scss.title}>{title}</h1>
      <img src={NotFoundImage} alt="not found" className={scss.image} />
    </section>
  );
};

export default NotFoundPage;
