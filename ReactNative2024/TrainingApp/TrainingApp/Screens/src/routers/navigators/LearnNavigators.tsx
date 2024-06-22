import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Learn from "../../../Learn";


const LearnNavigator = () => {

    const LearnStack = createNativeStackNavigator();

    return (
        <LearnStack.Navigator initialRouteName="Login">
                <LearnStack.Screen name="LearnStack" component={Learn} options={{headerShown:false}}/>
        </LearnStack.Navigator>
    )
}

export default LearnNavigator;