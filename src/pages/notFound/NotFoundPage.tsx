import { FC } from "react";
import scss from "./notFoundPage.module.scss";
import NotFoundImage from "../../assets/images/notFound.svg";
import PageTitle from "../../components/PageTitle/PageTitle";

const NotFoundPage: FC<{ title?: string }> = ({
  title = "Страница не найдена",
}) => {
  return (
    <section className={scss.root}>
      <PageTitle className={scss.title}>{title}</PageTitle>
      <img src={NotFoundImage} alt="not found" className={scss.image} />
    </section>
  );
};

export default NotFoundPage;
