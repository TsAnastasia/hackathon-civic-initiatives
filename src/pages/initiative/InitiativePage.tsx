import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { intiativesAPI } from "../../API-data/initiatives/intitiativesAPI";
import Loader from "../../components/Loader/Loader";
import { Initiative } from "../../types/initiative";
import { TIMEOUT_API } from "../../utils/constants";
import NotFoundPage from "../notFound/NotFoundPage";
import InitiativeComments from "./comments/InitiativeComments";
import InitiativeData from "./data/InitiativeData";

const InitiativePage = () => {
  const [loaded, setLoaded] = useState(true);
  const { initiativeId } = useParams();
  const [initiative, setInitiative] = useState<Initiative | undefined>(
    undefined
  );

  useEffect(() => {
    if (initiativeId) {
      setLoaded(true);
      setTimeout(() => {
        setInitiative(intiativesAPI.getIntiative(initiativeId));
        setLoaded(false);
      }, TIMEOUT_API);
    } else {
      setLoaded(false);
      setInitiative(undefined);
    }
  }, [initiativeId]);

  return (
    <>
      {loaded && <Loader type="fixed" />}
      {initiative ? (
        <>
          <InitiativeData initiative={initiative} />
          <InitiativeComments comments={initiative.comments} />
        </>
      ) : (
        !loaded && <NotFoundPage title="Инициатива не найдена" />
      )}
    </>
  );
};

export default InitiativePage;
