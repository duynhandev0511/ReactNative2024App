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
import Flashcardlist from "./Flashcardlist";
import { colors } from "./color";
import { ArrowLeftIcon, Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { Colors } from "react-native/Libraries/NewAppScreen";
const{width} = Dimensions.get("screen");
const cardWidth = width/2 -20;
const FlashcardFlatList =({navigation}:any) =>{
  
  const Card = ({flashcard,props}:any) => {
    return( <View style={style.card}>
      <View style ={{alignItems:'center' ,top:-30}}>
        <Image  source={flashcard.image} style ={{height:120,width:120}}/>
        <View style={{marginHorizontal: 20}}>
          <Text style = {{fontSize:18,fontWeight:'bold',color:colors.dark,marginTop:30,textAlign:'center'}}>{flashcard.name}</Text>
          
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Flashcardscreens',flashcard) }>
        <View style={{marginTop:10,elevation:12,backgroundColor:'#1089ff',borderRadius:9,padding:6}}>
         <Text style={{color:colors.white}}> View </Text>
         
        </View>
        </TouchableOpacity>
      </View>
    

    </View>
    )
   };
   const [searchText,setSearchText] = useState('')
    return(
        <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
            <StatusBar translucent={false} backgroundColor={colors.primary}/>
            <View style={style.header}>
            </View>
            
                <View style={{backgroundColor:colors.primary,height:120,paddingHorizontal:20}}>
                    <View style={{flex: 1}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                      <ArrowLeftIcon size="30" color="white" strokeWidth={2} />
                      </TouchableOpacity>
                    <Text style={style.headerTitle}>Chemistry Flashcards</Text>
            
                    <View style={style.inputContainer}>
                      <MagnifyingGlassIcon size="20" strokeWidth={2} color= "black"/>
                    <TextInput 
                    onChangeText={(text) => {
                      
                      setSearchText(text)
                    }}
                    autoCorrect={false} placeholder="Tìm kiếm" style={{color:colors.dark,fontWeight:'bold',fontSize:17}}/>

                    </View>
                    </View>
                    
                </View>
                
                  <View
                  style = {{paddingHorizontal:20,paddingVertical:50,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20,fontWeight:'bold',color: Colors.dark}}>Flashcard</Text>
                  </View>
                  <View>
                  </View>
                  <ScrollView>
                  <FlatList
                  scrollEnabled={false}
                  showsVerticalScrollIndicator = {false}
                  numColumns={2}
                  data={Flashcardlist.filter(eachflashcard => eachflashcard.name.toLowerCase().includes(searchText.toLowerCase()))}
                  renderItem={({item}) => <Card flashcard={item} />}
                  keyExtractor={eachflashcard => eachflashcard.name}
                  >
                  </FlatList>
                  </ScrollView>
        </SafeAreaView>
                              
    )
};
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
    },
    headerTitle: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 23,
      marginTop:"2%"
    },
    inputContainer: {
      height: 60,
      width: '100%',
      backgroundColor: colors.white,
      borderRadius: 10,
      position: 'absolute',
      top: 90,
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      elevation:12,  
    },
    card: {
      height: 220,
      width: cardWidth,
      marginHorizontal:10,
      elevation: 13,
      marginTop:50,
      borderRadius: 15,
      backgroundColor: Colors.white,
    },

    sectionTitle: {
        
      marginHorizontal: 20,
      marginVertical: 50,
      fontWeight: 'bold',
      fontSize: 20,
    },
    
  });
export default FlashcardFlatList;