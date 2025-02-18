import { Platform } from "react-native";
import { Colors, StyleSheet, height, width } from "@/constants/Constans-styles";
export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "ios" ? 40 : 20, // Ajusta el padding superior según la plataforma
  },
  animation: {
    width: width * 0.7, // Ajusta el ancho según el tamaño de la pantalla
    height: height * 0.3, // Ajusta la altura de la animación proporcionalmente a la pantalla
    backgroundColor: Colors.blue,
  },
  splashText: {
    color: Colors.blue,
    fontSize: 24,
    marginTop: 20, // Espacio entre la animación y el texto
    textAlign: "center",
  },
});
