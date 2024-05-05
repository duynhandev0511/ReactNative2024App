import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Explore from "../../../Explore";


const ExploreNavigator = () => {

    const ExploreStack = createNativeStackNavigator();

    return (
        <ExploreStack.Navigator initialRouteName="Login">
                <ExploreStack.Screen name="ExploreStack" component={Explore} options={{headerShown:false}}/>
        </ExploreStack.Navigator>
    )
}

export default ExploreNavigator;