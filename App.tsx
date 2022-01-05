import React from "react";
import { StatusBar } from "react-native";
import AppContext from "./src/context/AppContext";
import StackNavigator from "./src/navigator/StackNavigator";

const App = () => {
  return (
    <AppContext>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <StackNavigator />
    </AppContext>
  );
};

export default App;
