import InitiaitveCard from "../../../components/InitiaitveCard/InitiaitveCard";
import { useAppSelector } from "../../../hooks/redux";
import { InitiativeCardData } from "../../../types/initiative";
import scss from "./createSuccess.module.scss";

const CreateSuccess = () => {
  const { create_data } = useAppSelector((state) => state.initiatives);

  const initiative: InitiativeCardData = {
    id: `new-initiative`,
    title: create_data.name,
    description: create_data.description,
    date: new Date().toJSON(),
    images: [],
    type: create_data.type,
  };

  return (
    <section className={scss.section}>
      <h2 className={scss.title}>Инициатива создана</h2>
      <InitiaitveCard initiative={initiative} />
    </section>
  );
};

export default CreateSuccess;
