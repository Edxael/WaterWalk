import React, { Component } from 'react';
import { View } from 'react-native';

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import eventDates from '../../assets/TempData/calDates'

const CalendarComp = (props) => {
    return (
        <View >
            
            <Calendar
                markedDates={eventDates}
                // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                markingType='multi-period'
                />
        
        </View>
    );
}

export default CalendarComp 