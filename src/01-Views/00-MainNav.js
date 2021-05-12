import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './01-NoLog/01-LogIn'
import NoLogNav from './01-NoLog/00-NologNav'
import Dashboard from './02-YesLog/01-Dashboard'


function Home({ navigation }) {
  return (
    <Text>Home screen</Text>
  );
}

function About({ navigation }) {
  return (
    <Text>About screen</Text>
  );
}
const Stack = createStackNavigator();

const MainNavigation = () => {
    let isUserLogIn = false

    if(isUserLogIn){
       return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Dashboard/>
        </View>
    );
    }else {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <NoLogNav />
        </View>
      );
    }


}

export default MainNavigation;
