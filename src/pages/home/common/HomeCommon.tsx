import { useEffect, useState } from "react";
import { initiativesAPI } from "../../../API-data/iniitiatives/inititiativesAPI";
import InitiativesList from "../../../components/InitiativesList/InitiativesList";
import { useAppSelector } from "../../../hooks/redux";
import { InitiativeCardData } from "../../../types/initiative";
import { TIMEOUT_API } from "../../../utils/constants";

const HomeCommon = () => {
  const [allInitiatives, setAllInitiatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [allLoaded, setAllLoaded] = useState(false);
  const { user_categories } = useAppSelector((state) => state.user);

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
  }, [user_categories]);

  return <InitiativesList initiatives={allInitiatives} loaded={allLoaded} />;
};

export default HomeCommon;
