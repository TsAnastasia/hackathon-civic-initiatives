import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { docs } from "../../utils/docs";
import { goToPage } from "../../utils/routes";
import NotFoundPage from "../notFound/NotFoundPage";
import DocContent from "./content/DocContent";

const DocPage = () => {
  const { docId } = useParams();

  return (
    <>
      <Breadcrumbs
        parents={[{ title: "Информация", link: goToPage.info }]}
        current={`${docId && docs[docId]?.title}`}
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
