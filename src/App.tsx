import { Suspense } from "react";
import styles from "./app.module.scss";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import AppLoader from "./components/AppLoader/AppLoader";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <Suspense fallback={<AppLoader />}>
          <AppRouter />
        </Suspense>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
