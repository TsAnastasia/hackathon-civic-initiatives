import cl from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import styles from "./iconButton.module.scss";

const IconButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "small";
  }
> = ({ children, className, type = "button", size = "small", ...props }) => {
  return (
    <button
      className={cl(styles.root, styles[`size_${size}`], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
