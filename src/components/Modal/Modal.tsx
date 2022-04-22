import { FC, ReactNode } from "react";
import styles from "./modal.module.scss";
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
        className={cl(styles.blackout, isOpen && styles.blackout_open)}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cl(styles.content, isOpen && styles.content_open, className)}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
