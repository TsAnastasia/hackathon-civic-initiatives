import cl from "classnames";
import { FC } from "react";
import IconButton from "../../../../components/UI/buttons/IconButton/IconButton";

import styles from "./docContentPages.module.scss";

const DocContentPages: FC<{
  page: number;
  pages: number | null;
  handleBack: () => void;
  handleForward: () => void;
}> = ({ page, pages, handleBack, handleForward }) => {
  return (
    <div className={styles.root}>
      <IconButton
        className={cl(styles.button, styles.back)}
        onClick={handleBack}
        disabled={page === 1}
      />

      <p className={styles.pages}>{`${page} из ${pages || "?"}`}</p>

      <IconButton
        className={cl(styles.button, styles.next)}
        onClick={handleForward}
        disabled={page === pages}
      />
    </div>
  );
};

export default DocContentPages;
