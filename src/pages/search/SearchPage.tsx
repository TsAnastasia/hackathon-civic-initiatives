import { useEffect, useState } from "react";
import { initiativesAPI } from "../../API-data/iniitiatives/inititiativesAPI";
import CategoriesSwitcher from "../../components/CategoriesSwitcher/CategoriesSwitcher";
import CreateInitiativeButton from "../../components/CreateInitiativeButton/CreateInitiativeButton";
import InitiativesList from "../../components/InitiativesList/InitiativesList";
import { useAppSelector } from "../../hooks/redux";
import { useDocTitle } from "../../hooks/useDocTitle";
import { InitiativeCardData } from "../../types/initiative";
import { TIMEOUT_API } from "../../utils/constants";
import SearchForm from "./form/SearchForm";

const SearchPage = () => {
  useDocTitle("Поиск");
  const [intiatives, setInitiatives] = useState<
    InitiativeCardData[] | undefined
  >(undefined);
  const [loaded, setLoaded] = useState(false);
  const {
    user_categories,
    settings,
    data: user,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      // TODO: search initiatives
      const res = initiativesAPI.getIntiatives({
        categories: user_categories.length > 0 ? user_categories : undefined,
        has_closed: !settings.searchOnlyOpen,
      });
      setInitiatives(res);
      setLoaded(false);
    }, TIMEOUT_API);
  }, [user_categories, settings]);

  return (
    <>
      <SearchForm loaded={loaded} />
      <CategoriesSwitcher />
      <InitiativesList initiatives={intiatives} loaded={loaded} />
      <InitiativesList
        initiatives={
          intiatives?.filter((i) => i.author.id === user.id) || undefined
        }
        loaded={loaded}
        title="Мои инициативы"
      />
      <CreateInitiativeButton />
    </>
  );
};

export default SearchPage;
