import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { AppRoutes, goToPage } from "./routes";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const UserInitiativePage = lazy(
  () => import("../pages/userInitiatives/UserInitiativePage")
);
const AreaInitiativePage = lazy(
  () => import("../pages/areaInitiatives/AreaInitiativePage")
);
const CreatePage = lazy(() => import("../pages/create/CreatePage"));
const InitiativePage = lazy(() => import("../pages/initiative/InitiativePage"));

const AccountPage = lazy(() => import("../pages/account/AccountPage"));
const SettingsPage = lazy(() => import("../pages/settings/SettingsPage"));
const NotificationsPage = lazy(
  () => import("../pages/notifications/NotificationsPage")
);
const InfoPage = lazy(() => import("../pages/info/InfoPage"));
const DocPage = lazy(() => import("../pages/doc/DocPage"));

const SearchPage = lazy(() => import("../pages/search/SearchPage"));
const NotFoundPage = lazy(() => import("../pages/notFound/NotFoundPage"));

export const router: RouteObject[] = [
  { path: AppRoutes.HOME, element: <HomePage /> },
  { path: AppRoutes.SEARCH, element: <SearchPage /> },
  { path: AppRoutes.CREATE, element: <CreatePage /> },
  {
    path: AppRoutes.INITIATIVES,
    children: [
      { index: true, element: <Navigate to={goToPage.home} replace={true} /> },
      { path: AppRoutes.PERSONAL, element: <UserInitiativePage /> },
      { path: AppRoutes.AREA, element: <AreaInitiativePage /> },
      { path: AppRoutes.SINGLE, element: <InitiativePage /> },
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
