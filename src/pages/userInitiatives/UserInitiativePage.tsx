import { useEffect, useState } from "react";
import { initiativesAPI } from "../../API-data/iniitiatives/inititiativesAPI";
import CategoriesSwitcher from "../../components/CategoriesSwitcher/CategoriesSwitcher";
import InitiativesList from "../../components/InitiativesList/InitiativesList";
import { useAppSelector } from "../../hooks/redux";
import { InitiativeCardData } from "../../types/initiative";
import { TIMEOUT_API } from "../../utils/constants";

const UserInitiativePage = () => {
  // TODO: add create intitiative button
  const [openInitatives, setOpenInitatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [closeInitatives, setCloseInitatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [loaded, setLoaded] = useState(false);
  const { user_categories, data: user } = useAppSelector((state) => state.user);

  useEffect(() => {
    // API: get user initiatives
    setLoaded(true);
    setTimeout(() => {
      const res = initiativesAPI.getIntiatives({
        userId: user.id,
        categories: user_categories.length > 0 ? user_categories : undefined,
        has_closed: true,
      });
      setOpenInitatives(res.filter((i) => i.status !== "closed"));
      setCloseInitatives(res.filter((i) => i.status === "closed"));
      setLoaded(false);
    }, TIMEOUT_API);
  }, [user_categories, user]);

  return (
    <>
      <CategoriesSwitcher />
      <InitiativesList
        initiatives={openInitatives}
        title="Активные"
        loaded={loaded}
      />
      <InitiativesList
        initiatives={closeInitatives}
        title="Закрытые"
        loaded={loaded}
      />
    </>
  );
};

export default UserInitiativePage;
