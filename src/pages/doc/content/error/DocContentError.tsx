import { FC } from "react";
import styles from "./docContentError.module.scss";

const DocContentError: FC<{ error?: string }> = ({
  error = "Ошибка загрузки",
}) => {
  return <p className={styles.title}>{error}</p>;
};

export default DocContentError;
