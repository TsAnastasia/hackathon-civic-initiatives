import { FC } from "react";
import InitiativeStatus from "../../../components/InitiativeStatus/InitiativeStatus";
import InitiativeType from "../../../components/InitiativeType/InitiativeType";
import IconButton from "../../../components/UI/buttons/IconButton/IconButton";
import { Initiative } from "../../../types/initiative";
import { formatDateFromString } from "../../../utils/date";
import InitiativeDataFiles from "./files/InitiativeDataFiles";
import scss from "./initiativeData.module.scss";
import InitiativeDataLike from "./like/InitiativeDataLike";

const InitiativeData: FC<{ initiative: Initiative }> = ({ initiative }) => {
  return (
    <section className={scss.section}>
      <div className={scss.row}>
        <div>
          <h1 className={scss.title}>{initiative.title}</h1>
          <p className={scss.text}>{formatDateFromString(initiative.date)}</p>
          <p className={scss.text}>
            <span className={scss.bold}>Инициатор: </span>
            {initiative.author.fullName}
          </p>
        </div>
        <div className={scss.info}>
          <InitiativeStatus status={initiative.status} />
          <InitiativeType
            type={initiative.type}
            hasText
            className={scss.type}
          />
        </div>
      </div>
      <p className={scss.adress}>{initiative.area.adress}</p>
      {initiative.images.length > 0 ? (
        <ul className={scss.list}>
          {initiative.images.map((image) => (
            <li key={image}>
              {/* TODO: open modal */}
              <img src={image} alt={initiative.title} className={scss.image} />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p className={scss.message}>Нет изображений</p>
        </div>
      )}
      <div className={scss.description}>
        {initiative.description.split("\n").map((i) => (
          <p key={i} className={scss.text}>
            {i}
          </p>
        ))}
      </div>
      <div className={scss.buttons}>
        <div className={scss.social}>
          {/* TODO: share */}
          <IconButton className={scss.share} />
          <InitiativeDataLike {...initiative.like} />
        </div>
        <div>
          <InitiativeDataFiles files={initiative.files} />
        </div>
      </div>
    </section>
  );
};

export default InitiativeData;
