import { useParams } from "react-router-dom";
import { docs } from "../../utils/docs";
import DocContent from "./content/DocContent";

const DocPage = () => {
  const { docId } = useParams();

  return docId && docs[docId] ? (
    <DocContent doc={docs[docId]} />
  ) : (
    <div>
      <p>Book not found</p>
    </div>
  );
};

export default DocPage;
