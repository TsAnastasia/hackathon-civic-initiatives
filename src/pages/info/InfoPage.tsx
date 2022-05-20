import PageTitle from "../../components/PageTitle/PageTitle";
import { legalDocs, serviceDocs } from "../../utils/docs";
import InfoDocs from "./docs/InfoDocs";
import scss from "./infoPage.module.scss";

const InfoPage = () => {
  return (
    <div className={scss.root}>
      <PageTitle className={scss.title}>Информация</PageTitle>
      <InfoDocs title="Использование сервиса" docs={serviceDocs} />
      <InfoDocs title="Правовая информация" docs={legalDocs} />
    </div>
  );
};

export default InfoPage;
