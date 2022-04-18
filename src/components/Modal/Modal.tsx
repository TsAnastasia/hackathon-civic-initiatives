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
    <div className={cl(styles.root, isOpen && styles.root_open)}>
      <div
        className={styles.blackout}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className={cl(styles.content, className)}>{children}</div>
    </div>
  );
};

export default Modal;
