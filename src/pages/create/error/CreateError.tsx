import { FC } from "react";
import AppButton from "../../../components/UI/buttons/AppButton/AppButton";
import scss from "./createError.module.scss";

const CreateError: FC<{ onBack: () => void; onRepeat: () => void }> = ({
  onBack,
  onRepeat,
}) => {
  return (
    <section className={scss.root}>
      <h2 className={scss.title}>Что-то пошло не так</h2>
      <div className={scss.message}>
        <p className={scss.text}>Произошла ошибка при создании инициативы.</p>
        <p className={scss.text}>Попробуйте повторно отправить данные.</p>
        <p className={scss.text}>Для их проверки вернитесь на шаг назад.</p>
      </div>
      <div className={scss.buttons}>
        <AppButton onClick={onBack} className={scss.back}>
          Назад
        </AppButton>
        <AppButton onClick={onRepeat} isBlue>
          Повторить
        </AppButton>
      </div>
    </section>
  );
};

export default CreateError;
