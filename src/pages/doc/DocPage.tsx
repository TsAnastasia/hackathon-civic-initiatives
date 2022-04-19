import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import styles from "./docPage.module.scss";

const WIDHT = Math.min(window.innerWidth, 768);
const ZOOM_STEP = 0.1;

const DocPage = () => {
  const [scale, setScale] = useState(1);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<number | null>(null);

  const handleBack = () => {
    setPage((state) => state - 1);
  };

  const handleForward = () => {
    setPage((state) => state + 1);
  };

  const handleZoomIn = () => {
    setScale((state) => state + ZOOM_STEP);
  };

  const handleZoomOut = () => {
    setScale((state) => state - ZOOM_STEP);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPages(numPages);
  };

  return (
    <div>
      <h1>doc page</h1>
      <div>
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
        <button type="button" onClick={handleForward}>
          {"->"}
        </button>
      </div>
      <Document
        file="/docs/constitution.pdf"
        loading={<div>Загрузка ...</div>}
        onLoadSuccess={onDocumentLoadSuccess}
        className={styles.doc}
      >
        <Page
          className={styles.page}
          width={WIDHT}
          pageNumber={page}
          scale={scale}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          renderInteractiveForms={false}
          loading={<div style={{ background: "green" }}>HELO</div>}
        />
      </Document>
    </div>
  );
};

export default DocPage;
