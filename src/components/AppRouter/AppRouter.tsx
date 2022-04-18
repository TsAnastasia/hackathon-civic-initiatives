import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import AccountPage from "../../pages/account/AccountPage";
import CreatePage from "../../pages/create/CreatePage";
import DocPage from "../../pages/doc/DocPage";
import InfoPage from "../../pages/info/InfoPage";
import InitiativePage from "../../pages/initiative/InitiativePage";
import ListPage from "../../pages/list/ListPage";
import NotFoundPage from "../../pages/notFound/NotFoundPage";
import NotificationsPage from "../../pages/notifications/NotificationsPage";
import SearchPage from "../../pages/search/SearchPage";
import SettingsPage from "../../pages/settings/SettingsPage";
import { AppRoutes, goToPage } from "../../utils/routes";

const routes: RouteObject[] = [
  { path: AppRoutes.HOME, element: <ListPage /> },
  { path: AppRoutes.SEARCH, element: <SearchPage /> },
  { path: AppRoutes.CREATE, element: <CreatePage /> },
  {
    path: AppRoutes.INITIATIVES,
    children: [
      { index: true, element: <Navigate to={goToPage.home} replace={true} /> },
      { path: AppRoutes.PERSONAL, element: <ListPage /> },
      { path: AppRoutes.AREA, element: <ListPage /> },
      { path: "*", element: <InitiativePage /> },
    ],
  },
  {
    path: AppRoutes.ACCOUNT,
    children: [
      { index: true, element: <AccountPage /> },
      { path: AppRoutes.SETTINGS, element: <SettingsPage /> },
      { path: AppRoutes.NOTIFICTION, element: <NotificationsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: AppRoutes.INFO,
    children: [
      { index: true, element: <InfoPage /> },
      { path: "*", element: <DocPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default () => useRoutes(routes);
