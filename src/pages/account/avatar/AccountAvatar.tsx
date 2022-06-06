import cl from "classnames";
import { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import AppButton from "../../../components/UI/buttons/AppButton/AppButton";
import scss from "./accountAvatar.module.scss";

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
      <button type="button" onClick={handleOpen} className={scss.avatar} />
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        className={cl(scss.modal, isOpen && scss.modal_open)}
      >
        {/* TODO: change avatar */}
        <p>Изменение аватара</p>
        <AppButton>Загрузить изображение</AppButton>
        <button type="button" />
        <AppButton isBlue={true}>Сохранить и закрыть</AppButton>
      </Modal>
    </>
  );
};

export default AccountAvatar;
