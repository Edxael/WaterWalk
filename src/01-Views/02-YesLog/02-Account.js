import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Button, Headline, TextInput, Snackbar} from 'react-native-paper';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'

const AccountComp = ({ userData, updateUserData, navigation }) => {

  const [localUserData, setLocalUserData] = useState({...userData})
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible);
  const onDismissSnackBar = () => setSnackbarVisible(false);
  const { firstName, lastName, email, password, weight, waterIntakeGoal } = localUserData

  useEffect(() => {
    setLocalUserData(userData)
  }, [userData])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: NavBar.currentHeight } }>
      <NavBar
        title={"Account"}
        navigation={navigation}
      />

      <ScrollView>
        <View style={{ padding: 10}}>
          <TextInput
              label="Email"
              mode="outlined"
              value={email}
              style={{ marginBottom: 10}}
              onChangeText={text => setLocalUserData((previousData) => ({...previousData, email: text}))}
            />
          <TextInput
              label="First Name"
              mode="outlined"
              value={firstName}
              style={{ marginBottom: 10}}
              onChangeText={text => setLocalUserData((previousData) => ({...previousData, firstName: text}))}
            />
            <TextInput
              label="Last Name"
              mode="outlined"
              value={lastName}
              style={{ marginBottom: 10}}
              onChangeText={text => setLocalUserData((previousData) => ({...previousData, lastName: text}))}
            />
          <TextInput
              label="Password"
              mode="outlined"
              value={passwordVisible ? password : '********'}
              style={{ marginBottom: 10}}
              disabled={!passwordVisible}
              right={<TextInput.Icon icon={passwordVisible ? 'eye' : 'eye-off'} onPress={() => { setPasswordVisible(!passwordVisible) }} />}
              onChangeText={text => setLocalUserData((previousData) => ({...previousData, password: text}))}
          />
          <TextInput
              label="Weight (lbs)"
              mode="outlined"
              value={weight}
              style={{ marginBottom: 10}}
              onChangeText={text => setLocalUserData((previousData) => ({...previousData, weight: text}))}
            />
            <TextInput
              label="Daily Water Intake Goal (oz)"
              mode="outlined"
              value={waterIntakeGoal.toString()}
              style={{ marginBottom: 10}}
              onChangeText={text => setLocalUserData((previousData) => ({...previousData, waterIntakeGoal: text}))}
            />
          <Button mode="contained"
            style={{ marginBottom: 10, paddingTop: 10, paddingBottom: 10}} 
            onPress={() => {
              console.log('Saving user data')
              updateUserData(localUserData)
              onToggleSnackBar()
              setPasswordVisible(false)
          }}>
            Save
          </Button>

        </View>
      </ScrollView>

      <Snackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackBar}
          duration={1000}
          >
          Saved successfully.
      </Snackbar>
    
    </SafeAreaView>
  );
}

function mapDispatcherToProps(dispatch) {
  return {
    updateUserData: (userData) => dispatch({ type: 'UPDATE_USER_DATA', userData })
  }
}

function mapStateToProps({ userData }) {
  return {
    userData: {
      ...userData,
    }
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(AccountComp);
