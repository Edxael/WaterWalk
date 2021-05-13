import React, { Component } from 'react';
import { View } from 'react-native';

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { connect } from 'react-redux'


const CalendarComp = ({ calendarDates }) => {
    
    return (
        <View >
            <Calendar
                markedDates={calendarDates}
                // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                markingType='multi-period'
            />
        </View>
    );
}


function mapStateToProps(state) {
  return {
    calendarDates: state.calendarDates
  }
}

export default connect(mapStateToProps)(CalendarComp);
