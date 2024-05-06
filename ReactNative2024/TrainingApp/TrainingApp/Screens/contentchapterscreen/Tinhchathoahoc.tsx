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


const Tinhchat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tính chất hóa học và vật lý</Text>
        <Text style={styles.content}>&emsp;Tất cả các chất đều có tính chất vật lý và hóa học. Tính chất vật lý là những tính chất có thể quan sát và đo lường được của các chất. Chúng bao gồm pha (rắn, lỏng hoặc khí), màu sắc, mùi, mật độ, điểm sôi hoặc điểm nóng chảy. Tính chất hóa học là tính chất được quan sát thấy khi một chất này phản ứng với các chất khác. Những thay đổi hóa học dẫn đến các chất có tính chất vật lý khác nhau. Ví dụ, khi iron (kim loại rắn, màu xám) phản ứng với khí oxy (một loại khí không mùi, không màu) tạo ra iron oxide hoặc rỉ sét (chất rắn có màu đỏ cam). Bạn cũng có thể lưu ý những thay đổi về mật độ, điểm nóng chảy và điểm sôi của iron, oxy và iron oxide.</Text>
        <Text style={styles.mtitle}>Vấn đề</Text>
        <Text style={styles.content}>Phân loại những thay đổi sau đây thành những thay đổi vật lý hoặc hóa học: đốt một mảnh giấy, đập vỡ một viên phấn, làm tan chảy một khối nước đá và sự rỉ sét của một chiếc đinh sắt.</Text>
        <Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>Đốt giấy làm thay đổi thành phần hóa học của giấy. Đập phấn là một sự thay đổi về thể chất; viên phấn vẫn là viên phấn đó, chỉ có những mảnh nhỏ hơn mà thôi. Làm tan chảy một khối nước đá không làm thay đổi thành phần của nước; đó là một sự thay đổi về thể chất. Rỉ đinh sắt là hiện tượng biến đổi hóa học; sắt bây giờ là một iron oxide.</Text>
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
export default Tinhchat;
