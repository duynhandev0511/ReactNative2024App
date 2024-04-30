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

const Learn = () => {
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
          <View style={styles.boxtext1}><Text style={styles.learntitle1}>Lý thuyết</Text><Text style={styles.viewall}>Xem tất cả</Text></View>
          <View style={styles.boxtext1}><Text style={styles.learntitle1}>Trắc nghiệm</Text><Text style={styles.viewall}>Xem tất cả</Text></View>
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
    backgroundColor: '#DC8E47',
    borderRadius: 20,
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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

  learntitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  
  learntitle1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    marginTop: 20,
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
  viewall: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#696969',
    marginTop: 20,
    marginBottom: 10,
    marginRight: 20,
  }
});
export default Learn;
