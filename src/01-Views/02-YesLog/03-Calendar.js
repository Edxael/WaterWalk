import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import CalendarComp from '../../02-Components/03-CalendarComponent'

const CalendarView = (props) => {
  return (
    <View>
      <NavBar 
      title={"Calendar"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View style={styles.mainView}>

        <CalendarComp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 10
  }
})

export default CalendarView;
