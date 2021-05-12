import React from 'react';
import { Text, View } from 'react-native';
import LogIn from './01-NoLog/01-LogIn'
import Dashboard from './02-YesLog/01-Dashboard'

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
            <LogIn />
        </View>
    );
    }

    
}

export default MainNavigation;