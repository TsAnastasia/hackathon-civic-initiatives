import { FC, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import AppLoader from "../../../components/AppLoader/AppLoader";

import { Doc } from "../../../types/doc";
import scss from "./docContent.module.scss";
import DocContentError from "./error/DocContentError";
import DocContentPages from "./pages/DocContentPages";
import DocContentScale from "./scale/DocContentScale";

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
      <h1 className={scss.title}>{doc.title}</h1>
      <div className={scss.panel}>
        <DocContentScale
          scale={scale}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
        />
        <DocContentPages
          page={page}
          pages={pages}
          handleBack={handleBack}
          handleForward={handleForward}
        />
      </div>
      <Document
        className={scss.doc}
        file={doc.source}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<AppLoader blackout={false} />}
        error={<DocContentError />}
      >
        <Page
          className={scss.page}
          width={WIDHT}
          pageNumber={page}
          scale={scale}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          renderInteractiveForms={false}
          loading={<AppLoader blackout={false} />}
          error={<DocContentError />}
        />
      </Document>

      <DocContentPages
        page={page}
        pages={pages}
        handleBack={handleBack}
        handleForward={handleForward}
      />
    </>
  );
};

export default DocContent;
