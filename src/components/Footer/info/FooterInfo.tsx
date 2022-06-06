import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setInfoOpened } from "../../../redux/app/appSlice";
import Modal from "../../Modal/Modal";
import IconButton from "../../UI/buttons/IconButton/IconButton";
import scss from "./footerInfo.module.scss";

const FooterInfo = () => {
  const dispatch = useAppDispatch();
  const { info_opened } = useAppSelector((state) => state.app);
  const [opened, setOpened] = useState(info_opened);

  const handleOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpened(false);
    dispatch(setInfoOpened(false));
  }, [dispatch]);

  return (
    <>
      <IconButton onClick={handleOpen} className={scss.button} />
      <Modal
        isOpen={opened}
        onClose={handleClose}
        position="center"
        className={scss.modal}
        hasCloseIcon
      >
        <p className={scss.title}>Внимание!</p>
        <p className={scss.text}>
          Данный проект разработан как пример реализации пользовательского
          интерфейса.
        </p>
        <p className={scss.text}>Серверная часть у приложения отсутствует.</p>
        <p className={scss.text}>Все запросы искусственно смоделированы.</p>
        <p className={scss.text}>
          Данные пользователя сохраняются в локальном хранилище (т.е. доступны
          после закрытия браузера и перезагрузки компьютера, пока пользователь
          самостоятельно их не удалит).
        </p>
        <p className={scss.text}>
          Все совпадения случайны и не имеют отношения к реальности.
        </p>
      </Modal>
    </>
  );
};

export default FooterInfo;
