import AppButton from "../../components/UI/buttons/AppButton/AppButton";
import AppCheckbox from "../../components/UI/inputs/AppCheckbox/AppCheckbox";
import { useForm } from "../../hooks/useForm";

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
  const { values, handleSubmit, handleChange } = useForm({
    defaltValues: settings,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // TODO: style
  // TODO: change
  // TODO: save
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Настройки</h1>
        {Object.keys(settings).map((set) => (
          <AppCheckbox
            key={set}
            label={labels[set]}
            name={set}
            checked={values[set]}
            onChange={handleChange}
          />
        ))}
        <AppButton
          type="submit"
          disabled={JSON.stringify(values) === JSON.stringify(settings)}
        >
          Сохранить изменения
        </AppButton>
      </form>
    </section>
  );
};

export default SettingsPage;
