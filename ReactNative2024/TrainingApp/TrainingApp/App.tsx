import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { I3Dcube, Category2, GlobalSearch, Home } from 'iconsax-react-native';
import HomeNavigator from './Screens/src/routers/navigators/HomeNavigators';
import LearnNavigator from './Screens/src/routers/navigators/LearnNavigators';
import ExploreNavigator from './Screens/src/routers/navigators/ExploreNavigators';
import ContactNavigator from './Screens/src/routers/navigators/ContactNavigator';
import QuizzScreen from './Screens/QuizzSplashScreen';
import Devteam from './Screens/Devteamlist';
import ChapterQuizz from './Screens/ChapterQuizz';
import Chapter from './Screens/Chapter';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
      },
      tabBarIcon: ({ focused, color, size }) => {

  if (route.name === 'Trang chủ') {
      return <Home size={size} color={focused ? 'coral' : '#676767'} />;
  } else if (route.name === 'Ôn thi') {
      return <I3Dcube size={size} color={focused ? 'coral' : '#676767'} />;
  } else if (route.name === 'Khám phá') {
      return <GlobalSearch size={size} color={focused ? 'coral' : '#676767'} />;
  } else if (route.name === 'Tiện ích') {
      return <Category2 size={size} color={focused ? 'coral' : '#676767'} />;
  }
      },
})}>
      <Tab.Screen name={'Trang chủ'} component={HomeNavigator} />
      <Tab.Screen name={'Ôn thi'} component={LearnNavigator} />
      <Tab.Screen name={'Khám phá'} component={ExploreNavigator} />
      <Tab.Screen name={'Tiện ích'} component={ContactNavigator} />
    </Tab.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="QuizzScreen" component={QuizzScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contactteam" component={Devteam} options={{ headerShown: false }} />
        <Stack.Screen name="ChapterQuizz" component={ChapterQuizz} options={{ headerShown: false }} />
        <Stack.Screen name="Chapter" component={Chapter} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
