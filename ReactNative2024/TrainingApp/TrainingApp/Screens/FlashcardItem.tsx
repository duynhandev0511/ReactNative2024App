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
import { Location} from 'iconsax-react-native';


const FlashcardItem = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <View style={styles.box}><Text style={styles.title}>The Beauty Of Chemistry</Text></View>
          <View style={styles.box}><Text style={styles.titlesmall}><Location size="20" color="#696969"/> Fstudy, Vietnam</Text></View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
        <View style={styles.itemContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('FlashcardFlatListScreen')}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/periodic.png')}
                style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titletext}>Chemistry Flashcards</Text>
                <Text style={styles.content}>Flashcard là công cụ học tập gọn nhẹ giúp nhớ thông tin về nguyên tố hóa học.</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
        <View style={styles.itemContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('MineralsFlatlistScreen')}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/minerals(1).png')}
                style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titletext}>Explore Minerals</Text>
                <Text style={styles.content}>Khám phá khoáng sản là quá trình tìm kiếm, phát hiện và khai thác các nguồn tài nguyên quý như kim loại, khoáng sản từ trong đất đá.</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
        <View style={styles.itemContainer}>
            <TouchableOpacity activeOpacity={1}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/3dstructure.png')}
                style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titletext}>3D Atomic Structure</Text>
                <Text style={styles.content}>Mô hình nguyên tử 3D là biểu diễn đồ họa của nguyên tử trong ba chiều, giúp hiểu cấu trúc và hình dạng của nó.</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {

  },
  card: {
    height: 350,
    width: 280,
    marginTop: 60,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: 'left',
  },
  titlesmall: {
    fontSize: 18,
    fontWeight: '500',
    color: '#696969',
    marginBottom: 50,
    textAlign: 'left',
    marginLeft: 20,
  },
  itemContainer: {
    alignItems: 'center',
    top: -60,
  },
  item: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  textContainer: {

  },
  titletext: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#042D6F',
    marginTop: 20,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  content: {
    fontSize: 16,
    fontWeight: '500',
    color: '#696969',
    marginTop: 10,
    textAlign: 'left',
    marginHorizontal: 20,
  },
});
export default FlashcardItem;
