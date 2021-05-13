import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'
import ChartComp from '../../02-Components/04-ChartComp'
import waterData from '../../../assets/TempData/water'
import walkData from '../../../assets/TempData/walk'

const DashboarComp = (props) => {

  const ozFromStore = 89



  return (
    <View>
      <NavBar 
      title={"Dashboard"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View style={styles.mainContainer}>
        <Text>
          According to your measurements you should be drinking {ozFromStore} oz of water each day, today you have drink { props.todayWaterIntake } Oz of water.
        </Text>

        <ChartComp title={'Water Intake'} infoData={waterData} />

        <ChartComp title={'Walk Steps'} infoData={walkData} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10
  }
})

function mapStateToProps(state) {
  return {
    todayWaterIntake: state.todayWaterIntake
  }
}

function mapDispatcherToProps(dispatch) {
  return {
    addWater: () => dispatch({ type: 'ADD_TO_TODAYS_WATER' })
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(DashboarComp)

//{ justifyContent: "center", alignItems: "center" }