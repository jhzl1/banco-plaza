import React from "react";
import { Text, View } from "react-native";
import BtnLink from "../components/BtnLink";
import { styles } from "../theme/homeTheme";

const HomeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text> home screen </Text>
      <View>
        <BtnLink
          title="Pago movil"
          icon="phone-portrait-outline"
          linkTo="ChangeScreen"
        />
        <BtnLink title="Vueltos" icon="cash-outline" linkTo="ChangeScreen" />
        <BtnLink
          title="Transacciones"
          icon="reader-outline"
          linkTo="ChangeScreen"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
