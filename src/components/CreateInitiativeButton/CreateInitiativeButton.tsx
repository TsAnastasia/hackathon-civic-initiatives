import cl from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { goToPage } from "../../router/routes";
import scss from "./createInitiativeButton.module.scss";

const CreateInitiativeButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={scss.root}>
      <Link className={cl(scss.button, className)} to={goToPage.create}>
        Создать инициативу
      </Link>
    </section>
  );
};

export default CreateInitiativeButton;
