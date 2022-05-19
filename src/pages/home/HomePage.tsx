import { useEffect, useState } from "react";
import { initiativesAPI } from "../../API-data/iniitiatives/inititiativesAPI";
import CategoriesSwitcher from "../../components/CategoriesSwitcher/CategoriesSwitcher";
import InitiativesList from "../../components/InitiativesList/InitiativesList";
import { useAppSelector } from "../../hooks/redux";
import { InitiativeCardData } from "../../types/initiative";
import { TIMEOUT_API } from "../../utils/constants";
import HomeCommon from "./common/HomeCommon";

const HomePage = () => {
  const [userInitatives, setUserInitatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [userLoaded, setUserLoaded] = useState(false);
  const {
    user_categories,
    data: user,
    settings,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    // API: get user initiatives
    setUserLoaded(true);
    setTimeout(() => {
      setUserInitatives(
        initiativesAPI.getIntiatives({
          userId: user.id,
          categories: user_categories.length > 0 ? user_categories : undefined,
          has_closed: settings.showClosed,
        })
      );
      setUserLoaded(false);
    }, TIMEOUT_API);
  }, [user_categories, user, settings]);

  return (
    <>
      <CategoriesSwitcher />
      {!settings.showOnlyMine && <HomeCommon />}
      <InitiativesList
        initiatives={userInitatives}
        title="Мои инициативы"
        loaded={userLoaded}
      />
    </>
  );
};

export default HomePage;
