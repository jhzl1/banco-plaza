import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Input, Radio, Select, Text, View } from "native-base";
import { routes } from "../../routes/routes";
import { banksOptions } from "../../const/bankOptions";
import { idOptions } from "../../const/personalIdOptions";

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
        placeholder="Seleccione un banco"
        my="2"
        onValueChange={(itemValue) => setService(itemValue)}
        bg="gray.100"
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
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
        flexDirection="row"
        my={2}
        colorScheme="green"
      >
        {idOptions.map(({ value, label }) => (
          <Radio value={value} mx={1} key={value}>
            {label}
          </Radio>
        ))}
      </Radio.Group>

      <Input
        keyboardType="numeric"
        placeholder="Cédula de identidad"
        my="2"
        bg="gray.100"
      />
      <Input
        keyboardType="numeric"
        placeholder="Código de seguridad"
        my="2"
        bg="gray.100"
      />

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
