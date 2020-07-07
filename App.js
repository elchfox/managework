import React, {Component} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';


import Router from './config/routes';
export default class App extends Component {

  // componentDidMount() {
  //   SplashScreen.hide();
  // }
  render() {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <SafeAreaView />
        <Router />
      </SafeAreaProvider>
    );
  }
}

