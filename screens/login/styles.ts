//react native
import { StyleSheet } from "react-native";

//constants
import { Colors } from "../../constants/Colors";
import { width } from "@/constants/Devices";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  logoTop: {
    height: 200,
    width: 200,
  },

  formContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
    padding: 2,
    // padding:
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: Colors.blue,
    textDecorationLine: "underline",
  },
  containerButtons: {
    alignItems: "center",
  },
  button: {
    width: width - 40,

    paddingVertical: 9,
    // borderRadius: 5,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
