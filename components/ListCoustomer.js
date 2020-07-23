import React from "react";
import {Text, TextInput,View,Image,Dimensions,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import Customer from "../Data/Customer"
import { withNavigation } from 'react-navigation';

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var s = require("../style");
 class ListCoustomer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Coustomers:[]
      }
    }

    async componentWillMount(){
      // let res = await Customer.myCustomers();
      this.setState({
        Coustomers:this.props.data
      })

    }
    componentWillReceiveProps = nextProps =>{
      this.setState({Coustomers:nextProps.data})
    
      // this.state.Coustomers =  this.props.data
      // this.setState({
      //   Coustomers: this.state.Coustomers
      // })
    }
 
    renderCoustomer = ({item, index})=>{
      return(
      <TouchableOpacity 
      onPress={()=>           this.props.navigation.navigate("ProfileCustomer",{itemId:item._id})    }
      style={[s.row,{paddingHorizontal:15,paddingVertical:10}]}>
          <Image source={{uri:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}} 
          style={{width:40,height:40,borderRadius:20,marginRight:10}}/>
        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:"#737373"}}>
          <Text style={{color:"black"}}>{item.name}</Text>
          <Text style={{color:"#4d4d4d",fontSize:10}}>{item.phoneNumber}</Text>
        </View>
       
      </TouchableOpacity>)
    }

    render() {
      return (
        <View style={{flex:1,width:"100%"}}>
          <FlatList
                data={this.state.Coustomers}
                renderItem={this.renderCoustomer}
                keyExtractor={(item, index) => index.toString()}
              />
        </View>
      
          
      );
    }
  }

  export default withNavigation(ListCoustomer);
 