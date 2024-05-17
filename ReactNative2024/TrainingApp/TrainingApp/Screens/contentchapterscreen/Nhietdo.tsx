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


const Nhietdo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Nhiệt độ</Text>
        <Text style={styles.content}>&emsp;Nhiệt độ được định nghĩa là năng lượng động trung bình của một mẫu. Thực tế, nhiệt độ đo lường chuyển động, vì vậy có định nghĩa "năng lượng động trung bình." Có hai thang đo nhiệt độ quan trọng cần biết trong hóa học là Celsius và Kelvin. Thang Celsius dựa trên điểm đóng và điểm sôi của nước, lần lượt là 0°C và 100°C. Trong khi đó, thang Kelvin dựa trên nhiệt độ thấp nhất có thể đạt được, 0 K, hay zero tuyệt đối. Tin rằng, ở zero tuyệt đối, tất cả chuyển động của phân tử đều dừng lại. Mối quan hệ giữa Celsius và Kelvin được biểu diễn như K = C + 273.{'\n'}
        &emsp;Khi giải quyết các vấn đề, thang Kelvin được ưa chuộng vì, khác với thang Celsius, thang Kelvin không tạo ra số âm hoặc số không để nhân hoặc chia.

</Text>

<Text style={styles.mtitle}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Điểm sôi và điểm đóng của nước trên thang đo Kelvin là bao nhiêu?
</Text>
        <Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>&emsp;Điểm sôi của nước là 100°C. Sử dụng K = C + 273, ta có 100 + 273 = 373 K. Áp dụng phương trình tương tự, điểm đóng của nước sẽ là 273 K.
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
export default Nhietdo;
