import React from 'react';
import { Text, View } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'

const WaterComp = (props) => {
  return (
    <View>
      <NavBar 
      title={"my title"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        
        <Text>
          WaterCalc Comp
        </Text>
      </View>
    </View>
  );
}

export default WaterComp;
