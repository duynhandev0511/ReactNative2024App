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
import Nhietdo from './Nhietdo';


const Dalton = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Định luật Dalton</Text>
        <Text style={styles.content}>&emsp;Dalton phát hiện rằng khi các khí được trộn trong cùng một container và chúng có cùng nhiệt độ, áp suất tổng do các khí tạo ra bằng tổng của áp suất từng khí riêng lẻ. Điều này có thể thấy trong phương trình: Ptotal = Pgas₁ + Pgas₂ + Pgas₃ …………….
Hãy xem xét một container chứa hỗn hợp khí nitrogen và khí oxygen. Nếu áp suất của khí oxygen là 400 torr và áp suất của khí nitrogen là 360 torr, thì áp suất tổng là gì? Sử dụng Định luật Áp suất Riêng của Dalton, áp suất tổng là tổng của các áp suất riêng lẻ này, tức là 760 torr.

</Text>

        <Text style={styles.mtitle1}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Tham khảo ví dụ trên. Viết một phương trình cho áp suất riêng của nitrogen và oxygen. Nếu áp suất tổng trong container là 900 torr và áp suất riêng của khí oxygen là 560 torr, thì áp suất riêng của khí nitrogen là bao nhiêu?
</Text>
<Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>&emsp;Phương trình là Ptotal = PO₂ + PN₂. Áp suất tổng là 900 torr trừ đi áp suất riêng của khí oxygen, 560 torr, cho ta áp suất riêng của khí nitrogen, là 340 torr.
</Text>

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
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
});
export default Dalton;
