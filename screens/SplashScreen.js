import React from "react";
import {ImageBackground} from 'react-native';


export default class SplashScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    
      }
    }
    
    componentWillMount(){
      setTimeout( ()=>{
        this.props.navigation.navigate("Home")
      } ,1000)
    }
    
    render() {
      return (
        <ImageBackground source={ImagesUri.Splash} style={{flex:1,width:"100%"}}>
      
           
        </ImageBackground>
      );
    }
  }


