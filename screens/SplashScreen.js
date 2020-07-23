import React from "react";
import {ImageBackground} from 'react-native';

import ManagerAccount from "../config/ManagerAccount"

export default class SplashScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    
      }
    }
    
    async componentWillMount(){
      if(await ManagerAccount.getAsyncStorage()){
        setTimeout( ()=>{
          this.props.navigation.navigate("Home")
        } ,1000)
      }else{
        setTimeout( ()=>{
          this.props.navigation.navigate("Login")
        } ,1000)
      }
 
    }
    
    render() {
      return (
        <></>
      );
    }
  }


