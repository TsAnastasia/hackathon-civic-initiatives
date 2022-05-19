import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import AppButton from "../../components/UI/buttons/AppButton/AppButton";
import Checkbox from "../../components/UI/inputs/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { useDocTitle } from "../../hooks/useDocTitle";
import { useForm } from "../../hooks/useForm";
import { setUserSettings } from "../../redux/userSlice/userSlice";
import { settingNames, UserSetting } from "../../types/settings";
import { TIMEOUT_API } from "../../utils/constants";

import scss from "./settingPage.module.scss";

const SettingsPage = () => {
  useDocTitle("Настройки");
  const { settings } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false);

  const { values, handleSubmit, handleChange } = useForm({
    defaltValues: settings,
    onSubmit: (values) => {
      setLoaded(true);
      setTimeout(() => {
        // API: change user settings
        dispatch(setUserSettings(values));
        setLoaded(false);
      }, TIMEOUT_API);
    },
  });

  return (
    <section className={scss.section}>
      <h1 className={scss.title}>Настройки</h1>
      <form onSubmit={handleSubmit} className={scss.form}>
        {(Object.keys(settings) as [UserSetting]).map((set) => (
          <Checkbox
            key={set}
            label={settingNames[set]}
            name={set}
            checked={values[set]}
            onChange={handleChange}
            className={scss.item}
          />
        ))}
        <AppButton
          type="submit"
          disabled={JSON.stringify(values) === JSON.stringify(settings)}
          isBlue={true}
        >
          Сохранить изменения
        </AppButton>
        {loaded && <Loader type="fixed" />}
      </form>
    </section>
  );
};

export default SettingsPage;
