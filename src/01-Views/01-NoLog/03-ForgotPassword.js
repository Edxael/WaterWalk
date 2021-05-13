import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const ForgotPassword = () => {

  const [email, setEmail] = useState('')

  return (
    <View style={{padding: 10}}>
      <Title style={{ marginBottom: 10}}>
          Forgot your password? Enter your email  and we'll help you reset it.
      </Title>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ marginBottom: 10}}
      />

      <Button
        style={{paddingTop: 10, paddingBottom: 10}}
        mode="contained"
        onPress={() => {
            console.log('Password Reset Requested:', email)
      }}>
        Reset Password
      </Button>


    </View>
  );
}

export default ForgotPassword;
