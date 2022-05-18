import { FC } from "react";
import { InitiativeCardData } from "../../types/initiative";
import InitiaitveCard from "../InitiaitveCard/InitiaitveCard";
import Loader from "../Loader/Loader";

const InitiativesList: FC<{
  title?: string;
  initiatives: InitiativeCardData[] | undefined;
  loaded?: boolean;
  error?: string;
}> = ({
  title = "Инициативы",
  initiatives,
  loaded = false,
  error = undefined,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          initiatives &&
          (initiatives.length > 0 ? (
            <ul>
              {initiatives.map((item) => (
                <li key={item.id}>
                  <InitiaitveCard intiative={item} />
                </li>
              ))}
            </ul>
          ) : (
            <p>Инициативы не найдены</p>
          ))
        )}
        {loaded && <Loader blackout={!initiatives} />}
      </div>
    </section>
  );
};

export default InitiativesList;
