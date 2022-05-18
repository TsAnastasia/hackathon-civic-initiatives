import { useEffect, useState } from "react";
import { initiativesAPI } from "../../API-data/iniitiatives/inititiativesAPI";
import CategoriesSwitcher from "../../components/CategoriesSwitcher/CategoriesSwitcher";
import InitiativesList from "../../components/InitiativesList/InitiativesList";
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

  useEffect(() => {
    // API: get all initiatives
    setAllLoaded(true);
    setTimeout(() => {
      setAllInitiatives(initiativesAPI.getIntiatives({}));
      setAllLoaded(false);
    }, TIMEOUT_API * 2);

    // API: get user initiatives
    setUserLoaded(true);
    setTimeout(() => {
      setUserInitatives(
        initiativesAPI.getIntiatives({
          // TODO: get from storage
          userId: "98cfcd377f1c4b17b1dba9cced6f1e1d",
        })
      );
      setUserLoaded(false);
    }, TIMEOUT_API);
  }, []);

  return (
    <>
      <section>
        <CategoriesSwitcher />
      </section>
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
