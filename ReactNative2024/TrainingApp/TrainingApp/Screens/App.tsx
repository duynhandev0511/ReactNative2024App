import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Learn from './Learn';
import Explore from './Explore';
import Contact from './Contact';
import HomeNavigator from '../src/routers/navigators/HomeNavigators';
import TabNavigator from '../src/routers/navigators/TabNavigators';

useEffect(() => {
  SplashScreen.hide();
},[])

const App = () => {
  return <TabNavigator />
}

export default App;