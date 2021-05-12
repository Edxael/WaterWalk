import React from 'react';
import { Text, View } from 'react-native';
import NoLogNav from './01-NoLog/00-NologNav'
import YesLogNav from './02-YesLog/00-YesLogNav'

const MainNavigation = () => {
    let isUserLogIn = true

    if(isUserLogIn){
       return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <YesLogNav/>
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
