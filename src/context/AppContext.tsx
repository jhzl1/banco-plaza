import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { NativeBaseProvider } from "native-base";
import { ImageBackground } from "react-native";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppContext: FC<Props> = ({ children }) => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <ImageBackground
      source={require("../assets/img/background.jpg")}
      style={{ flex: 1, height: "100%" }}
    >
      <NavigationContainer theme={navTheme}>
        <NativeBaseProvider>{children}</NativeBaseProvider>
      </NavigationContainer>
    </ImageBackground>
  );
};

export default AppContext;
