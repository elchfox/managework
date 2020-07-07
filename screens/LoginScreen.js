import React, { Component } from "react";
import {
  View,
    Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image

} from "react-native";

var s = require("../style");

export default class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Username:null,
        Password:null
      };
    
    }
  

    login(){

    }
  
    render() {
    return (
        <View style={{flex:1,alignItems:'center',padding:15}}>
            <View style={[s.wapper]}>
              <TextInput placeholder="UserName" placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({Username:text})}/>
              <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({Password:text})}/>
              <TouchableOpacity onPress={()=> this.login()} style={styles.btnLogin}>
                <Text style={{textAlign:"center",color:"white",fontSize:18}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("SignUp")}>
                <Text style={{color:"#9c27b0",fontSize:18}}>Sign Up</Text>
              </TouchableOpacity>
        </View>
        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
   
    wapperLogoWelcome:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    input:{
      color:'#fff',
      
      width:'100%',
      maxWidth:250,
      backgroundColor:"#3f51b58c",
      marginVertical:10,
      borderRadius:5,
      borderColor:"#737373",
      borderWidth:0.5,
      paddingHorizontal:15,
      maxHeight:45,
      fontSize:18
    },
    btnLogin:{
      width: "100%",
      justifyContent:'center',
      paddingHorizontal:5,
      backgroundColor:"#3F51B5",
      borderRadius:5,
      maxWidth:250,
      marginVertical:10,
      height:45
      
    }
  });