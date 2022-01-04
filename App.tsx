import React from "react";
import { StatusBar, Text } from "react-native";
import AppContext from "./src/context/AppContext";
import StackNavigator from "./src/navigator/StackNavigator";

const App = () => {
  return (
    <AppContext>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Banco plaza </Text>
      <StackNavigator />
    </AppContext>
  );
};

export default App;
