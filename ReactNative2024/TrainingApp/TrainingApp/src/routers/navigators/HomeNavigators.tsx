import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../../Screens/Home";


const HomeNavigator = () => {

    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Login">
                <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{headerShown:false}}/>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;