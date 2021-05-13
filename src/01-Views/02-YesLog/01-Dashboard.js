import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import ChartComp from '../../02-Components/04-ChartComp'
import waterData from '../../../assets/TempData/water'

const DashboarComp = (props) => {
  return (
    <View>
      <NavBar 
      title={"my title"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View style={styles.container}>

        <ChartComp title={'Water Intake'} infoData={waterData} />
        
        <Text>
          Dashboard Comp
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    justifyContent: "center",
    backgroundColor: 'pink'
  }
})

export default DashboarComp;

//{ justifyContent: "center", alignItems: "center" }