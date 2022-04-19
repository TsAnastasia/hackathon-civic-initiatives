import cl from "classnames";
import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { goToPage } from "../../../utils/routes";
import Modal from "../../Modal/Modal";
import IconButton from "../../UI/buttons/IconButton/IconButton";
import styles from "./appHeaderMenu.module.scss";
import AppHeaderMenuNotifications from "./notifications/AppHeaderMenuNotifications";

const menuItems: { name: string; link: string; additional?: ReactNode }[] = [
  {
    name: "Личный кабинет",
    link: goToPage.account,
    additional: <AppHeaderMenuNotifications />,
  },
  { name: "Создать инициативу", link: goToPage.create },
  { name: "Мои инициативы", link: goToPage.personalInitiatives },
  { name: "Мой район", link: goToPage.areaInitiatives },
  { name: "Информация", link: goToPage.info },
];

const AppHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <IconButton className={styles.button} onClick={handleOpen} />
      <Modal isOpen={isOpen} onClose={handleClose} className={styles.modal}>
        <ul className={styles.menu}>
          {menuItems.map(({ name, link, additional }) => (
            <li className={styles.item} key={link}>
              <NavLink
                className={({ isActive }) =>
                  cl(styles.link, isActive && styles.active)
                }
                to={link}
                onClick={handleClose}
              >
                {name}
              </NavLink>
              <span aria-hidden="true" onClick={handleClose}>
                {additional}
              </span>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default AppHeaderMenu;
