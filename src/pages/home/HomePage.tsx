import { useEffect, useState } from "react";
import { initiativesAPI } from "../../API-data/iniitiatives/inititiativesAPI";
import CategoriesSwitcher from "../../components/CategoriesSwitcher/CategoriesSwitcher";
import InitiativesList from "../../components/InitiativesList/InitiativesList";
import { useAppSelector } from "../../hooks/redux";
import { InitiativeCardData } from "../../types/initiative";
import { TIMEOUT_API } from "../../utils/constants";

const HomePage = () => {
  const [allInitiatives, setAllInitiatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [userInitatives, setUserInitatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [allLoaded, setAllLoaded] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);
  const { user_categories, data: user } = useAppSelector((state) => state.user);

  useEffect(() => {
    // API: get all initiatives
    setAllLoaded(true);
    setTimeout(() => {
      setAllInitiatives(
        initiativesAPI.getIntiatives({
          categories: user_categories.length > 0 ? user_categories : undefined,
        })
      );
      setAllLoaded(false);
    }, TIMEOUT_API * 2);

    // API: get user initiatives
    setUserLoaded(true);
    setTimeout(() => {
      setUserInitatives(
        initiativesAPI.getIntiatives({
          userId: user.id,
          categories: user_categories.length > 0 ? user_categories : undefined,
        })
      );
      setUserLoaded(false);
    }, TIMEOUT_API);
  }, [user_categories, user]);

  return (
    <>
      <CategoriesSwitcher />
      <InitiativesList initiatives={allInitiatives} loaded={allLoaded} />
      <InitiativesList
        initiatives={userInitatives}
        title="Мои инициативы"
        loaded={userLoaded}
      />
    </>
  );
};

export default HomePage;
