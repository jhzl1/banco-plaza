import { Badge, Text, View } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";

const PaymentItem = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable onPress={() => setSelected(!selected)}>
      <View
        bg="gray.100"
        padding={2}
        rounded="lg"
        justifyContent="space-between"
        flexDirection="row"
        my={1}
        shadow="2"
        borderColor="green.500"
        borderWidth={selected ? 2 : 0}
      >
        <View>
          <Text fontWeight="bold">Ref: 656565</Text>
          <Text>Cel: 0414555656</Text>
          <Text>Banco Mercantil</Text>
          <Text>Bs. 65.5</Text>
        </View>
        <View justifyContent="space-between" alignItems="flex-end">
          <Text>12/01/2022</Text>
          <Text>V-2226565</Text>
          <Badge colorScheme="success" fontWeight="bold" fontSize="lg">
            Aprobado
          </Badge>
        </View>
      </View>
    </Pressable>
  );
};

export default PaymentItem;
