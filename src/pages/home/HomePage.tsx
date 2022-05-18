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

  useEffect(() => {
    setTimeout(() => {
      setAllInitiatives(initiativesAPI.getIntiatives({}));
    }, TIMEOUT_API * 2);
    setTimeout(() => {
      setUserInitatives(
        initiativesAPI.getIntiatives({
          userId: "98cfcd377f1c4b17b1dba9cced6f1e1d",
        })
      );
    }, TIMEOUT_API);
  }, []);

  return (
    <>
      <section>
        <CategoriesSwitcher />
      </section>
      <InitiativesList initiatives={allInitiatives} />
      <InitiativesList initiatives={userInitatives} title="Мои инициативы" />
    </>
  );
};

export default HomePage;
