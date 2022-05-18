import { Suspense, useEffect } from "react";
import { userAPI } from "./API-data/users/usersAPI";
import scss from "./app.module.scss";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import Loader from "./components/Loader/Loader";
import { useAppDispatch } from "./hooks/redux";
import { setUserData } from "./redux/userSlice/userSlice";
import AppRouter from "./router/AppRouter";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // API: get user data
    dispatch(setUserData(userAPI.getMe()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
