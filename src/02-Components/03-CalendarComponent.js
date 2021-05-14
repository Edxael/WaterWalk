import React, { useState } from 'react';
import { Headline } from 'react-native-paper';

import { View, Text } from 'react-native';

import {Calendar} from 'react-native-calendars';
import { connect } from 'react-redux'


const CalendarComp = ({ activityData }) => {
  
  let [activity, setActivity] = useState({})
  let [date, setDate] = useState({})
  const keys = Object.keys(activityData)

  let calDates = {}
  keys.forEach(key => {
    const activity = activityData[key]
    const water = activity.water ? { startingDay: true, endingDay: true, color: '#5f9ea0' } : null
    const steps = activity.steps ? { startingDay: true, endingDay: true, color: '#77ff5c' } : null
    calDates[key] = {
      periods: [ water, steps]
    } 
  })
    
  return (
      <View >
        <Calendar
            markedDates={calDates}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType='multi-period'
            onDayPress={day => {
              setDate(day)
              const activity = activityData[day.dateString]
              setActivity(activity)
            }
          } />
      
      { 
        date.dateString && activity &&
          <View>
            <Headline>
              Activity for: {date.dateString}
            </Headline>
          </View>
      }
      {
        date.dateString && activity?.water &&
      
        <Text>
          Water: {activity.water} oz
        </Text>
      }
      {
        date.dateString && activity?.steps &&
      
        <Text>
          Steps: {activity.steps}
        </Text>
      }

      </View>
  );
}


function mapStateToProps(state) {
  return {
    activityData: state.activityData
  }
}

export default connect(mapStateToProps)(CalendarComp);
