import cl from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import scss from "./appButton.module.scss";

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
      className={cl(scss.button, isBlue && scss.button_blue, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
