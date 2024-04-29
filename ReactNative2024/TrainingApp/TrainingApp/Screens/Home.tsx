import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from './Login';
import Learn from './Learn';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native';
import Explore from './Explore';
import Contact from './Contact';

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen 
//         name="Trang chủ" 
//         component={Home} 
//       />
//       <Tab.Screen 
//         name="Ôn thi" 
//         component={Learn} 
//       />
//       <Tab.Screen 
//         name="Khám phá" 
//         component={Explore} 
//       />
//       <Tab.Screen 
//         name="Liên hệ" 
//         component={Contact} 
//       />
//     </Tab.Navigator>
//   );
// }

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <View style={styles.item}>
          <Image
            source={require('../assets/Images/quytrinhsat.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.item}>
          <Text>Item</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  scrollView: {
    flexDirection: 'row'
  },
  item: {
    marginTop: 20,
    width: 313,
    height: 142,
    backgroundColor: 'grey',
    marginRight: 0,
    marginLeft: 20,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  }
});

export default HomeScreen;
