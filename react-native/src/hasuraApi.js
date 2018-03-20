const clusterName = " alliance16"

const dataUrl = "https://data." + clusterName + ".hasura-app.io/v1/query";
const loginUrl = "https://auth." + clusterName + ".hasura-app.io/v1/login";
const signupUrl = "https://auth." + clusterName + ".hasura-app.io/v1/signup";

import { Alert } from 'react-native';

const networkErrorObj = {
  status: 503
}

var url = "https://auth.alliance16.hasura-app.io/v1/admin/create-user";

// If you have the auth token saved in offline storage, obtain it in async componentDidMount
// var authToken = await AsyncStorage.getItem('HASURA_AUTH_TOKEN');
// And use it in your headers
// headers = { "Authorization" : "Bearer " + authToken }
export async function trySignup(username, password,mobile,roles) {
  console.log('Making signup query');
 
var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer 001acd2282c06f7c7be3fd98e9932867d82553b4d6352f4d"
    }
};

var body = {
    "provider": "username",
    "data": {
        "username": username,
        "password": password,
        "mobile" : mobile
    },
    "roles": [
        roles
    ],
    "is_active": true
};

requestOptions["body"] = JSON.stringify(body);
console.log('Data Response ---------------------');
try{
  let resp = await fetch(url, requestOptions);
  console.log(resp);
  return resp;
}
catch (e) {
  console.log("Request failed: " + e);
  return networkErrorObj;
}
};