import { FC, ReactNode } from "react";
import scss from "./modal.module.scss";
import cl from "classnames";

const Modal: FC<{
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ children, className, isOpen, onClose }) => {
  return (
    <>
      <div
        className={cl(scss.blackout, isOpen && scss.blackout_open)}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={cl(scss.content, isOpen && scss.content_open, className)}>
        {children}
      </div>
    </>
  );
};

export default Modal;
