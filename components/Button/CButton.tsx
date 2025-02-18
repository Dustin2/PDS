import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { CButtonProps } from "./types";

export const CButton = ({
  text,
  buttonColor,
  mode = "contained", // Valor predeterminado
  enable,
  dark,
  textColor,
  rippleColor,
  icon,
  onPress,
  children,
  style,
  disabled = false,
}: CButtonProps) => {
  return (

      <Button
        mode={mode}
        icon={icon}
        dark={dark}
        disabled={disabled}
        textColor={textColor}
        buttonColor={buttonColor}
        rippleColor={rippleColor}
        onPress={onPress}
        style={[styles.button, style]}
      >
      {children || text || null}
      </Button>
 
  );
};

const styles = StyleSheet.create({

  button: {
    overflow: "hidden",
  //   minHeight: 48,
    width: "100%", // Asegura que ocupe todo el ancho
  //   justifyContent: "center",
  //   alignItems: "center",

  },
});
