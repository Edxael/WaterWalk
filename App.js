// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import { Provider as ReduxProvider } from 'react-redux'
import userStore from './src/00-ReduxStores/01-UserStore'
AppRegistry.registerComponent(appName, () => Main);

import MainNavigation from './src/01-Views/00-MainNav'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'aquamarine',
    accent: 'yellow',
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

