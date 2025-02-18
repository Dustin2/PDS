import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/tabs/home"); // Redirigir a home después del login
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}
