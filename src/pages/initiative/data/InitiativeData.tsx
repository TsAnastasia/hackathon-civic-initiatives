import { FC } from "react";
import IconButton from "../../../components/UI/buttons/IconButton/IconButton";
import { Initiative } from "../../../types/initiative";

const InitiativeData: FC<{ initiative: Initiative }> = ({ initiative }) => {
  return (
    <section>
      <div>
        <div>
          <h1>{initiative.title}</h1>
          <p>{initiative.date}</p>
          <p>
            <span>Инициатор: </span>
            {initiative.author.fullName}
          </p>
        </div>
        <div>
          <p>{initiative.status}</p>
          <p>{initiative.type}</p>
        </div>
      </div>
      <p>{initiative.area.adress}</p>
      {initiative.images.length > 0 ? (
        <ul>
          {initiative.images.map((image) => (
            <li key={image}>
              <img src={image} alt={initiative.title} />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Нет изображений</p>
        </div>
      )}
      <p>{initiative.description}</p>
      <div>
        <div>
          <IconButton>share</IconButton>
          <IconButton>like</IconButton>
        </div>
        <div>
          <IconButton>files</IconButton>
          {initiative.files.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativeData;
