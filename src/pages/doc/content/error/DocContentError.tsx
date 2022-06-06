import { FC } from "react";
import scss from "./docContentError.module.scss";

const DocContentError: FC<{ error?: string }> = ({
  error = "Ошибка загрузки",
}) => {
  return <p className={scss.title}>{error}</p>;
};

export default DocContentError;
