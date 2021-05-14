import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'

const WaterComp = ({ navigation, addWater, addWeight, userData }) => {

  const { waterIntakeGoal, weight: userDataWeight } = userData

  let [calc, setShowCalc] = useState(false)
  let [weight, setWeight] = useState(userDataWeight)

  const weightBasedIntakeGoal = Math.ceil(weight * .67)

  return (
    <View>
      <NavBar
        title={"Water Calculation"}
        subTitle={"Account"}
        navigation={navigation}
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
                  For someone who weighs {userDataWeight} lbs. you should be drinking {weightBasedIntakeGoal} ounces of water per day.
              </Text>
              <Text style={{ marginBottom: 10}}>
                  {Math.ceil(weight * .67)} ounces has been set as your daily water intake goal based off of your weight. If you would set a custom goal you may do so from the Account view.
              </Text>
               {waterIntakeGoal !== weightBasedIntakeGoal && <Text style={{ marginBottom: 10}}>Custom goal has been set to: {waterIntakeGoal} oz</Text>}
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
                label="How much do you weigh (lbs)?"
                placeholder="How much do you weigh (lbs)?"
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
                    setShowCalc(true);
                    addWeight(weight);
                    addWater(Math.ceil(weight * .67));
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

function mapDispatcherToProps(dispatch) {
  return {
    addWater: (water) => dispatch({ type: 'UPDATE_WATER', water }),
    addWeight: (weight) => dispatch({ type: 'UPDATE_WEIGHT', weight })
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(WaterComp);

