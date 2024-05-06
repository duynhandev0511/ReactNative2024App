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


const Vatchat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Vật chất</Text>
        <Text style={styles.content}>&emsp;Hóa học là nghiên cứu về vật chất, nghĩa là bất cứ thứ gì chiếm không gian và có khối lượng. Khối lượng (thước đo số lượng hạt trong một vật thể) không nên được hợp nhất với trọng lượng, đó là ảnh hưởng của trọng lực đến khối lượng. Bởi vì lực hấp dẫn có thể khác nhau, một vật thể có cùng khối lượng trên Trái đất như trên mặt trăng sẽ có trọng lượng thấp hơn trên mặt trăng vì có ít lực hấp dẫn hơn trên mặt trăng. Bởi vì vật chất có khối lượng và chiếm một thể tích (không gian) nhất định, mật độ cho bất kỳ loại vật chất nào cũng có thể được tính bằng phương trình: D = m / V. Các đơn vị thường được sử dụng để tính mật độ là gam (đối với khối lượng) và mililit (mL cho thể tích). Đôi khi đơn vị centimet khối (cm³) được sử dụng thay vì mili lít. Các khối lượng này là tương đương. Bạn sẽ thấy một ngoại lệ đối với quy tắc chung khi tính mật độ khí ở phần sau của cuốn sách này.</Text>
        <Text style={styles.mtitle}>Vấn đề</Text>
        <Text style={styles.content}>Khối lượng riêng của một khối lập phương có chiều dài mỗi cạnh là 2,0 cm và nặng 6,0 gam là bao nhiêu?</Text>
        <Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>Vì chiều dài mỗi cạnh của hình lập phương này là 2,0 cm nên thể tích sẽ là chiều dài × chiều rộng × chiều cao. Đây là (2,0 cm)(2,0 cm)(2,0 cm), hoặc 8 cm³. Khối lượng là 6,0 gram. Thay thế vào phương trình D = m / V và bạn nhận được D = 6,0 gram / 8,0 cm³. Mật độ của chất rắn này là 0,75 gram / cm³.</Text>
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
export default Vatchat;
