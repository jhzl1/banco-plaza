import { Button, Center, Text, View } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../routes/routes";

const SuccessScreen = () => {
  const { navigate } = useNavigation();
  const { home } = routes;

  return (
    <Center p={2}>
      <Icon name="checkmark-outline" size={100} color="#16a34a" />
      <Text fontSize="lg" fontWeight="bold">
        {" "}
        Compra Aprobada{" "}
      </Text>

      <View width="full" bg="gray.100" my={2} rounded="lg" p={2} shadow={1}>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">Nombre empresa </Text>
          <Text> Distribuciones Globales </Text>
        </View>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">RIF </Text>
          <Text> J-123456798</Text>
        </View>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">ARL </Text>
          <Text>6656</Text>
        </View>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">Referencia</Text>
          <Text>0001211456565</Text>
        </View>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">C.I</Text>
          <Text>99898989</Text>
        </View>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">Banco</Text>
          <Text>Banco Mercantil</Text>
        </View>
        <View
          justifyContent="space-between"
          flexDirection="row"
          width="full"
          my={2}
        >
          <Text fontWeight="bold">Monto</Text>
          <Text>10.2 BS</Text>
        </View>

        <Button
          onPress={() => navigate(home as never)}
          colorScheme="green"
          my="2"
        >
          Ir al Inicio
        </Button>
      </View>
    </Center>
  );
};

export default SuccessScreen;
