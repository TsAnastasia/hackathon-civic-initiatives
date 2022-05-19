import { FC, useCallback } from "react";
import { InitiativeCardData } from "../../types/initiative";
import defaultImage from "../../assets/images/no-image.png";
import { formatDateFromString } from "../../utils/date";
import InitiativeType from "../InitiativeType/InitiativeType";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../router/routes";
import scss from "./initiaitveCard.module.scss";

const InitiaitveCard: FC<{ initiative: InitiativeCardData }> = ({
  initiative,
}) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(goToPage.initiative(initiative.id));
  }, [initiative, navigate]);

  // TODO: check
  // useEffect(() => {
  //   console.log("useCallback", initiative.id);
  // }, [navigate, initiative]);

  return (
    <article onClick={handleCardClick} className={scss.root}>
      <img
        src={initiative.images[0] || defaultImage}
        alt={initiative.title}
        className={scss.image}
      />
      <div className={scss.info}>
        <h3 className={scss.title}>{initiative.title}</h3>
        <p className={scss.description}>{initiative.description}</p>
        <div className={scss.row}>
          <p className={scss.date}>{formatDateFromString(initiative.date)}</p>
          <InitiativeType type={initiative.type} />
        </div>
      </div>
    </article>
  );
};

export default InitiaitveCard;
