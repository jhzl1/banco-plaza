import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

interface BtnLinkProps {
  title: String;
  icon: string;
  linkTo: string;
}

const BtnLink: FC<BtnLinkProps> = ({ title, icon, linkTo }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.7}
      onPress={() => navigate(linkTo as never)}
    >
      <LinearGradient
        colors={["#f1f5f9", "#e2e8f0"]}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <Icon name={icon} size={50} color="#16a34a" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnLink;

const styles = {
  btn: tailwind(
    "rounded-xl overflow-hidden flex-col justify-center items-center flex-1 m-2 py-10"
  ),
  title: tailwind("font-semibold text-gray-800 text-lg text-center"),
};
