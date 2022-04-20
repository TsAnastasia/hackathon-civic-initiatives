import { FC, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import AppLoader from "../../../components/AppLoader/AppLoader";

import { Doc } from "../../../types/doc";
import styles from "./docContent.module.scss";
import DocContentPanel from "./panel/DocContentPanel";

const WIDHT = Math.min(window.innerWidth, 768);
const ZOOM_STEP = 0.1;

const DocContent: FC<{ doc: Doc }> = ({ doc }) => {
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
    <>
      <h1>doc page</h1>
      <DocContentPanel
        page={page}
        pages={pages}
        scale={scale}
        handleBack={handleBack}
        handleForward={handleForward}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
      />
      <Document
        file={doc.source}
        loading={<AppLoader blackout={false} />}
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
          loading={<AppLoader blackout={false} />}
        />
      </Document>
    </>
  );
};

export default DocContent;
