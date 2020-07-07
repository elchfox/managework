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
var s = require("../style");

export default class SignUpScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Fname:null,
        Lname:null,
        Email:null,
        Password:null
      };
    
    }
  

    async SignUp(){
      console.log("ggg")
      let data = {
        Fname:this.state.Fname,
        Lname:this.state.Lname,
        Email:this.state.Email,
        Password:this.state.Password
      }

      let res = await Account.SignUp(data);
      console.log(res);
      
    }
  
    render() {
    return (
        <View style={{flex:1,alignItems:'center',padding:15}}>
            <View style={[s.wapper]}>
              <TextInput placeholder="First Name" placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({Fname:text})}/>
              <TextInput placeholder="Last Name" placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({Lname:text})}/>
              <TextInput placeholder="Email" placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({Email:text})}/>
              <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({Password:text})}/>
              <TouchableOpacity onPress={()=> this.SignUp()} style={styles.btnLogin}>
                <Text style={{textAlign:"center",color:"white",fontSize:18}}>SignUp</Text>
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