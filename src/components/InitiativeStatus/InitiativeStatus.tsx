import cl from "classnames";
import { FC } from "react";
import {
  InitiativeStatusType,
  initiativeStatusValues,
} from "../../types/initiative";
import scss from "./initiativeStatus.module.scss";

const InitiativeStatus: FC<{
  status: InitiativeStatusType;
  className?: string;
}> = ({ status, className }) => {
  return (
    <p className={cl(className, scss.root, scss[status])}>
      {initiativeStatusValues[status]}
    </p>
  );
};

export default InitiativeStatus;
