import React from "react";
import { Text, View } from "react-native";
import BtnLink from "../components/BtnLink";
import { routes } from "../routes/routes";
import { styles } from "../theme/homeTheme";

const HomeScreen = () => {
  const { charges } = routes;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}>Sistema de pagos móviles</Text>

      <View style={styles.shorcutsContainer}>
        <BtnLink
          title="Comprobar pago (P2C)"
          icon="checkmark-done-outline"
          linkTo="ChangeScreen"
        />
        <BtnLink title="Cobrar (C2P)" icon="cash-outline" linkTo={charges} />
      </View>
      <View style={styles.shorcutsContainer}>
        <BtnLink title="Vueltos" icon="logo-usd" linkTo="ChangeScreen" />

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
