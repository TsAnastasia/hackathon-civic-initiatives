import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import { goToPage } from "../../../../router/routes";
import scss from "./appHeaderMenuNotifications.module.scss";

const AppHeaderMenuNotifications = () => {
  const { notifications_count } = useAppSelector((state) => state.user.data);

  return notifications_count ? (
    <Link to={goToPage.notification} className={scss.root}>
      {notifications_count}
    </Link>
  ) : (
    <></>
  );
};

export default AppHeaderMenuNotifications;
