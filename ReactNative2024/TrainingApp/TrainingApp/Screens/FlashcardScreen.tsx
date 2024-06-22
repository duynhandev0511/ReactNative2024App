import React, { useState } from "react";
import{
    SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ListRenderItem,
  Button,
  




} from 'react-native'
const {width : screenWidth} = Dimensions.get('window')
import Sound from "react-native-sound";
import { MusicPlay, ArrowLeft } from "iconsax-react-native";
const FlashcardScreen = ({navigation,route}:any) => {
  const item = route.params;
  const PlaySound =(flashcard:any) => {
    var Phatam = new Sound(item.mp3, Sound.MAIN_BUNDLE,  (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + Phatam.getDuration() + 'number of channels: ' + Phatam.getNumberOfChannels());
      
      Phatam.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        
      });
    });
  }
    

    return(
        <SafeAreaView style={{backgroundColor:"white",flex:1}}>
            <View style ={{flex:1}}>
                      <View style={{marginTop:20,marginLeft:5}}>
                      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                      <ArrowLeft size="30" color={"black"} />
                      </TouchableOpacity>
                      </View>
                      <ScrollView
                      showsHorizontalScrollIndicator={false}
                      pagingEnabled
                      horizontal                      
                      >
                        <Image source={item.image1} style={{width:screenWidth,height:630,marginTop:30, borderRadius: 10,}}></Image>
                        <Image source={item.image2} style={{width:screenWidth,height:630,marginTop:30, borderRadius: 10,}}></Image>
                        <Image source={item.image3} style={{width:screenWidth,height:630,marginTop:30, borderRadius: 10,}}></Image>
                        <Image source={item.image4} style={{width:screenWidth,height:630,marginTop:30, borderRadius: 10,}}></Image>
                        <Image source={item.image5} style={{width:screenWidth,height:630,marginTop:30, borderRadius: 10,}}></Image>
                        <Image source={item.image6} style={{width:screenWidth,height:630,marginTop:30, borderRadius: 10,}}></Image>

                      </ScrollView>
                      <TouchableOpacity style={{alignContent:'center',alignItems:'center'}} onPress={PlaySound}>
                      <MusicPlay size="50" color="#1089ff" variant="Bold" style={{marginTop: 10,}}/>
                      </TouchableOpacity>            
                      </View>
                      
                      
                      
        </SafeAreaView>
    )
};
const style = StyleSheet.create({
   header: {
    paddingVertical:20,
    flexDirection:'row',
    alignItems:'center',
    margin:20,
   }

})
export default FlashcardScreen;