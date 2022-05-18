import { FC } from "react";
import { InitiativeCardData } from "../../types/initiative";

const InitiaitveCard: FC<{ intiative: InitiativeCardData }> = ({
  intiative,
}) => {
  return (
    <article>
      <h3>{intiative.title}</h3>
    </article>
  );
};

export default InitiaitveCard;
