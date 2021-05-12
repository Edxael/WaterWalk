import React from 'react';
import { Text, View } from 'react-native';
import NoLogNav from './01-NoLog/00-NologNav'
import YesLogNav from './02-YesLog/00-YesLogNav'

const MainNavigation = () => {
    let isUserLogIn = true

    if(isUserLogIn){
       return (
            <YesLogNav/>
    );
    }else {
      return (
          <NoLogNav />
      );
    }


}

export default MainNavigation;
