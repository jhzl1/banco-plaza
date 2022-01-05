import { Text } from "native-base";
import React from "react";
import { View } from "react-native";
import FormCharge from "../components/forms/FormCharge";
import { styles } from "../theme/chargeTheme";

const ChargeScreen = () => {
  return (
    <View style={styles.globalPadding}>
      <Text color="gray.800" fontSize={18}>
        Introduzca los siguientes datos:
      </Text>

      <FormCharge />
    </View>
  );
};

export default ChargeScreen;
