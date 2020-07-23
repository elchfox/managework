import React, { Component } from "react";
import {
  View,
    Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image

} from "react-native";

import Account from "../Data/Account"
import ManagerAccount from "../config/ManagerAccount"

var s = require("../style");

export default class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email:null,
        password:null,
        error:null
        
      };
    
    }
  
  async login() {
      
      let loginRes = await Account.Login({password:this.state.password,email:this.state.email});
      if(loginRes.error === undefined){
          await ManagerAccount.setAsyncStorage(loginRes)
          this.props.navigation.navigate("Home")
          }else{
            this.setState({error: loginRes.error})
      }
        
    }
  
    render() {
    return (
        <View style={{flex:1,alignItems:'center',padding:15}}>
            <View style={[s.wapper]}>
              <TextInput placeholder="Email" placeholderTextColor={"#000"}  keyboardType={"email-address"}
                style={styles.input} onChangeText={(text)=> this.setState({email:text})}/>
              <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({password:text})}/>
              <TouchableOpacity onPress={()=> this.login()} style={styles.btnLogin}>
                <Text style={{textAlign:"center",color:"white",fontSize:18}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("SignUp")}>
                <Text style={{color:"#9c27b0",fontSize:18}}>Sign Up</Text>
              </TouchableOpacity>
              {this.state.error !== null ? <Text style={s.error}>{this.state.error}</Text> : null}

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