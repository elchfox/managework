import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {I18nManager} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import SplashScreen from '../screens/SplashScreen';


I18nManager.allowRTL(false);

const AppNavigator = createStackNavigator({
  // Splash: {
  //       screen: SplashScreen,
  //       navigationOptions: {
  //         header: null,
  //       },
  //     },
    
  
    Login: {
        screen: LoginScreen,
        navigationOptions: {
          header: null,
        },
      },
    
      SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
          header: null,
        },
      },
    
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  }
  
});


export default createAppContainer(AppNavigator);
