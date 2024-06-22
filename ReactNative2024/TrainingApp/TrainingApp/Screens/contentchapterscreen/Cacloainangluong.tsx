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


const Cacnangluong = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Các loại năng lượng</Text>
        <Text style={styles.content}>&emsp;Năng lượng được tìm thấy dưới nhiều hình thức. Như đã đề cập ở trên, năng lượng có thể tồn tại dưới dạng nhiệt hoặc điện. Các dạng năng lượng khác là âm thanh, ánh sáng, năng lượng hóa học và năng lượng hạt nhân. Có lẽ hai dạng năng lượng quan trọng nhất trong hóa học là<Text style={{ fontStyle: 'italic' }}> thế năng </Text>và<Text style={{ fontStyle: 'italic' }}> động năng</Text>. Năng lượng tiềm năng là năng lượng được lưu trữ. Một ví dụ điển hình là một người giơ búa lên, sẵn sàng đóng đinh.{'\n'}
        &emsp;Cái búa có khả năng rơi vào đầu móng tay. Khi chiếc búa được vung xuống và di chuyển trong không khí, thế năng được chuyển thành động năng hoặc năng lượng chuyển động. Vì toàn bộ năng lượng được bảo toàn nên thế năng tích trữ trong búa chuyển thành động năng. Khi nhấc búa lên để đập vào chiếc đinh lần nữa, chuyển động của búa hướng lên trên sẽ trở thành thế năng dự trữ cho cú đập tiếp theo vào đầu đinh. Một điều cần nhớ trong hóa học là thiên nhiên thích trạng thái năng lượng thấp hơn. Quy tắc này sẽ được ghi chú nhiều lần trong bài đánh giá hóa học này.</Text>
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
});
export default Cacnangluong;
