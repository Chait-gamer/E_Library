import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottonTabNavigator from './Components/bottom-tab-navigator';
import * as font from 'expo-font';
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';

export default class App extends Component{

  constructor(){
    super()
    this.state={
      fontLoaded : false
    }
  }

  async LoadFonts () {
    await font.loadAsync({Rajdhani_600SemiBold : Rajdhani_600SemiBold});
    this.setState({
      fontLoaded: true
    })
  }

  componentDidMount(){
    this.LoadFonts();
  }

  render() {
    const {fontLoaded} = this.state;
    if (fontLoaded){
    return <BottonTabNavigator/>
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
