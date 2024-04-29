import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeNavigator from './HomeNavigators';
import { BoxSearch, Category2, GlobalSearch, Home } from 'iconsax-react-native';
import ExploreNavigator from './ExploreNavigators';
import LearnNavigator from './LearnNavigators';
import ContactNavigator from './ContactNavigator';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View,
    Image,
  } from 'react-native';

const TabNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tabs.Navigator  screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 60,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius:5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                },
                tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Trang chủ') {
                return <Home size={size} color={focused ? 'coral' : '#676767'} />;
            } else if (route.name === 'Ôn thi') {
                return <BoxSearch size={size} color={focused ? 'coral' : '#676767'} />;
            } else if (route.name === 'Khám phá') {
                return <GlobalSearch size={size} color={focused ? 'coral' : '#676767'} />;
            } else if (route.name === 'Liên hệ') {
                return <Category2 size={size} color={focused ? 'coral' : '#676767'} />;
            }
                },
        })}>
            <Tabs.Screen name={'Trang chủ'} component={HomeNavigator} />
            <Tabs.Screen name={'Ôn thi'} component={LearnNavigator} />
            <Tabs.Screen name={'Khám phá'} component={ExploreNavigator} />
            <Tabs.Screen name={'Liên hệ'} component={ContactNavigator} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    NavigationContainer: {
        backgroundColor: 'white',
    }
});
export default TabNavigator;