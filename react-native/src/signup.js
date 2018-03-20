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
  Alert,Picker,Spinner
} from 'react-native';

import {Header,Left,Right,Body,Icon,Content,Item,Input,Form,Button,} from 'native-base'
import App from '../App';
import {MapScreenShow} from './MapScreen'
import { trySignup } from './hasuraApi';
export default class Signup extends Component<{}> {
  
  constructor(props,context){
    super(props,context);
    this.state = {
        
          PasswordTextBox : '',
          UserNameTextBox:'',
          MobileTextBox:'',
         LoginButton: false,
         SignupButon:false,
         showPassword:true,
         user:'Driver',
         showMap:false,
      }
    
  }

  
  
  handleSignup = async() => {
       this.setState({LoginButton:true})
       Alert.alert(this.state.user)
        if(this.state.UserNameTextBox == '' && this.state.PasswordTextBox=='' && this.state.user=='')   {
        Alert.alert('please enter Correct Details')
        this.setState({LoginButton:false})
        }
        else{
          let resp = await trySignup( this.state.UserNameTextBox,this.state.MobileTextBox,this.state.PasswordTextBox,this.state.user);
          if(resp.status !== 200  ){
            if (resp.status ===504 ) {
              Alert.alert("Network Error", "Check your internet connection" )
              this.setState({LoginButton:false})
            } else {
              Alert.alert("Error")
              this.setState({LoginButton:false})    
            }
          } else {  
            this.setState({showMap:true})
            this.setState({SignupButon:false})
            this.setState({LoginButton:false})
            Alert.alert("Success", "Data inserted")  
                }
           }
       
    }
  
    updateUser = (user) => {
      this.setState({ user: user })
   }
handleLogin= async()=>{
  this.setState({LoginButton:true})
  this.setState({SignupButon: true})
}

 
  handleUserNameChange = UserNameTextBox => {
    this.setState({
      ...this.state,
      UserNameTextBox: UserNameTextBox
    })
  }
 
 
  handleMobileChange = MobileTextBox => {
    this.setState({
      ...this.state,
      MobileTextBox: MobileTextBox
    })
  }

  managePasswordVisibility = () =>
    {
      this.setState({ showPassword: !this.state.showPassword });
    }

  handlePasswordChange = PasswordTextBox => {
    this.setState({
      ...this.state,
      PasswordTextBox: PasswordTextBox
    })
  }


 
  render() {
   if(this.state.LoginButton==false){

    return (
   
  <View>
  
    <ImageBackground source={require('../download.jpg')} style={{ width:'100%' , height:'100%' }} >
<Content style={{padding:20,}}>
<Form>
<Text style={{fontSize:40, paddingBottom:30, alignSelf:'center'}}>Welcome To RSRTC</Text>
          
<Item  style={{borderColor:'black'}} rounded>
            <Input placeholder='Enter UserName' placeholderTextColor='white' value= {this.state.UserNameTextBox} onChangeText={this.handleUserNameChange} style={{color:'white'}}/>
          </Item>
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
          <Item  style={{borderColor:'black'}} rounded>
            <Input  secureTextEntry={this.state.showPassword} placeholder='Enter Password' placeholderTextColor='white' 
            value= {this.state.PasswordTextBox} onChangeText={this.handlePasswordChange} style={{color:'white'}}/>
            <Button transparent onPress={this.managePasswordVisibility}><Icon name="eye"/></Button>
          </Item>
         
         <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
         
         <Item  style={{borderColor:'black'}} rounded>
           <Input placeholder='Mobile No.' placeholderTextColor='white' value= {this.state.MobileTextBox} onChangeText={this.handleMobileChange} style={{color:'white'}}/>
         </Item>
         <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
         
        
         <Picker  rounded style={{color:'white'}} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Driver" value = "Driver" />
               <Picker.Item label = "Passenger" value = "Passenger" />
              
            </Picker>
           
           
          
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>  
          <Button block bordered rounded style={{padding:30,borderColor:'black'}} onPress={this.handleSignup}>
            <Text  style={{color:'white'}}>SIGNUP</Text>
          </Button>
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
          
            <Button  transparent style={{alignSelf:'center',}}><Text style={{color:'white',fontSize:20,paddingBottom:30}} 
            onPress={this.handleLogin}
            >Already Register Login Here!</Text></Button>
           
          </Form>
        </Content>
    
      </ImageBackground>
     
    </View>  
    );
  }
  else  if(this.state.SignupButon==false && this.state.showMap==true){
    return(
     <View> 
    <MapScreenShow/> 
    </View>    
    );
  }
  else if(this.state.SignupButon==true && this.state.LoginButton==true) {
    return(
     <View>
      <App/> 
     </View>
        
    );
  }
   else {
      return(
        <Spinner/>
          
  
      );
    }
  }
}

const styles = StyleSheet.create({
  });
