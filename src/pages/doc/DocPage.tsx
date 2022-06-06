import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useDocTitle } from "../../hooks/useDocTitle";
import { docs } from "../../utils/docs";
import { goToPage } from "../../router/routes";
import NotFoundPage from "../notFound/NotFoundPage";
import DocContent from "./content/DocContent";

const DocPage = () => {
  const { docId } = useParams();
  const title = `${docId && docs[docId]?.title}`;
  useDocTitle(`Документы - ${title}`);

  return (
    <>
      <Breadcrumbs
        crumbs={[{ title: "Информация", link: goToPage.info }, { title }]}
      />
      {docId && docs[docId] ? (
        <DocContent doc={docs[docId]} />
      ) : (
        <NotFoundPage title="Документ не найден" />
      )}
    </>
  );
};

export default DocPage;
