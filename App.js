import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}}

const tabNavigator = createBottomTabNavigator({
  WriteStoryScreen: {screen:WriteStoryScreen},
  ReadStoryScreen: {screen:ReadStoryScreen}
},
{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.routeName
    if(routeName==="WriteStoryScreen"){
      return(
      <Image style={{width:40,height:30}}
      source={require('./assets/write.png')}/>
      )}
    else if(routeName==="ReadStoryScreen"){
      return(
      <Image style={{width:30,height:30}}
      source={require('./assets/read.jpg')}/>
      )}
  }
})
})

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
