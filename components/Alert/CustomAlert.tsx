//react
import React from "react";
//react native
import { View, Text } from "react-native";  
//react native paper
import { Button, Dialog, Portal, Paragraph, Modal } from "react-native-paper";
//types
import { CustomAlertProps } from "./types";
//styles
import { styles } from "./styles";
const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  onDismiss,
  title,
  message,
  icon = "check-circle", // Icono por defecto
  confirmText = "Aceptar",
  onConfirm,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <Button title={confirmText} onPress={onConfirm || onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
