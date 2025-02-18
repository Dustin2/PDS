import React from "react";
import { Chip } from "react-native-paper";
import { StyleSheet } from "react-native";
import { ChipComponentProps } from "./types";
import { Colors } from "../../constants/Colors";
import { isSmallDevice, isHighDensity, } from "../../constants/Device";


export const CChip = ({
  text,
  isSelected = false,
  onSelect,
  onPress,
  children,
  icon = "check",
  iconColor = "#ffffff",
  style,
}: ChipComponentProps) => {
  const handlePress = () => {
    onSelect?.(text || ""); // Llama al callback pasando el texto asociado
    onPress?.(); // Ejecuta cualquier lógica adicional al presionar
  };

  return (
    <Chip
      onPress={handlePress}
      style={[
        styles.chip,
        style,
        { backgroundColor: isSelected ? Colors.darkBlue : "#f5f5f5" },
      ]}
      textStyle={[
        styles.text,
        { color: isSelected ? "#ffffff" : "#000000" },
      ]}
      icon={isSelected ? icon : undefined}
    >
      {children || text}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: isSmallDevice ? 10 : 12,
    height: isSmallDevice ? 40 : isHighDensity ? 40 : 44,
    paddingHorizontal: isSmallDevice ? 5 : 10,
    paddingBottom:2
    // marginVertical: 6,
    // alignContent:"center",
    // alignItems:"center"
  },
  text: {
    // fontSize: isSmallDevice ? 12 : isHighDensity ? 12 : 10,
    fontSize: isSmallDevice ? 13 : 10,
    // fontStyle:"bold",
    fontWeight:"bold",
    maxWidth: "80%", // Asegura que el texto no exceda el ancho del chip
    textAlign: "center",
    paddingBottom:2
  },
});
