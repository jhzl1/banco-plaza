import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderNavigator from "./HeaderNavigator";
import { dir } from "../routes/routes";

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
        headerTitle: () => <HeaderNavigator />,
        headerStyle: {
          shadowColor: "white",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          flex: 1,
        },
      }}
    >
      {dir.map((route) => (
        <Stack.Screen {...route} key={route.name} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
