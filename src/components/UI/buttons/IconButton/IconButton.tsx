import cl from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import scss from "./iconButton.module.scss";

const IconButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "small";
  }
> = ({ children, className, type = "button", size = "small", ...props }) => {
  return (
    <button
      className={cl(scss.root, scss[`size_${size}`], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
