import React, { useState, useEffect }  from 'react';
import { Text, View, Alert, Image, StyleSheet } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import { connect } from 'react-redux'


// -------------------------------------------------
// import { AuthSession } from "expo";
import * as AuthSession from 'expo-auth-session';
import * as Random from "expo-random";
import * as SecureStore from "expo-secure-store";
import jwtDecoder from "jwt-decode";
import queryString from "query-string";
import {
  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  ID_TOKEN_KEY,
  NONCE_KEY
} from "../../../config.js";

let tempSessionObject;

const generateNonce = async () => {
  console.log("==[ 0 - 1 ]==")
  const nonce = String.fromCharCode.apply(
    null,
    await Random.getRandomBytesAsync(16)
  );
  console.log("==[ 0 - 2 ]==")
  await SecureStore.setItemAsync(NONCE_KEY, nonce);
  console.log("==[ 0 - 3 ]==")
  return nonce;
};
// -------------------------------------------------

const LogIn = ({ navigation, logInUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // -------------------------------------------------
  useEffect(() => {
    SecureStore.getItemAsync(ID_TOKEN_KEY).then(session => {
      if (session) {
        const sessionObj = JSON.parse(session);
        if (sessionObj.exp > Math.floor(new Date().getTime() / 1000)) {
          // setIsLoggedIn(true);
          console.log("--[ sessionObj ]-----------------------------------")
          console.log(sessionObj)
          console.log("-------------------------------------")
          tempSessionObject = sessionObj
        }
      }
    });
  }, []);


        // -----------   ----   ---  --  -- -- ---  --

  const handleLoginPress = async () => {
    console.log("==[ 0 ]==")
    const nonce = await generateNonce();
    // const nonce = 'jhgjhghhkjhdslfhldksajfhlkas'
    console.log("==[ 1 ]==")
    AuthSession.startAsync({
      authUrl:
        `${AUTH_DOMAIN}/authorize?` +
        queryString.stringify({
          client_id: AUTH_CLIENT_ID,
          response_type: "id_token",
          scope: "openid profile email",
          redirect_uri: AuthSession.getRedirectUrl(),
          nonce
        })
    }).then(result => {
      console.log("==[ 2 ]==")
      if (result.type === "success") {
        console.log("==[ 3 ]==")
        decodeToken(result.params.id_token);
      } else if (result.params && result.params.error) {
        console.log("==[ 2 - Err ]==")
        Alert.alert(
          "Error",
          result.params.error_description ||
            "Something went wrong while logging in."
        );
      }
    }).catch(err => { 
      console.log("==[ Error in AuthSession.startAsync ]====")
      console.log(err) 
    })
  };

  const decodeToken = token => {
    console.log("==[ 3 - DT - 1 ]==")
    const decodedToken = jwtDecoder(token);
    console.log("==[ 3 - DT - 2 ]==")
    const { nonce, sub, email, name, exp } = decodedToken;

    console.log("==[ 3 - DT - 3 ]==")
    SecureStore.getItemAsync(NONCE_KEY).then(storedNonce => {
      console.log("==[ 3 - DT - 4 ]==")
      if (nonce == storedNonce) {
        
        SecureStore.setItemAsync(
          ID_TOKEN_KEY,
          JSON.stringify({
            id: sub,
            email,
            name,
            exp,
            token
          })
        ).then(() => {
          logInUser()
        });
      } else {
        console.log("==[ 3 - DT - Err ]==")
        Alert.alert("Error", "Nonces don't match");
        return;
      }
    });
  };

  const handleLogoutPress = () => {
    // SecureStore.deleteItemAsync(ID_TOKEN_KEY).then(onLogout);
    console.log('Deleting the ID-Tokent-key')
    // SecureStore.deleteItemAsync(ID_TOKEN_KEY)
    AuthSession.revokeAsync(tempSessionObject)
  };



  // -------------------------------------------------

  return (
    <View style={{padding: 10}}>
        <Headline style={{ marginBottom: 10}}>
            Welcome to Water Walk!
        </Headline>
        <Text>We use Auth0 for LogIn & SingUp</Text>

        <Image style={styles.image} source={require('../../../assets/auth0Logo1.png')} />

        
        <Button mode="contained"
          style={{ marginBottom: 10, paddingTop: 10, paddingBottom: 10}}
          onPress={() => {
            console.log('Attempting to login', email, password)
            handleLoginPress()
            // logInUser()
        }}>
          Log In
        </Button>

        <Button mode="text" style={{ marginLeft: 'auto'}}
          onPress={() => {
              console.log('Forgot Password')
              navigation.navigate('ForgotPassword')
            }
          } >
          Forgot your password?
        </Button>

        <Button mode="outlined" style={{paddingTop: 10, paddingBottom: 10}}
          onPress={() => {
            console.log('Sign up clicked')
              // navigation.navigate('SignUp')
              handleLogoutPress()
             }
          } >
          Sign Up
        </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 150,
  }
})

function mapDispatcherToProps(dispatch) {
  return {
    logInUser: () => dispatch({ type: 'LOGIN_USER' })
  }
}

export default connect(null, mapDispatcherToProps)(LogIn);


