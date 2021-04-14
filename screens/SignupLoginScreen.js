import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
        }
    }
    userSignUp = (email,password)=>{
firebase.auth().createUserWithEmailAndPassword(email,password).
then((response)=>{
return Alert.alert("User added successfully.")
})
.catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
return Alert.alert(errorMessage);
});
    }
  userLogin=(email,password)=>{
  firebase.auth().signInWithEmailAndPassword(email,password).
  then(()=>{
return Alert.alert("Successful login")
  })
  .catch(function(error){
var errorCode2 = error.code;
var errorMessage2 = error.message;
return Alert.alert(errorMessage2);
  });
  }
    render(){
        return (
 
          <View style={styles.container}>
     <TextInput
     style = {styles.loginBox}
     placeholder = 'Enter your email id.'
     onChangeText= {(text)=>{
        this.setState({
            email : text,
        })
          }}
     />
          <TextInput
     style = {styles.loginBox}
     placeholder = 'Enter your password.'
     onChangeText= {(text)=>{
        this.setState({
            password : text,
        })
          }}
     />
   <TouchableOpacity
   style = {styles.button}
   onPress = {()=>{this.userLogin(this.state.email,this.state.password)}}
   >
<Text>Login</Text>
   </TouchableOpacity>

   <TouchableOpacity
   style = {styles.button}
   onPress = {()=>{this.userSignUp(this.state.email,this.state.password)}}
   >
<Text>Sign up</Text>
   </TouchableOpacity>
          </View>
        );
      }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBox : {
        width : 200,
        height : 40,
        borderWidth : 2,
    },
    button : {
        width : 100,
        height : 30,
       
    }
  });