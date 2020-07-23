import React from "react";
import {Text, TextInput,View,Image,Dimensions,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import Customer from "../Data/Customer";
import Listcustomer from "../components/ListCoustomer";
import ManagerAccount from "../config/ManagerAccount";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var s = require("../style");
const {width,height} = Dimensions.get("window");

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:null,
        email:null,
        phoneNumber:null,
        address:null,
        showInputs:false,
        CoustomerL:[]
      }
    }

    async componentWillMount(){
      console.log('fffff');
      let res = await Customer.myCustomers();
      console.log(res,'gg44');
      this.setState({
        CoustomerL:res
      })

    }

    async add(){
      let data = {
        name:this.state.name,
        email:this.state.email,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        userId:global.userId
      }
      let res = await Customer.add(data);

    }
 
    async search(text){
    let res =   await Customer.Search(text)
    this.setState({
      CoustomerL:res
    })
    }

    async logout(){
      await ManagerAccount.logout();
      this.props.navigation.navigate("Login")
    }

    logoutBtn(){
      return(
        <TouchableOpacity onPress={()=> this.logout()} style={{position:'absolute',bottom:15,left:15, 
          padding:15,borderRadius:20,
        backgroundColor:"#3f51b58c"}}>
            <Text>LOGOUT</Text>
        </TouchableOpacity>
      )
    }
    render() {

      return (
        <View style={{flex:1,alignItems:'center',position:'relative'}}>
          <View style={[s.rowSpaceBetween,s.center,{paddingHorizontal:15, maxHeight:75,backgroundColor:'#2196f314'}]}>
                <TextInput placeholder="Search..." placeholderTextColor={"#000"} 
                                style={[{flex:1,  borderRadius:10,    backgroundColor:"#3f51b58c",
                                borderColor:"#737373",borderWidth:0.5, width:"100%",maxWidth:null}]}
                                 onChangeText={(text)=> this.search(text)}/> 
                <TouchableOpacity
                 onPress={()=> this.setState({showInputs:!this.state.showInputs})}
                 style={[s.center,{backgroundColor:"#3f51b5", borderRadius:10,  padding:5, width:45,height:45}]}>
                <Text style={{fontSize:24,color:'white'}}>+</Text>
              </TouchableOpacity>
              </View>

        
              {this.state.showInputs ?
                <View style={[s.wapper,{position:'absolute',backgroundColor:'#bbe1ff',zIndex:2,
                width:width,top:75,paddingVertical:15}]}>
                      
              <View style={{flex:1,width:"100%",justifyContent:'center',alignItems:'center'}}>
                              <View style={[s.rowSpaceAround]}>
                              <TextInput placeholder="Name" placeholderTextColor={"#000"} 
                                style={styles.input} onChangeText={(text)=> this.setState({name:text})}/>
                              <TextInput placeholder="Email" placeholderTextColor={"#000"} 
                                style={styles.input} onChangeText={(text)=> this.setState({email:text})}/>
                              </View>
                    <View style={[s.rowSpaceAround,{maxHeight:90}]}>
                      <TextInput placeholder="Phone Number" placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({phoneNumber:text})}/>
             <TextInput placeholder="Address" placeholderTextColor={"#000"} 
                style={styles.input} onChangeText={(text)=> this.setState({address:text})}/>
                      </View>
              
                <View style={[s.rowSpaceAround,{maxHeight:90}]}>
                    <TouchableOpacity onPress={()=> this.add()} style={styles.btnLogin}>
                        <Text style={{textAlign:"center",color:"white",fontSize:18}}>ADD</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </View>

                : null}

          <Listcustomer data={this.state.CoustomerL}/>
          {this.logoutBtn()}

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
      flex:1,
      marginHorizontal:5,
      backgroundColor:"#3f51b58c",
      marginVertical:10,
      borderRadius:5,
      borderColor:"#737373",
      borderWidth:0.5,
      paddingHorizontal:15,
      maxHeight:45,
      fontSize:18
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
  }, btnLogin:{
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