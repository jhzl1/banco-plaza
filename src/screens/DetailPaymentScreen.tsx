import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base";
import React from "react";
import PaymentItem from "../components/PaymentItem";
import { routes } from "../routes/routes";

const DetailPaymentScreen = () => {
  const { navigate } = useNavigation();
  const { success } = routes;

  return (
    <View padding={5}>
      <Text textAlign="center" mb="4" fontSize="lg" fontWeight="bold">
        Elija el pago a confirmar
      </Text>
      <PaymentItem />
      <PaymentItem />
      <Button
        onPress={() => navigate(success as never)}
        colorScheme="green"
        my="2"
      >
        Siguiente
      </Button>
    </View>
  );
};

export default DetailPaymentScreen;
