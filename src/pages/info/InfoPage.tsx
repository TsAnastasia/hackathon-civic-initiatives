import { legalDocs, serviceDocs } from "../../utils/docs";
import InfoDocs from "./docs/InfoDocs";

const InfoPage = () => {
  return (
    <>
      <h1>Info page</h1>
      <InfoDocs title="Использование сервиса" docs={serviceDocs} />
      <InfoDocs title="Правовая информация" docs={legalDocs} />
    </>
  );
};

export default InfoPage;
