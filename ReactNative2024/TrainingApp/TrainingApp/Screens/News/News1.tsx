import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SectionComponent from "../auth/SectionComponent";
import { SvgUri } from "react-native-svg";

const News1 = () => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator ={false}>
                <SectionComponent>
                    <SvgUri 
                    width="100%"
                    height="100%"
                    uri="file:///C:/Users/SONY/Documents/Code/ReactNative2024/TrainingApp/TrainingApp/assets/Images/logottonew.svg" />
                </SectionComponent>
            </ScrollView>
        </SafeAreaView>
    );
};

export default News1;