import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from 'react-native';
import { User, MainComponent, Notification} from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';


const QuizzScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Images/QuizzSplashScreen.png')} resizeMode='cover' style={styles.image}>
              <Image
                source={require('../assets/Images/quizzlogo.png')}
                style={styles.logo}
              />
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChapterQuizz')}>
                <Text style={styles.buttonText}>Bắt đầu</Text>
              </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    width: 100,
    height: 'auto',
    backgroundColor: "white",
    padding: 7,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  }
});
export default QuizzScreen;
