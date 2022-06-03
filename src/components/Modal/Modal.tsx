import { FC, ReactNode } from "react";
import scss from "./modal.module.scss";
import cl from "classnames";
import IconButton from "../UI/buttons/IconButton/IconButton";

const Modal: FC<{
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  hasCloseIcon?: boolean;
  position?: "absolute" | "center";
}> = ({
  children,
  className,
  isOpen,
  onClose,
  hasCloseIcon = false,
  position = "absolute",
}) => {
  return (
    <>
      <div
        className={cl(scss.blackout, isOpen && scss.blackout_open)}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cl(
          scss.content,
          isOpen && scss.content_open,
          hasCloseIcon && scss.has_icon,
          position === "center" && scss.center,
          className
        )}
      >
        {hasCloseIcon && (
          <IconButton onClick={onClose} className={scss.close_icon} />
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
