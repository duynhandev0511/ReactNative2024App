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
import { FullWindowOverlay } from 'react-native-screens';


const Cachathacuanguyentu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Các hạt hạ nguyên tử</Text>
        <Text style={styles.content}>&emsp;Người ta hiểu rõ hơn về cấu trúc của nguyên tử nhờ những thí nghiệm bổ sung vào đầu những năm 1900. Việc phát hiện ra các hạt hạ nguyên tử là một bước đột phá lớn trong cấu trúc nguyên tử. Những hạt này được phân loại là electron và nucleon. Các nucleon sau đó được phát hiện là neutron và proton. Tính chất của các hạt này có thể được so sánh cạnh nhau:
</Text>
<Image
                source={require('../anhlythuyet/Bang1chapter3.png')}
                style={styles.image1}
              />
<Text style={styles.content}>&emsp;Điều này chỉ tóm tắt những điều cơ bản nhất của cấu trúc nguyên tử. Thời gian trôi qua, nhiều điều về cấu trúc của nguyên tử đã được tiết lộ.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    // Remove flexDirection: 'row'
  },
  content: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  mtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
  },
  mtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 10,
  },
  image1: {
    width: 380,
    height: 380,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
export default Cachathacuanguyentu
