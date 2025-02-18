# Verificar si Node.js está instalado
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js no está instalado. Por favor, instálalo antes de continuar." -ForegroundColor Red
    exit 1
}

Write-Host "📦 Instalando dependencias del proyecto con npm..." -ForegroundColor Cyan

# Instalar dependencias con npm
npm install `
    @craftzdog/react-native-buffer@^6.0.5 `
    @expo/vector-icons@^14.0.4 `
    @gorhom/bottom-sheet@^5.0.6 `
    @react-native-async-storage/async-storage@1.23.1 `
    @react-navigation/bottom-tabs@^7.2.0 `
    @react-navigation/native@^7.0.14 `
    @shopify/flash-list@1.7.3 `
    axios@^1.7.9 `
    babel-plugin-transform-inline-environment-variables@^0.4.4 `
    buffer@^6.0.3 `
    dotenv@^16.4.7 `
    expo@~52.0.32 `
    expo-application@~6.0.2 `
    expo-blur@~14.0.3 `
    expo-camera@~16.0.16 `
    expo-constants@~17.0.3 `
    expo-crypto@~14.0.2 `
    expo-dev-client@~5.0.12 `
    expo-device@~7.0.2 `
    expo-file-system@~18.0.10 `
    expo-font@~13.0.1 `
    expo-haptics@~14.0.1 `
    expo-image@~2.0.5 `
    expo-image-picker@~16.0.6 `
    expo-linking@~7.0.5 `
    expo-local-authentication@~15.0.1 `
    expo-localization@~16.0.1 `
    expo-media-library@~17.0.5 `
    expo-notifications@~0.29.13 `
    expo-router@~4.0.17 `
    expo-sharing@~13.0.1 `
    expo-splash-screen@~0.29.21 `
    expo-status-bar@~2.0.1 `
    expo-symbols@~0.2.2 `
    expo-system-ui@~4.0.8 `
    expo-web-browser@~14.0.2 `
    js-sha1@^0.7.0 `
    lottie-react-native@7.1.0 `
    posthog-react-native@^3.9.1 `
    react@^18.3.1 `
    react-dom@^18.3.1 `
    react-native@0.76.7 `
    react-native-base64@^0.2.1 `
    react-native-device-info@^14.0.2 `
    react-native-gesture-handler@~2.20.2 `
    react-native-image-viewing@^0.2.2 `
    react-native-linear-gradient@^2.8.3 `
    react-native-pager-view@6.5.1 `
    react-native-paper@^5.12.5 `
    react-native-quick-base64@^2.1.2 `
    react-native-reanimated@~3.16.1 `
    react-native-safe-area-context@4.12.0 `
    react-native-screens@~4.4.0 `
    react-native-size-matters@^0.4.2 `
    react-native-tab-view@^4.0.5 `
    react-native-vector-icons@^10.2.0 `
    react-native-web@^0.19.13 `
    react-native-webview@^13.12.5 `
    zustand@^5.0.3

Write-Host "✅ Instalación completada con npm." -ForegroundColor Green
