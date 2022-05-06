import { FC } from "react";
import { Link } from "react-router-dom";
import { Docs } from "../../../types/doc";
import { goToPage } from "../../../router/routes";
import scss from "./infoDocs.module.scss";

const InfoDocs: FC<{ title: string; docs: Docs }> = ({ title, docs }) => {
  return (
    <section className={scss.root}>
      <h2 className={scss.title}>{title}</h2>
      <ul className={scss.list}>
        {Object.entries(docs).map(([id, { title }]) => (
          <li key={id} className={scss.item}>
            <Link to={goToPage.doc(id)} className={scss.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoDocs;
