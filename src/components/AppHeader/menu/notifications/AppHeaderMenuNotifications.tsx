import { Link } from "react-router-dom";
import { goToPage } from "../../../../utils/routes";
import styles from "./appHeaderMenuNotifications.module.scss";

const AppHeaderMenuNotifications = () => {
  // TODO: move to app storege
  const count = 2;

  return (
    !!count && (
      <Link to={goToPage.notification} className={styles.root}>
        {count}
      </Link>
    )
  );
};

export default AppHeaderMenuNotifications;
