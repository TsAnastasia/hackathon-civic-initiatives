import AppHeader from "./components/AppHeader/AppHeader";
import { NavLink } from "react-router-dom";
import { goToPage } from "./utils/routes";
import AppRoutes from "./components/AppRouter/AppRouter";
import styles from "./app.module.scss";
import { Suspense } from "react";
import AppLoader from "./components/AppLoader/AppLoader";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <Suspense fallback={<AppLoader />}>
          <AppRoutes />
        </Suspense>
      </main>
      <footer>
        <ul>
          {(Object.keys(goToPage) as Array<keyof typeof goToPage>).map(
            (page) => (
              <li key={`${page}`}>
                <NavLink
                  to={
                    page !== "doc" && page !== "initiative"
                      ? goToPage[page]
                      : goToPage[page]("someid")
                  }
                >
                  {page}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </footer>
    </div>
  );
};

export default App;
