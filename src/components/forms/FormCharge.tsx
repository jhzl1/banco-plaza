import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Input, Radio, Select, Text, View } from "native-base";
import { routes } from "../../routes/routes";
import { Image } from "react-native";
import { banksOptions } from "../../const/bankOptions";

const FormCharge = () => {
  const [service, setService] = useState("");
  const [value, setValue] = useState("");

  const { navigate } = useNavigation();
  const { success } = routes;

  return (
    <View>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Seleccione un banco"
        my="2"
        onValueChange={(itemValue) => setService(itemValue)}
      >
        {banksOptions.map(({ source, ...rest }) => (
          <Select.Item {...rest} leftIcon={source} />
        ))}
      </Select>

      <Text fontSize="sm" my={2}>
        Tipo de identificación
      </Text>

      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
        flexDirection="row"
        my={2}
        colorScheme="green"
      >
        <Radio value="one" mx={1}>
          V
        </Radio>
        <Radio value="two" mx={1}>
          E
        </Radio>
        <Radio value="three" mx={1}>
          P
        </Radio>
      </Radio.Group>

      <Input keyboardType="numeric" placeholder="Cédula de identidad" my="2" />
      <Input keyboardType="numeric" placeholder="Código de seguridad" my="2" />

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

export default FormCharge;
