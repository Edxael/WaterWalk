import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Headline, TextInput, Snackbar} from 'react-native-paper';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'

const AccountComp = ({ userData, updateUserData }) => {

  const [localUserData, setLocalUserData] = useState({...userData})
  const { navigation, firstName, lastName, email, password } = localUserData
  const [passwordVisible, setPasswordVisible] = useState(false)

  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible);
  const onDismissSnackBar = () => setSnackbarVisible(false);

  return (
    <View style={{height: '100%'}}>
      <NavBar
        title={"Account"}
        navigation={navigation}
      />
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
        <Snackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackBar}
          duration={1000}
          >
          Saved successfully.
      </Snackbar>
    </View>
  );
}

function mapDispatcherToProps(dispatch) {
  return {
    updateUserData: (userData) => dispatch({ type: 'SIGN_UP_USER', userData })
  }
}

function mapStateToProps({ userData }) {
  return {
    userData: userData
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(AccountComp);
