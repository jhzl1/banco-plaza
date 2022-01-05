import { Text, View } from "native-base";
import React from "react";
import FormChange from "../components/forms/FormChange";

const ChangeScreen = () => {
  return (
    <View padding={5}>
      <Text fontSize="lg" color="gray.800">
        Dar vueltos
      </Text>

      <FormChange />
    </View>
  );
};

export default ChangeScreen;
