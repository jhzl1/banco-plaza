import React from "react";
import { Image, Text, View } from "react-native";
import tailwind from "tailwind-rn";

const HeaderNavigator = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          source={require("../assets/img/logobancoplaza-2.png")}
          style={{
            width: 200,
            height: 45,
            resizeMode: "center",
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  headerContainer: tailwind("justify-center items-center w-72 h-full"),
};

export default HeaderNavigator;
