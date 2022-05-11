import { Suspense } from "react";
import scss from "./app.module.scss";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import Loader from "./components/Loader/Loader";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className={scss.app}>
      <AppHeader />
      <main className={scss.main}>
        <Suspense fallback={<Loader type="absolute" />}>
          <AppRouter />
        </Suspense>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
