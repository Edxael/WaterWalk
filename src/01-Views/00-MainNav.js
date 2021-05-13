import React from 'react';
import NoLogNav from './01-NoLog/00-NologNav'
import YesLogNav from './02-YesLog/00-YesLogNav'

const MainNavigation = () => {
    let isUserLogIn = false

    if (isUserLogIn){
       return (
        <YesLogNav/>
      );
    }

    return (
        <NoLogNav />
    );
}

export default MainNavigation;
