import { Suspense, useEffect } from "react";
import { userAPI } from "./API-data/users/usersAPI";
import scss from "./app.module.scss";
import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setUserData } from "./redux/userSlice/userSlice";
import AppRouter from "./router/AppRouter";

const App = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.user);

  useEffect(() => {
    // API: get user data
    if (!auth) dispatch(setUserData(userAPI.getMe()));
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
      <Footer />
    </div>
  );
};

export default App;
