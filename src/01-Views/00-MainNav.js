import React from 'react';
import NoLogNav from './01-NoLog/00-NologNav'
import YesLogNav from './02-YesLog/00-YesLogNav'
import { connect } from 'react-redux'

const MainNavigation = (props) => {
    let isUserLogIn = false

    console.log("---------------")

    if (props.isUserLogIn){
       return (
        <YesLogNav/>
      );
    }

    return (
        <NoLogNav />
    );
}

function mapStateToProps(state) {
  return {
    isUserLogIn: state.isUserLogIn
  }
}

export default connect(mapStateToProps)(MainNavigation);
