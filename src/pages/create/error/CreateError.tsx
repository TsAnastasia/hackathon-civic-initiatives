import { FC } from "react";
import AppButton from "../../../components/UI/buttons/AppButton/AppButton";

const CreateError: FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <section>
      <h1>error</h1>
      <AppButton onClick={onBack}>back</AppButton>
    </section>
  );
};

export default CreateError;
