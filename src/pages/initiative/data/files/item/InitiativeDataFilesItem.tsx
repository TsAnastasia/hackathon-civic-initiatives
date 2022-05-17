import { FC } from "react";
import { InitiativeFile } from "../../../../../types/initiative";
import scss from "./initiativeDataFilesItem.module.scss";

const InitiativeDataFilesItem: FC<{ file: InitiativeFile }> = ({ file }) => {
  return (
    <li key={file.name} className={scss.root}>
      <span className={scss.type}>
        {file.name.slice(file.name.lastIndexOf(".") + 1, file.name.length)}
      </span>
      <div>
        <p className={scss.name}>{file.name}</p>
        <p className={scss.size}>{file.size}</p>
      </div>
    </li>
  );
};

export default InitiativeDataFilesItem;
