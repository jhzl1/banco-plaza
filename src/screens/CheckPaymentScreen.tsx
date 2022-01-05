import { Text, View } from "native-base";
import React from "react";
import FormCheckPayment from "../components/forms/FormCheckPayment";

const CheckPaymentScreen = () => {
  return (
    <View padding={5}>
      <Text textAlign="center" mb="4" fontSize="lg" fontWeight="bold">
        Comprobar pago (P2C)
      </Text>

      <FormCheckPayment />
    </View>
  );
};

export default CheckPaymentScreen;
