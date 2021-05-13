import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from './01-LogIn'
import SignUp from './02-SignUp'
import ForgoPassword from './03-ForgotPassword'

const Stack = createStackNavigator();



const DashboarComp = () => {
  return (
    
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="LogIn">
                <Stack.Screen name="LogIn" component={LogIn} options={{ title: 'Log In' }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }}/>
                <Stack.Screen name="ForgoPassword" component={ForgoPassword} options={{ title: 'Forgot Password' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    
  );
}

export default DashboarComp;