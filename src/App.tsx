import AppHeader from "./components/AppHeader/AppHeader";
import AppRoutes from "./components/AppRouter/AppRouter";
import styles from "./app.module.scss";
import { Suspense } from "react";
import AppLoader from "./components/AppLoader/AppLoader";
import AppFooter from "./components/AppFooter/AppFooter";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <Suspense fallback={<AppLoader />}>
          <AppRoutes />
        </Suspense>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
