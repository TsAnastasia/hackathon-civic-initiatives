import { useState } from "react";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppButton from "../../components/UI/buttons/AppButton/AppButton";
import AppCheckbox from "../../components/UI/inputs/AppCheckbox/AppCheckbox";
import { useForm } from "../../hooks/useForm";
import { TIMEOUT_API } from "../../utils/constants";
import styles from "./settingPage.module.scss";

// TODO: add app storage
const settings: { [key: string]: boolean } = {
  showClosed: false,
  showOnlyMine: false,
  searchOnlyOpen: true,
};

const labels: { [key in keyof typeof settings]: string } = {
  showClosed: "Показывать закрытые инициативы на главной странице",
  showOnlyMine: "Показывать только мои инициативы на главной странице",
  searchOnlyOpen: "Искать только открытые инициативы",
};

const SettingsPage = () => {
  const [loaded, setLoaded] = useState(false);

  const { values, handleSubmit, handleChange } = useForm({
    defaltValues: settings,
    onSubmit: (values) => {
      setLoaded(true);
      setTimeout(() => {
        // TODO: save changes in app store
        setLoaded(false);
      }, TIMEOUT_API);
      console.log(values);
    },
  });
  // TODO: style
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Настройки</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(settings).map((set) => (
          <AppCheckbox
            key={set}
            label={labels[set]}
            name={set}
            checked={values[set]}
            onChange={handleChange}
            className={styles.item}
          />
        ))}
        <AppButton
          type="submit"
          disabled={JSON.stringify(values) === JSON.stringify(settings)}
          isBlue={true}
        >
          Сохранить изменения
        </AppButton>
        {loaded && <AppLoader fixed={true} />}
      </form>
    </section>
  );
};

export default SettingsPage;
