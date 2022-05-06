import cl from "classnames";
import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { goToPage } from "../../../router/routes";
import Modal from "../../Modal/Modal";
import IconButton from "../../UI/buttons/IconButton/IconButton";
import scss from "./appHeaderMenu.module.scss";
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
      <IconButton className={scss.button} onClick={handleOpen} />
      <Modal isOpen={isOpen} onClose={handleClose} className={scss.modal}>
        <ul className={scss.menu}>
          {menuItems.map(({ name, link, additional }) => (
            <li className={scss.item} key={link}>
              <NavLink
                className={({ isActive }) =>
                  cl(scss.link, isActive && scss.active)
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
