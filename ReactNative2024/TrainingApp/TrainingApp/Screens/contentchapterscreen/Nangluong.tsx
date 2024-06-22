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


const Nangluong = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Năng lượng</Text>
        <Text style={styles.content}>&emsp;Hóa học được định nghĩa là nghiên cứu về vật chất, nhưng năng lượng đóng một vai trò quan trọng trong hóa học. Năng lượng được định nghĩa là khả năng thực hiện công. Năng lượng được bảo toàn, tức là nó không được tạo ra hay bị phá hủy. Điều này có nghĩa là lượng năng lượng bị mất bởi một hệ thống luôn bằng lượng năng lượng thu được bởi hệ thống khác. Năng lượng cũng có thể được chuyển đổi từ dạng này sang dạng khác. Ví dụ, máy nướng bánh mì hoặc máy sấy tóc chuyển đổi năng lượng điện thành năng lượng nhiệt.{'\n'}
        &emsp;Đơn vị dùng để đo lượng năng lượng là jun hoặc calo. Hầu hết mọi người quen thuộc hơn với thuật ngữ calo. Đây không phải là vấn đề vì mối quan hệ đơn giản giữa hai đơn vị là một calo bằng 4,18 jun. Tỷ lệ này rất hữu ích trong việc thiết lập các vấn đề yêu cầu chuyển đổi đơn vị này sang đơn vị khác.</Text>
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
export default Nangluong;
