// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import { Provider as ReduxProvider } from 'react-redux'
import userStore from './src/00-ReduxStores/01-UserStore'
// AppRegistry.registerComponent(appName, () => Main);

import MainNavigation from './src/01-Views/00-MainNav'

// Example of rgba() color
// disabled: 'rgba(0, 0, 0, 0.26)',

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accent: '#C3C9E9',
    disabled: '#d0d3d9',
    error: '#ff6161',
    notification: '#f50057',
    onSurface:'#4E937A',
    primary: '#58abf5',
    secondary: '#8B89DB',
    surface: '#ebf2f1',
    text: '#000000',
  },
};

export default function App() {
  return (
    <ReduxProvider store={userStore}>
      <PaperProvider theme={theme}>
        <MainNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
}

