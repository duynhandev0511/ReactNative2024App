import React from 'react';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Learn from './Learn';
import Explore from './Explore';
import Contact from './Contact';
import HomeNavigator from '../src/routers/navigators/HomeNavigators';
import TabNavigator from '../src/routers/navigators/TabNavigators';


const App = () => {
  return <TabNavigator />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
    //     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //     <Stack.Screen name="Learn" component={Learn} options={{ headerShown: false }} />
    //     <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
    //     <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
}

export default App;