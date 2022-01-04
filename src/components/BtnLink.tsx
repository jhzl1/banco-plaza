import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        colors={["#3f3f46", "#27272a"]}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <Text style={styles.title}>{title}</Text>
      <Icon name={icon} size={60} color="#71717a" />
    </TouchableOpacity>
  );
};

export default BtnLink;

const styles = {
  btn: tailwind(
    "rounded-lg overflow-hidden flex-row justify-between items-center my-2"
  ),
  title: tailwind("font-bold text-white text-xl p-5"),
};
