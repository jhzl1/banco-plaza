import { useNavigation } from "@react-navigation/native";
import { Button, Input, Radio, ScrollView, Select, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import { banksOptions } from "../../const/bankOptions";
import { idOptions } from "../../const/personalIdOptions";
import { routes } from "../../routes/routes";

const FormChange = () => {
  const [value, setValue] = useState("");

  const [service, setService] = useState("");

  const { navigate } = useNavigation();
  const { success } = routes;

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <ScrollView>
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
        placeholder="Número de teléfono"
        my="2"
        bg="gray.100"
      />
      <Input keyboardType="numeric" placeholder="Monto" my="2" bg="gray.100" />

      <Select
        selectedValue={service}
        placeholder="Seleccione moneda"
        my="2"
        onValueChange={(itemValue) => setService(itemValue)}
        bg="gray.100"
      >
        <Select.Item label="Bolívares" value="bs" />
        <Select.Item label="Dólares" value="usd" />
      </Select>

      <Input
        keyboardType="numeric"
        placeholder="Código de seguridad"
        my="2"
        bg="gray.100"
      />

      <Select
        selectedValue={service}
        placeholder="Seleccione un banco"
        my="2"
        onValueChange={(itemValue) => setService(itemValue)}
        bg="gray.100"
      >
        {banksOptions.map(({ source, ...rest }, i) => (
          <Select.Item {...rest} leftIcon={source} key={i} />
        ))}
      </Select>

      <Button
        onPress={() => navigate(success as never)}
        colorScheme="green"
        my="2"
      >
        Siguiente
      </Button>
    </ScrollView>
  );
};

export default FormChange;
