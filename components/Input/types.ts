import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  TextInputProps,
} from "react-native";

export interface CTextInputProps {
  label?: string;
  value?: string;
  mode?: "flat" | "outlined";
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad";
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  onChangeText?: (text: string) => void;
  leftIcon?: string; // Cambiar a nombre de ícono como string
  rightIcon?: string; // Cambiar a nombre de ícono como string
  onRightIconPress?: () => void; // Acción para el ícono derecho
  underlineColor?: string;
  activeOutlineColor?: string;
  activeUnderlineColor?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void; // Define el tipo
  returnKeyType?: "done" | "go" | "next" | "search" | "send" | "none"; // Aquí añadimos returnKeyType
}
