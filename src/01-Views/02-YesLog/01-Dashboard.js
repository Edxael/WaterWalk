import React, {useState} from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView  } from 'react-native';
import { Button, TextInput, Headline } from 'react-native-paper';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'
import ChartComp from '../../02-Components/04-ChartComp'
import waterData from '../../../assets/TempData/water'
import walkData from '../../../assets/TempData/walk'

const DashboarComp = (props) => {

  const { addWater, userData } = props
  const [waterToAdd, setWaterToAdd] = useState('');

  let updatedWaterNumbers = {
    ...waterData,
    water: [
      ...waterData.water,
      { x: 10, y: props.todayWaterIntake }
    ]
  }


  return (
    <SafeAreaView style={styles.container}>
      <NavBar
      title={"Dashboard"}
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
        <Headline>Welcome {userData.firstName}!</Headline>

        <Text>
          According to your measurements you should be drinking {userData.waterIntakeGoal} oz of water each day, today you have had { props.todayWaterIntake } Oz of water.
        </Text>

          <ChartComp title={'Water Intake'} infoData={updatedWaterNumbers} />

          <TextInput
            label="Add Oz of water"
            mode="outlined"
            value={waterToAdd}
            onChangeText={text => setWaterToAdd(text)}
            keyboardType="numeric"
            style={{ marginBottom: 10}}
          />

          <Button
            style={{paddingTop: 10, paddingBottom: 10}}
            mode="contained"
            onPress={() => {
                console.log('Adding Water')
                if(waterToAdd != ''){
                  addWater(parseInt(waterToAdd, 10))
                  setWaterToAdd('')
                }
          }}>
            Add Water
          </Button>

          <ChartComp title={'Walk Steps'} infoData={walkData} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: NavBar.currentHeight,
  },
  mainContainer: {
    padding: 10
  }
})

function mapStateToProps(state) {
  return {
    todayWaterIntake: state.todayWaterIntake,
    userData: state.userData
  }
}

function mapDispatcherToProps(dispatch) {
  return {
    addWater: (waterToAdd) => dispatch({ type: 'ADD_TO_TODAYS_WATER', waterToAdd })
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(DashboarComp)
