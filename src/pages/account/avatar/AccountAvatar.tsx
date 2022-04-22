import cl from "classnames";
import { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import styles from "./accountAvatar.module.scss";

const AccountAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen} className={styles.avatar} />
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        className={cl(styles.modal, isOpen && styles.modal_open)}
      >
        сменить фото
      </Modal>
    </>
  );
};

export default AccountAvatar;
