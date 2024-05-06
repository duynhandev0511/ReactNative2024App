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


const Hoachat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Hóa chất</Text>
        <Text style={styles.content}>&emsp;Một chất có thể được định nghĩa là bất kỳ loại vật chất nào có tính chất và thành phần giống hệt nhau. Các chất được phân loại là nguyên tố hoặc hợp chất. Các nguyên tố không thể bị phân hủy về mặt hóa học, trong khi các hợp chất có thể bị phân hủy về mặt hóa học. Một nguyên tố được tạo thành từ một nguyên tử cụ thể, khối xây dựng cơ bản của vật chất. Các hợp chất được hình thành từ liên kết của hai hoặc nhiều nguyên tố. Xét phản ứng: CH₄ + 2O₂ → 2H₂O + CO₂. Phản ứng cho thấy các nguyên tố carbon, hydro và oxy trong các hợp chất khác nhau. Phương trình hóa học cũng cho thấy các hợp chất thay đổi như thế nào trong quá trình phản ứng. Mặc dù các hợp chất ở bên trái mũi tên không giống với các hợp chất ở bên phải mũi tên nhưng các nguyên tố trong phản ứng vẫn là carbon, hydro và oxy.
Hỗn hợp là kết quả của sự kết hợp của các nguyên tố và/hoặc hợp chất. Trong một hỗn hợp: {'\n'}
•	Các chất không kết hợp về mặt hóa học (mỗi chất giữ nguyên tính chất của nó). {'\n'}
•	Tỷ lệ các chất có thể khác nhau. {'\n'}
•	Các chất có thể được tách thành các nguyên tố và/hoặc hợp chất ban đầu. {'\n'}{'\n'}&emsp;Hỗn hợp có thể được phân loại là đồng nhất (giống nhau) hoặc không đồng nhất (không giống nhau). Một ví dụ về hỗn hợp đồng nhất là sữa đồng nhất. Bạn không cần phải lắc sữa trước khi sử dụng vì tất cả các mẫu sữa đồng nhất sẽ giống nhau. Dung dịch là hỗn hợp đồng nhất của chất tan hòa tan trong dung môi và có thể được biểu diễn bằng một chất theo sau là ký hiệu (aq) để chứng tỏ chất đó đã tạo thành hỗn hợp đồng nhất với nước (dung dịch nước). Một ví dụ về hỗn hợp không đồng nhất là hỗn hợp cát trong nước. Cát chắc chắn sẽ lắng xuống đáy thùng cho dù bạn có khuấy hỗn hợp đến mức nào.</Text>
        <Text style={styles.mtitle}>Vấn đề</Text>
        <Text style={styles.content}>Phân loại các chất sau thành nguyên tố, hợp chất hoặc hỗn hợp: nước muối, nước, argon, methane và iron.</Text>
        <Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>Nước muối là hỗn hợp đồng nhất của nước và NaCl. Nước là hợp chất được tạo thành từ hydro và oxy. Argon là một nguyên tố. Methane là hợp chất được tạo thành từ hydro và carbon. Iron là một nguyên tố.</Text>
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
export default Hoachat;
