import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="home" options={{ title: "Inicio" }} />
      <Tabs.Screen name="settings" options={{ title: "Configuración" }} />
      <Tabs.Screen name="profile" options={{ title: "profile" }} />
    </Tabs>
  );
}
