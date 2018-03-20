const DataUrl="https://hooks.zapier.com/hooks/catch/2908669/8v7zx0/";
const url = "https://data.chores76.hasura-app.io/v1/query";
import { Alert } from 'react-native';

const networkErrorObj = {
  status: 503
}
    export async function  InsertZap (UserName,Email,DOB,Mobile,City)
{
    let requestOptions={
        "method":"POST",
        "headers":{
            "content-Type":"applicaiton/json",
    }
};
let body={
    "UserName": UserName,
    "Email": Email,
    "City": City,
    "Mobile": Mobile,
    "DOB": DOB
};


var requestOptions1 = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body1 = {
    "type": "insert",
    "args": {
        "table": "User",
        "objects": [
            {
                "UserName": UserName,
                "Email": Email,
                "Password": "Password",
                "City": City,
                "Mobile": Mobile,
                "DOB": DOB,
            }
        ]
    }
};


requestOptions["body"] = JSON.stringify(body);
requestOptions1["body1"] = JSON.stringify(body1);
try{
  let resp = await fetch(url, requestOptions);
  let resp1 = await fetch(DataUrl,requestOptions1);
  Alert.alert("response");
  return resp1;
}
catch (e) {
  console.log("Request failed: " + e);
  return networkErrorObj;
}
};