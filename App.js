import React, {Component} from 'react';
import {StatusBar ,Dimensions} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import  SafeAreaView  from 'react-native-safe-area-view';
// import { withSafeArea } from 'react-native-safe-area'

// const SafeAreaView = withSafeArea(View, 'margin', 'all')

import Router from './config/routes';

const {width,height} = Dimensions.get('screen')

export default class App extends Component {

  // componentDidMount() {
  //   SplashScreen.hide();
  // }
  render() {
    return (
      <SafeAreaProvider style={{backgroundColor:"#2196f361"}}>
        <StatusBar    barStyle="light-content" />
        <SafeAreaView />

        <Router />
      </SafeAreaProvider>
    );
  }
}

