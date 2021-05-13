import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'

const WaterComp = (props) => {
  
  let [calc, setShowCalc] = useState(false)
  let [weight, setWeight] = useState('')

  return (
    <View>
      <NavBar 
        title={"my title"} 
        subTitle={"Account"}
        navigation={props.navigation}
      />

      <View style={{padding: 10}}>
        <Title style={{ marginBottom: 10}}>
          How much water should you drink?
        </Title>

        {
          weight.length > 0 && calc
            ?
            <View>
              <Text style={{ marginBottom: 10}}>
                  For someone who weighs {weight} lbs. you should be drinking around {Math.ceil(weight * .67)} ounces of water per day.
              </Text>
              <Button
                style={{marginBottom: 10, paddingTop: 10, paddingBottom: 10}}
                mode="contained"
                onPress={() => {
                  setShowCalc(false)
                  setWeight('');
                }}>
                  Reset
              </Button>
            </View>
            :
            <View>
              <TextInput
                style={{ marginBottom: 10}}
                label="How much do you weigh?"
                placeholder="How much do you weigh?"
                value={weight}
                onChangeText={text => setWeight(text)}
                mode="outlined"
                keyboardType='numeric'
              />
              <Button
                style={{marginBottom: 10, paddingTop: 10, paddingBottom: 10}}
                mode="contained"
                onPress={() => {
                  if (weight.length > 0) {
                    setShowCalc(true)
                  }
                }}
                disabled={!(weight.length > 0)}
              >
                  Calculate Water
              </Button>
            </View>
        }
      </View>
    </View>
  );
}

export default WaterComp;
