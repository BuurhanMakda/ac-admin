import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// Services
import { AuthContextProvider } from './src/services/Auth/Auth.context';

// Components
import LoginScreen from "./src/app/Login/Login.screen";

// Styles
import styled from "styled-components";
import { theme } from './src/theme';
import { ThemeProvider } from 'styled-components/native';

//Fonts
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight} && margin-top: ${StatusBar.currentHeight}px;
`;

export default function App() {

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <SafeArea>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <LoginScreen />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}
