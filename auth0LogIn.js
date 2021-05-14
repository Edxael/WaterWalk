// import React, { useEffect }  from 'react';
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
} from "./config.js";

// import userStore from './src/00-ReduxStores/01-UserStore'

const generateNonce = async () => {
  const nonce = String.fromCharCode.apply(
    null,
    await Random.getRandomBytesAsync(16)
  );
  await SecureStore.setItemAsync(NONCE_KEY, nonce);
  return nonce;
};


const decodeToken = token => {
    const decodedToken = jwtDecoder(token);    
    const { name, email, nonce, exp, sub } = decodedToken;

    console.log("--[ UserInfo ]-----------------------------------")
    console.log(`name: ${name}`)
    console.log(`email: ${email}`)
    console.log(`nonce: ${nonce}`)
    console.log(`exp: ${exp}`)
    console.log(`sub: ${sub}`)
    console.log("-------------------------------------")

    SecureStore.getItemAsync(NONCE_KEY).then(storedNonce => {
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
            return true
        });
        } else {
        console.log("Error: Nonces don't match")
        Alert.alert("Error", "Nonces don't match");
        return false;
        }
    });
};


// useEffect(() => {
//     SecureStore.getItemAsync(ID_TOKEN_KEY).then(session => {
//       if (session) {
//         const sessionObj = JSON.parse(session);
//         if (sessionObj.exp > Math.floor(new Date().getTime() / 1000)) {
//           // setIsLoggedIn(true);
//           console.log("--[ sessionObj ]-----------------------------------")
//           console.log(sessionObj)
//           console.log("-------------------------------------")
//         }
//       }
//     });
// }, []);


const theEffective = () => {
    SecureStore.getItemAsync(ID_TOKEN_KEY).then(session => {
      if (session) {
        const sessionObj = JSON.parse(session);
        if (sessionObj.exp > Math.floor(new Date().getTime() / 1000)) {
          // setIsLoggedIn(true);
          console.log("--[ sessionObj ]-----------------------------------")
          console.log(sessionObj)
          console.log("-------------------------------------")
        }
      }
    });
}





const auth0LogIN = async () => {
    const nonce = await generateNonce();
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
        if (result.type === "success") {  
        // decodeToken(result.params.id_token);
        const decodeResp = decodeToken(result.params.id_token);
        return decodeResp
        } else if (result.params && result.params.error) {
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


const auth0LogOUT = () => {
    console.log("***[ Loggin Out User ]******************")
    // SecureStore.deleteItemAsync(ID_TOKEN_KEY).then(onLogout);
};


export { auth0LogIN, auth0LogOUT, theEffective } 