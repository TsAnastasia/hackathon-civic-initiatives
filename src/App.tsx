import AppHeader from "./components/AppHeader/AppHeader";
import { NavLink } from "react-router-dom";
import { goToPage } from "./utils/routes";
import AppRoutes from "./components/AppRouter/AppRouter";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      {/* TODO: add lazy loading */}
      <main>
        <AppRoutes />
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
