import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { goToPage } from "../../router/routes";
import CreateCategory from "./intro/CreateCategory";

const CreatePage = () => {
  const [params] = useSearchParams();
  const category = params.get("category");

  return category ? (
    <section>
      <Breadcrumbs
        parents={[{ title: "Выбор категории", link: goToPage.create }]}
        current={"Ввод данных"}
      />
      <form>
        <input type="text" name="test" />
      </form>
    </section>
  ) : (
    <CreateCategory />
  );
};

export default CreatePage;
