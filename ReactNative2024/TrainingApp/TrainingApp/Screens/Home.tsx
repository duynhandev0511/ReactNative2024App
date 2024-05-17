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

const HomeScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        {/* Logo container */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Images/logo1.png')}
            style={styles.logo}
          />
        </View>
        {/* Icon container */}
        <View style={styles.iconContainer}>
          {/* User icon */}
          <TouchableOpacity style={styles.icon}>
            <User color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
          {/* Notification icon */}
          <TouchableOpacity style={styles.icon}>
            <Notification color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/quytrinhsat.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Quy trình làm đề đánh giá năng lực...</Text>
              <Text style={styles.date}>01/01/2024</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/studythpt.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Hướng dẫn ôn thi THPTQG</Text>
              <Text style={styles.date}>23/02/2024</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/study1thpt.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Hướng dẫn giải đề THPTQG</Text>
              <Text style={styles.date}>20/04/2024</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.title1}><MainComponent size="22" color="#696969" variant="Bold"/> Tính năng</Text>  
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/sat1.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Đề đánh giá năng lực 1</Text>
              <Text style={styles.date1}>1000 lượt xem</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/sat2.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Đề đánh giá năng lực 2</Text>
              <Text style={styles.date}>Chưa có lượt xem</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                source={require('../assets/Images/sat3.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Đề đánh giá năng lực 3</Text>
              <Text style={styles.date}>20 lượt xem</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tìm hiểu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.title1}><MainComponent size="22" color="#696969" variant="Bold"/> Lý thuyết</Text>  
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('MatterScreen')}>
              <Image
                source={require('../assets/Images/matter_and_energy.png')}
                style={styles.image}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Vật chất và năng lượng</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PhasesScreen')}>
              <Image
                source={require('../assets/Images/phrase_of_matter.png')}
                style={styles.image}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Các pha của vật chất</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={1}>
              <Image
                source={require('../assets/Images/Atomicstructure.png')}
                style={styles.image}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.title}>Cấu trúc nguyên tử</Text>
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
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Chia không gian ngang đều cho các phần tử trong header
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 70,
    backgroundColor: '#0C0042',
  },
  logoContainer: {
    flexDirection: 'row', // Hiển thị các phần tử trong logo container theo hàng ngang
    alignItems: 'center', // Canh giữa các phần tử trong logo container
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    marginRight: 10,
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
  iconContainer: {
    flexDirection: 'row', // Hiển thị các phần tử trong icon container theo hàng ngang
    alignItems: 'center', // Canh giữa các phần tử trong icon container
  },
  icon: {
    marginLeft: 20, // Khoảng cách giữa các icon
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
  item: {
    width: 313,
    height: 142,
    backgroundColor: 'grey',
    borderRadius: 10,
    overflow: 'hidden', 
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 313,
    height: 142,
    resizeMode: 'stretch'
  },
  itemFooter: {
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#696969',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
  },

  date: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
  },
  date1: {
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#075CFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginTop: 8,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
