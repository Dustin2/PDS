import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen
        name="register"
        options={{
          title: "Registarse",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
