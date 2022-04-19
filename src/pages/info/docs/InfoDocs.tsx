import { FC } from "react";
import { Link } from "react-router-dom";
import { Docs } from "../../../types/doc";
import { goToPage } from "../../../utils/routes";

const InfoDocs: FC<{ title: string; docs: Docs }> = ({ title, docs }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {Object.entries(docs).map(([id, { title }]) => (
          <li key={id}>
            <Link to={goToPage.doc(id)}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoDocs;
