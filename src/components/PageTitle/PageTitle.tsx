import cl from "classnames";
import { FC, ReactNode } from "react";
import scss from "./pageTitle.module.scss";

const PageTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <h1 className={cl(scss.title, className)}>{children}</h1>;
};

export default PageTitle;
