import { Text, View } from "native-base";
import React from "react";
import TransactionItem from "../components/TransactionItem";

const TransactionScreen = () => {
  return (
    <View padding={5}>
      <Text textAlign="center" mb="4" fontSize="lg" fontWeight="bold">
        Transacciones
      </Text>

      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </View>
  );
};

export default TransactionScreen;
