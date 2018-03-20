/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert
} from 'react-native';
import {Header,Left,Right,Body,Icon,Content,Item,Input,Form,Button,Spinner} from 'native-base'
import Signup from './src/signup';

export default class App extends Component<{}> {
  
  constructor(props,context){
    super(props,context);
    this.state = {
          UserNameTextBox : '',
          PasswordTextBox : '',
         buttonPressed: false,
         SignupButon:false,
         showPassword:true,
      }
    
  }

  

  handleLogin = async() => {
       this.setState({buttonPressed:true})
        if(this.state.UserNameTextBox == '' )
        {
        Alert.alert('please enter correct UserName')
        this.setState({buttonPressed:false})
        }
        else{
          Alert.alert('Logged in');
          this.setState({buttonPressed:false})
        }
       
    }
    managePasswordVisibility = () =>
    {
      this.setState({ showPassword: !this.state.showPassword });
    }
    
handleSignup= async()=>{
  this.setState({buttonPressed:true})
  this.setState({SignupButon: true})
}

  handleUserNameChange = UserNameTextBox => {
    this.setState({
      ...this.state,
      UserNameTextBox: UserNameTextBox
    })
  }

  handlePasswordChange = PasswordTextBox => {
    this.setState({
      ...this.state,
      PasswordTextBox: PasswordTextBox
    })
  }


 
  render() {
   if(this.state.buttonPressed==false){

    return (
   
  <View>
  
    <ImageBackground source={require('./download.jpg')} style={{
          width: '100%',
          height: '100%',}}>
<Content style={{padding:20}}>
<Form>
<Text style={{fontSize:40, paddingBottom:30, alignSelf:'center'}}>Welcome To RSRTC  </Text>
          <Item rounded style={{borderColor:'black'}} >
            <Input placeholder='Enter Your UserName' placeholderTextColor='white'  style={{color:'white'}} onChangeText={this.handleUserNameChange} value= {this.state.UserNameTextBox} />
          </Item >
          
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
         
          <Item  style={{borderColor:'black'}} rounded>
          
            <Input  secureTextEntry={this.state.showPassword} placeholder='Enter Your Password'
             placeholderTextColor='white'  value= {this.state.PasswordTextBox}
              onChangeText={this.handlePasswordChange} style={{color:'white'}}>
         
          </Input>
          <Button transparent onPress={this.managePasswordVisibility}><Icon name="eye"/></Button>
          </Item>
          
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
          
          <Button block bordered rounded style={{padding:30,borderColor:'black'}} onPress={this.handleLogin}>
            <Text  style={{color:'white'}}>LOGIN</Text>
          </Button>
         
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
         
          <Button transparent style={{ alignSelf:'center'}}><Text style={{fontSize:20,color:'white'}}>Forgot Password!</Text></Button>
          
          <Text style={{ paddingBottom:50, alignSelf:'center'}}></Text>
          
            <Button  transparent style={{alignSelf:'center'}}>
            <Text style={{color:'white',fontSize:20}} 
            onPress={this.handleSignup}
            >New User? Register Here!</Text></Button>
           
          </Form>
        </Content>
    
      </ImageBackground>
     
    </View>  
    );
  }
  else  if(this.state.SignupButon==true){
    return(
      <View>
        <Signup/>
        </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  });
