import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { Provider as PaperProvider } from "react-native-paper";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppContext: FC<Props> = ({ children }) => {
  return (
    <NavigationContainer>
      <PaperProvider>{children}</PaperProvider>
    </NavigationContainer>
  );
};

export default AppContext;
