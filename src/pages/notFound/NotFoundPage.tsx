import { FC } from "react";
import styles from "./notFoundPage.module.scss";
import NotFoundImage from "../../assets/images/notFound.svg";
import { useDocTitle } from "../../hooks/useDocTitle";

const NotFoundPage: FC<{ title?: string }> = ({
  title = "Страница не найдена",
}) => {
  useDocTitle(title);

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <img src={NotFoundImage} alt="not found" className={styles.image} />
    </section>
  );
};

export default NotFoundPage;
