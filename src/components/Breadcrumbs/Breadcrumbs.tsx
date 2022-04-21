import cl from "classnames";
import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./breadcrumbs.module.scss";

const Breadcrumbs: FC<{
  parents: { title: string; link: string }[];
  current: string;
}> = ({ parents, current }) => {
  return (
    <div className={styles.root}>
      {parents.map(({ title, link }) => (
        <Fragment key={link}>
          <Link to={link} className={styles.crumb}>
            {title}
          </Link>
          <span className={styles.separator} />
        </Fragment>
      ))}
      <span className={cl(styles.crumb, styles.current)}>{current}</span>
    </div>
  );
};

export default Breadcrumbs;
