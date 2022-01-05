import { Image } from "react-native";
import { BanksOptions } from "../interfaces/banksInterfaces";
import React from "react";

const imageProps = {
  resizeMode: "center",
  style: {
    height: 30,
    width: 30,
  },
};

export const banksOptions: BanksOptions[] = [
  {
    label: "Mercantil",
    value: "mercantil",
    source: (
      <Image
        {...(imageProps as never)}
        source={require(`../assets/img/mercantil.png`)}
      />
    ),
  },
  {
    label: "Venezuela",
    value: "venezuela",
    source: (
      <Image
        {...(imageProps as never)}
        source={require("../assets/img/venezuela.png")}
      />
    ),
  },
  {
    label: "Bancaribe",
    value: "bancaribe",
    source: (
      <Image
        {...(imageProps as never)}
        source={require("../assets/img/bancaribe.png")}
      />
    ),
  },
  {
    label: "Bancrecer",
    value: "bancrecer",
    source: (
      <Image
        {...(imageProps as never)}
        source={require("../assets/img/bancrecer.jpg")}
      />
    ),
  },
  {
    label: "Banesco",
    value: "banesco",
    source: (
      <Image
        {...(imageProps as never)}
        source={require("../assets/img/banesco.png")}
      />
    ),
  },
  {
    label: "Activo",
    value: "activo",
    source: (
      <Image
        {...(imageProps as never)}
        source={require(`../assets/img/activo.png`)}
      />
    ),
  },
];
