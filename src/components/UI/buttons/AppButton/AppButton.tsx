import cl from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import styles from "./appButton.module.scss";

export type AppButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  isBlue?: boolean;
};

const AppButton: FC<AppButtonType> = ({
  children,
  className,
  type = "button",
  isBlue = false,
  ...props
}) => {
  return (
    <button
      className={cl(styles.button, isBlue && styles.button_blue, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
