import cl from "classnames";
import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import scss from "./breadcrumbs.module.scss";

const Breadcrumbs: FC<{
  crumbs: { title: string; link?: string; onClick?: () => void }[];
}> = ({ crumbs }) => {
  return (
    <div className={scss.root}>
      {crumbs.map(({ title, link, onClick }, index) => (
        <Fragment key={title}>
          {link ? (
            <Link to={link} className={scss.crumb} onClick={onClick}>
              {title}
            </Link>
          ) : (
            <span
              className={cl(scss.crumb, !onClick && scss.current)}
              onClick={onClick}
            >
              {title}
            </span>
          )}
          {index !== crumbs.length - 1 && <span className={scss.separator} />}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
