import { useDocTitle } from "../../hooks/useDocTitle";
import { legalDocs, serviceDocs } from "../../utils/docs";
import InfoDocs from "./docs/InfoDocs";
import scss from "./infoPage.module.scss";

const InfoPage = () => {
  useDocTitle("Информация");

  return (
    <div className={scss.root}>
      <h1 className={scss.title}>Информация</h1>
      <InfoDocs title="Использование сервиса" docs={serviceDocs} />
      <InfoDocs title="Правовая информация" docs={legalDocs} />
    </div>
  );
};

export default InfoPage;
