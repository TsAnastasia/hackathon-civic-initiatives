import cl from "classnames";
import { FC } from "react";
import {
  InitiativeTypeType,
  initiativeTypeValues,
} from "../../types/initiative";
import scss from "./initiativeType.module.scss";

const InitiativeType: FC<{
  type: InitiativeTypeType;
  hasText?: boolean;
  className?: string;
}> = ({ type, hasText = false, className }) => {
  return (
    <div className={cl(className, scss.root)}>
      {hasText && (
        <span className={scss.title}>{initiativeTypeValues[type]}</span>
      )}
      <span className={cl(scss.icon, scss[type])} />
    </div>
  );
};

export default InitiativeType;
