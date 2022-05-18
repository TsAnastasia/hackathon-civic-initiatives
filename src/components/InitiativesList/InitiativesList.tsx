import { FC } from "react";
import { InitiativeCardData } from "../../types/initiative";
import InitiaitveCard from "../InitiaitveCard/InitiaitveCard";
import Loader from "../Loader/Loader";
import scss from "./initiativeList.module.scss";

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
    <section className={scss.root}>
      <h2 className={scss.title}>{title}</h2>
      <div className={scss.content}>
        {error ? (
          <p className={scss.message}>{error}</p>
        ) : (
          initiatives &&
          (initiatives.length > 0 ? (
            <ul className={scss.list}>
              {initiatives.map((item) => (
                <li key={item.id}>
                  <InitiaitveCard initiative={item} />
                </li>
              ))}
            </ul>
          ) : (
            <p className={scss.message}>Инициативы не найдены</p>
          ))
        )}
        {loaded && <Loader blackout={!initiatives} type="absolute" />}
      </div>
    </section>
  );
};

export default InitiativesList;
