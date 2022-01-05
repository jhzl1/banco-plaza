import { FC } from "react";
import ChangeScreen from "../screens/ChangeScreen";
import ChargeScreen from "../screens/ChargeScreen";
import CheckPaymentScreen from "../screens/CheckPaymentScreen";
import DetailPaymentScreen from "../screens/DetailPaymentScreen";
import HomeScreen from "../screens/HomeScreen";
import SuccessScreen from "../screens/SuccessScreen";
import TransactionScreen from "../screens/TransactionScreen";

interface Dir {
  name: string;
  component: FC;
}

export const routes = {
  home: "homeScreen",
  charges: "ChargeScreen",
  success: "SuccessScreen",
  changes: "ChangeScreen",
  transactions: "TransactionsScreen",
  checkPayment: "checkPaymentScreen",
  detailPayment: "DetailPaymentScreen",
};

export const dir: Dir[] = [
  { name: routes.home, component: HomeScreen },
  { name: routes.charges, component: ChargeScreen },
  { name: routes.success, component: SuccessScreen },
  { name: routes.changes, component: ChangeScreen },
  { name: routes.transactions, component: TransactionScreen },
  { name: routes.checkPayment, component: CheckPaymentScreen },
  { name: routes.detailPayment, component: DetailPaymentScreen },
];
