import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { User, MainComponent, Notification} from 'iconsax-react-native';
import HeaderComponent from './auth/HeaderComponent';


const Learn = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.learntitle}>Ôn thi</Text>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
            <View style={styles.boxtext}><Text style={styles.textitems}>Hướng dẫn cách giải các câu hỏi SAT</Text>
              <Image
            source={require('../assets/Images/learn1.png')}
            style={styles.learn1}
          /></View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxtext1}><Text style={styles.learntitle1}>Tính năng thông dụng</Text></View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.itemContainer1}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Chapter')}>
            <View style={styles.item1}>
              <Image
                source={require('../assets/Images/chemistry.png')}
                style={styles.image1}
              />
             <Text style={styles.title}>Lý thuyết hóa học</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer1}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('QuizzScreen')}>
            <View style={styles.item1}>
              <Image
                source={require('../assets/Images/question.png')}
                style={styles.image1}
              />
             <Text style={styles.title}>Câu hỏi trắc nghiệm</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer1}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('FlashcardItemScreen')}>
            <View style={styles.item1}>
              <Image
                source={require('../assets/Images/flc.png')}
                style={styles.image1}
              />
             <Text style={styles.title}>Flashcard</Text>
            </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.itemContainer1}>
            <TouchableOpacity activeOpacity={1}>
            <View style={styles.item1}>
              <Image
                source={require('../assets/Images/bubble.png')}
                style={styles.image1}
              />
             <Text style={styles.title}>Chatbot</Text>
            </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    // Remove flexDirection: 'row'
  },
  itemContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  itemContainer1: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  item: {
    width: 313,
    height: 142,
    backgroundColor: '#DC8E47',
    borderRadius: 20,
    overflow: 'hidden', 
  },
  item1: {
    width: 275,
    height: 142,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden', 
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image1: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginLeft: 25,
    marginTop: 20,
  },
  itemFooter: {
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 25,
    marginTop: 20,
  },
  
  learntitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#696969',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  
  learntitle1: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#696969',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  textitems: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginTop: 25,
    width: 200,
  },
  boxtext: {
    flexDirection: 'row',
  },
  //box của tiêu đề lý thuyết
  boxtext1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  learn1: {
    width: 75,
    height: 75,
    marginTop: 20,
    marginLeft: 10,
  },
});
export default Learn;
