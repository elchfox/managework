import AsyncStorage from "@react-native-community/async-storage";

class ManagerAccount {

  setAsyncStorage(data){
    
    global.userId = data.user._id;
    global.accessToken = data.token;
    global.email = data.user.email;
    global.experationDate = data.exp * 1000 + Date.now() + "";

    AsyncStorage.setItem("userId", data.user._id);
    AsyncStorage.setItem("fullName", data.user.FullName);
    AsyncStorage.setItem("accessToken", data.token);
    AsyncStorage.setItem("email", data.user.email);
    AsyncStorage.setItem("experationDate",data.exp * 1000 + Date.now() + "");
  }

  async getAsyncStorage(){
    global.userId = await AsyncStorage.getItem("userId");
    global.fullName = await AsyncStorage.getItem("fullName");
    global.accessToken = await AsyncStorage.getItem("accessToken");
    global.email = await AsyncStorage.getItem("email");
    global.experationDate = await AsyncStorage.getItem("experationDate");

    let dateNow = Date.now();
    return parseInt(global.experationDate) > dateNow ? true : false
    // if(parseInt(global.experationDate) > dateNow && global.accessToken !== null)

  }

  async logout(){
     await AsyncStorage.removeItem("userId");
     await AsyncStorage.removeItem("fullName");
     await AsyncStorage.removeItem("accessToken");
     await AsyncStorage.removeItem("email");
     await AsyncStorage.removeItem("experationDate");
     global.userId = ""
     global.fullName = ""
     global.accessToken = ""
     global.email = ""
     global.experationDate = ""
  }
  
}


export default new ManagerAccount();