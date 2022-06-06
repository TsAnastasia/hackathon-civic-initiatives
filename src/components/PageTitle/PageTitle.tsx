import cl from "classnames";
import { FC } from "react";
import { useDocTitle } from "../../hooks/useDocTitle";
import scss from "./pageTitle.module.scss";

const PageTitle: FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  useDocTitle(children);

  return <h1 className={cl(scss.title, className)}>{children}</h1>;
};

export default PageTitle;
