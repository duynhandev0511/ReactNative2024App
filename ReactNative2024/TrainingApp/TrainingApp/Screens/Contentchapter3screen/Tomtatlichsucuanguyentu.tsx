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


const Tomtatlichsucuanguyentu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tóm tắt lịch sử của nguyên tử</Text>
        <Text style={styles.content}>&emsp;Ý tưởng của chúng ta về nguyên tử đã đi được một chặng đường dài trong vài nghìn năm qua. Ý tưởng ban đầu của người Hy Lạp về các chất là mọi thứ đều được tạo thành từ đất, gió, lửa hoặc nước. Ý tưởng về một hạt không thể phân chia được xuất hiện sau đó, và từ “nguyên tử” bắt nguồn từ từ “atomos” trong tiếng Hy Lạp, có nghĩa là “không thể phân chia”.
Vào đầu những năm 1800, John Dalton đã xây dựng Lý thuyết nguyên tử của mình, có thể tóm tắt như sau:
• Mọi vật chất đều được cấu tạo từ các nguyên tử.
• Tất cả các nguyên tử của một nguyên tố nhất định đều giống nhau (tuy nhiên, trong Chương 3 điều này sẽ bị tranh cãi).
• Hợp chất được tạo thành từ các nguyên tử kết hợp theo tỷ lệ cố định.
• Phản ứng hóa học liên quan đến sự sắp xếp lại các nguyên tử. Các nguyên tử không được tạo ra hoặc bị phá hủy trong phản ứng hóa học.

Vào đầu những năm 1900, một nhà khoa học tên Robert Millikan đã thực hiện một thí nghiệm sử dụng những giọt dầu mang điện tích. Mặc dù các chi tiết của thí nghiệm có thể khá rộng rãi, nhưng về cơ bản các giọt nước được phép rơi qua một điện trường với một tốc độ nhất định. Từ thí nghiệm này, Millikan đã có thể xác định được khối lượng và điện tích của các electron trên giọt dầu.
Cũng vào đầu những năm 1900, Ernest Rutherford đã thực hiện Thí nghiệm lá vàng nổi tiếng của mình. Rutherford đã thiết lập một thí nghiệm trong đó một chất phóng xạ giải phóng các hạt alpha. Những hạt này nhắm vào một tấm lá vàng mỏng. Một màn phủ kẽm sunfua được đặt xung quanh lá vàng để phát hiện các hạt alpha khi chúng chạm vào màn hình. Thí nghiệm của Rutherford cho thấy rằng trong khi một số hạt alpha bị lệch và bật trở lại, phần lớn các hạt alpha có thể đi xuyên qua lá vàng. Điều này được thể hiện trong Hình 3.1.
</Text>
<Image
                source={require('../anhlythuyet/3.1.png')}
                style={styles.image1}
              />
<Text style={styles.content}>&emsp;Câu hỏi tiếp theo cần trả lời là: Tại sao điều này có thể xảy ra? Làm thế nào một hạt alpha, một hạt có khối lượng, có thể đi xuyên qua lá vàng, một chất khác có khối lượng? Vì vàng được rèn thành một tấm mỏng (một số người cho rằng dày khoảng 100 nguyên tử) nên nhiều hạt alpha có thể đi qua lá vàng. Tuy nhiên, không phải mọi hạt alpha đều có thể đi qua và một số bị bật trở lại nguồn bức xạ. Rutherford đã rút ra kết luận sau từ thí nghiệm này:
• Nguyên tử chủ yếu là không gian trống rỗng. (Kết luận này thường được gọi là “khái niệm không gian trống rỗng.”)
• Kích thước hạt nhân nguyên tử nhỏ so với kích thước của toàn bộ nguyên tử.
• Khối lượng nguyên tử tập trung ở hạt nhân nguyên tử.
• Hạt nhân mang điện tích dương.
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
    width: 300,
    height: 300,
    marginLeft: 50,
    resizeMode: "contain"
    
  },
});
export default Tomtatlichsucuanguyentu
