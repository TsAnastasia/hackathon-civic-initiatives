import cl from "classnames";
import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import scss from "./breadcrumbs.module.scss";

const Breadcrumbs: FC<{
  parents: { title: string; link: string }[];
  current: string;
}> = ({ parents, current }) => {
  return (
    <div className={scss.root}>
      {parents.map(({ title, link }) => (
        <Fragment key={link}>
          <Link to={link} className={scss.crumb}>
            {title}
          </Link>
          <span className={scss.separator} />
        </Fragment>
      ))}
      <span className={cl(scss.crumb, scss.current)}>{current}</span>
    </div>
  );
};

export default Breadcrumbs;
