import { useNavigation } from "@react-navigation/native";
import { Button, Input, View } from "native-base";
import React from "react";
import { routes } from "../../routes/routes";

const FormCheckPayment = () => {
  const { navigate } = useNavigation();
  const { detailPayment } = routes;

  return (
    <View>
      <Input
        keyboardType="numeric"
        placeholder="Número de teléfono"
        my="2"
        bg="gray.100"
      />
      <Input keyboardType="numeric" placeholder="Monto" my="2" bg="gray.100" />

      <Button
        onPress={() => navigate(detailPayment as never)}
        colorScheme="green"
        my="2"
      >
        Siguiente
      </Button>
    </View>
  );
};

export default FormCheckPayment;
