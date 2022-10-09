import * as React from "react";
import DashboardScreen from "../../dashboard/DashboardScreen";
import Login from "../../login/Login";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ChargeTokenScreen from "../../chargetokens/ChargeTokenScreen";
import { JsxElement } from "typescript";
import StationsScreen from "../../stations/StationsScreen";
import dashboardMenu from "../../dashboard/constants/dashboardMenu";
import appTheme from "../theme/AppTheme";
import { withSelectedMenuItemContext } from "../contexts/SelectedMenuItem";
import TransactionsScreen from "../../transactions/TransactionsScreen";
import { withRouteContext } from "../contexts/Route";
import { withFirebaseDataContext } from "../contexts/FirebaseData";

const appRoutes = {
  "/": {
    label: "Bejelentkezés",
    component: withFirebaseDataContext(Login, {}),
    subRoutes: {},
  },
  login: {
    label: "Bejelentkezés",
    component: withFirebaseDataContext(Login, {}),
    subRoutes: {},
  },
  dashboard: {
    label: "Dashboard",
    component: withSelectedMenuItemContext(DashboardScreen, {
      menu: dashboardMenu,
      theme: appTheme,
    }),
    subRoutes: {
      stations: {
        label: "Töltő lista",
        component: React.Fragment,
        subRoutes: {
          list: {
            label: "Töltő lista",
            component: withFirebaseDataContext(StationsScreen, {}),
            subRoutes: {},
          },
        },
      },
      chargetokens: {
        label: "RFID azonosítók",
        component: React.Fragment,
        subRoutes: {
          list: {
            label: "Token lista",
            component: withFirebaseDataContext(ChargeTokenScreen, {}),
            subRoutes: {},
          },
        },
      },
      transactions: {
        label: "Töltések",
        component: withFirebaseDataContext(TransactionsScreen, {}),
        subRoutes: {},
      },
    },
  },
};

export default appRoutes;
