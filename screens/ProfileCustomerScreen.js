import React from "react";
import {Text, TextInput,View,Image,Dimensions,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import Customer from "../Data/Customer";
import Listcustomer from "../components/ListCoustomer";
import { padding } from "../style";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var s = require("../style");
const {width,height} = Dimensions.get("window");

export default class ProfileCustomerScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemId:null,
        user:{}
      }
    }

    async componentWillMount(){
      let itemId = this.props.navigation.getParam("itemId", "NO-ID");
      let res = await Customer.CustomerId(itemId);
      this.setState({user:res})
    }

    render() {
        let user = this.state.user
      return (
        <View style={{flex:1}}>
          <View style={[{alignSelf:'center', paddingVertical:15}]}>
            <Image source={{uri:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}} 
            style={{width:100,height:100,borderRadius:50}}/>
              <Text style={{fontSize:24,textAlign:'center',paddingVertical:15}}>{user.name}</Text>

          </View>
          <View>
              <Text style={[styles.textD]}>{user.email}</Text>
              <Text style={[styles.textD]}>{user.phoneNumber}</Text>
              <Text style={[styles.textD]}>{user.address}</Text>

          </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    textD:{
      fontSize:14,
      color:"#737373",
      paddingVertical:10,
      paddingHorizontal:15
    }
  });