import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Contact from "../../../Contact";


const ContactNavigator = () => {

    const ContactStack = createNativeStackNavigator();

    return (
        <ContactStack.Navigator initialRouteName="Login">
                <ContactStack.Screen name="ContactStack" component={Contact} options={{headerShown:false}}/>
        </ContactStack.Navigator>
    )
}

export default ContactNavigator;