import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import NavBar from '../../02-Components/01-NavBar'
import { connect } from 'react-redux'

const AccountComp = ({ navigation, firstName, lastName, email, password }) => {

  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <View>
      <NavBar
        title={"Account"}
        navigation={navigation}
      />
      <View style={{ padding: 10}}>
        <TextInput
            label="Email"
            mode="outlined"
            value={email}
            disabled
            style={{ marginBottom: 10}}
          />
        <TextInput
            label="First Name"
            mode="outlined"
            value={firstName}
            disabled
            style={{ marginBottom: 10}}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            value={lastName}
            disabled
            style={{ marginBottom: 10}}
          />
        <TextInput
            label="Password"
            mode="outlined"
            value={passwordVisible ? password : '********'}
            disabled
            style={{ marginBottom: 10}}
            right={<TextInput.Icon icon={passwordVisible ? 'eye' : 'eye-off'} onPress={() => { setPasswordVisible(!passwordVisible) }} />}
        />

        <TextInput
          label="Height (inches)"
          mode="outlined"
          value="72"
          disabled
          style={{ marginBottom: 10}}
        />
        <TextInput
          label="Weight (Lbs)"
          mode="outlined"
          value="180"
          disabled
          style={{ marginBottom: 10}}
        />
      </View>
    </View>
  );
}

function mapStateToProps({ userData }) {
  return {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
  }
}

export default connect(mapStateToProps)(AccountComp);
