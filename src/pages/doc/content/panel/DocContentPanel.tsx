import { FC } from "react";

import styles from "./docContentPanel.module.scss";

const DocContentPanel: FC<{
  page: number;
  pages: number | null;
  scale: number;
  handleBack: () => void;
  handleForward: () => void;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}> = ({
  page,
  pages,
  scale,
  handleBack,
  handleForward,
  handleZoomIn,
  handleZoomOut,
}) => {
  return (
    <div className={styles.root}>
      <button type="button" onClick={handleBack} disabled={page === 1}>
        {"<-"}
      </button>
      <button type="button" onClick={handleZoomIn}>
        +
      </button>
      <p>{`${page} из ${pages}`}</p>
      <button type="button" onClick={handleZoomOut} disabled={scale === 0.1}>
        -
      </button>
      <button type="button" onClick={handleForward} disabled={page === pages}>
        {"->"}
      </button>
    </div>
  );
};

export default DocContentPanel;
