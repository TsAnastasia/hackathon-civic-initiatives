import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initiativesAPI } from "../../API-data/iniitiatives/inititiativesAPI";
import { goToPage } from "../../router/routes";
import { InitiativeCard } from "../../types/initiative";

const ListPage = () => {
  const [initiatives, setInitiatives] = useState<InitiativeCard[]>([]);

  useEffect(() => {
    setInitiatives(initiativesAPI.getIntiatives({}));
  }, []);

  return (
    <>
      <h1>list page</h1>
      <section>
        <ul>
          {initiatives.map((initiative) => (
            <li key={initiative.id}>
              <Link to={goToPage.initiative(initiative.id)}>
                {initiative.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ListPage;
