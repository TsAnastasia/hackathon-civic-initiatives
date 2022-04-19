import { FC } from "react";
import { Link } from "react-router-dom";
import { Docs } from "../../../types/doc";
import { goToPage } from "../../../utils/routes";
import styles from "./infoDocs.module.scss";

const InfoDocs: FC<{ title: string; docs: Docs }> = ({ title, docs }) => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {Object.entries(docs).map(([id, { title }]) => (
          <li key={id} className={styles.item}>
            <Link to={goToPage.doc(id)} className={styles.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoDocs;
