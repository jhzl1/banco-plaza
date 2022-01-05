import { FC } from "react";
import ChargeScreen from "../screens/ChargeScreen";
import HomeScreen from "../screens/HomeScreen";
import SuccessScreen from "../screens/SuccessScreen";

interface Dir {
  name: string;
  component: FC;
}

export const routes = {
  home: "homeScreen",
  charges: "ChargeScreen",
  success: "SuccessScreen",
};

export const dir: Dir[] = [
  { name: routes.home, component: HomeScreen },
  { name: routes.charges, component: ChargeScreen },
  { name: routes.success, component: SuccessScreen },
];
