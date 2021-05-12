import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './01-Dashboard'
import Account from './02-Account'
import Calendar from './03-Calendar'
import Parks from './04-Parks'
import MapView from './05-MapView'
import WaterCalc from './06-WaterCalc'

const Drawer = createDrawerNavigator();

const DashboarComp2 = () => {
  return (

      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name="Dashboard" component={Dashboard} />
              <Drawer.Screen name="Account" component={Account} />
              <Drawer.Screen name="Calendar" component={Calendar} />
              <Drawer.Screen name="Parks" component={Parks} />
              <Drawer.Screen name="MapView" component={MapView} />
              <Drawer.Screen name="WaterCalc" component={WaterCalc} />
          </Drawer.Navigator>
      </NavigationContainer>

  );
}

export default DashboarComp2;
