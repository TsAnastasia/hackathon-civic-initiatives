import { lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import CreatePage from "../../pages/create/CreatePage";
import InitiativePage from "../../pages/initiative/InitiativePage";
import ListPage from "../../pages/list/ListPage";
import NotFoundPage from "../../pages/notFound/NotFoundPage";
import SearchPage from "../../pages/search/SearchPage";
import { AppRoutes, goToPage } from "../../utils/routes";

{
  /* TODO: add lazy loading */
}

const AccountPage = lazy(() => import("../../pages/account/AccountPage"));
const SettingsPage = lazy(() => import("../../pages/settings/SettingsPage"));
const NotificationsPage = lazy(
  () => import("../../pages/notifications/NotificationsPage")
);
const InfoPage = lazy(() => import("../../pages/info/InfoPage"));
const DocPage = lazy(() => import("../../pages/doc/DocPage"));

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
      { path: AppRoutes.DOC, element: <DocPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default () => useRoutes(routes);
