
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const IconBerita = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image source={require("../assets/iconberita.png")} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});

export default IconBerita;
