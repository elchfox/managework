import React from "react";
import {Text, TextInput,View,Image,Dimensions,FlatList,StyleSheet} from 'react-native';


var s = require("../style");

const {width,height} = Dimensions.get("window");
export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      
      }
    }

 
 
    render() {
      return (
        <View style={styles.BackBlack}>
      
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    BackBlack:{
      flex:1,backgroundColor:"black"
    },
   sreachView:{
     backgroundColor: "#141518",
    paddingHorizontal:15,
    borderRadius:20,
  marginBottom:15},
  MovieCover:{
    alignItems:'flex-start',
    overflow:'hidden',
    paddingBottom:15,
    borderRadius:20,
    backgroundColor:'#141518',
    marginVertical:15
  },
  Imagewapper:{
    width:"100%",
    height:280,
    maxWidth:"100%"
  },
  btnStyle:{
    backgroundColor:"#1d354c",
    padding:5,
    alignSelf:'center',
      width:120,
    height:40,
    borderRadius:5,
    justifyContent:'center'
  }

  });