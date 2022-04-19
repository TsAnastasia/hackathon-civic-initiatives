import { legalDocs, serviceDocs } from "../../utils/docs";
import InfoDocs from "./docs/InfoDocs";
import styles from "./infoPage.module.scss";

const InfoPage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Информация</h1>
      <InfoDocs title="Использование сервиса" docs={serviceDocs} />
      <InfoDocs title="Правовая информация" docs={legalDocs} />
    </div>
  );
};

export default InfoPage;
