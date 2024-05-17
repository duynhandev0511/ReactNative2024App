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


const Charles = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Định luật Charles</Text>
        <Text style={styles.content}>&emsp;Jacques Charles đã thực hiện các thí nghiệm lượng số về ảnh hưởng của sự thay đổi nhiệt độ đối với thể tích của khí. Qua nhiều thí nghiệm khác nhau, ông đã có thể định lượng mối quan hệ giữa nhiệt độ và thể tích. Mối quan hệ này, khác với mối quan hệ được biểu diễn bởi Định luật Boyle, được phát hiện là mối quan hệ trực tiếp. Nghĩa là, khi nhiệt độ của một khí tăng, thể tích của khí cũng tăng theo. Đồ thị trong Hình 2.4 thể hiện một mối quan hệ trực tiếp:
</Text>
<Image
                source={require('../anhlythuyet/2.4.png')}
                style={styles.image1}
              />
<Text style={styles.mtitle}>Hãy nghĩ về điều này:</Text>
        <Text style={styles.content}>&emsp;Nếu một bóng bay được đặt trong tủ lạnh trong 10 phút, điều gì sẽ xảy ra với nó?
Quan trọng khi xem xét về chủ đề nhiệt độ trước khi cố gắng tính toán sử dụng Định luật Charles:
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc2Chapter2.png')}
                style={styles.image2}
              /></View>

        <Text style={styles.mtitle1}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Một mẫu khí ở điều kiện tiêu chuẩn chiếm thể tích 11.2 lít. Nhiệt độ của khí được thay đổi lên 273°C. Thể tích mới của khí là bao nhiêu? Câu trả lời của bạn có ý nghĩa không?
</Text>
<Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>&emsp;Đầu tiên, chúng ta cần chuyển đổi nhiệt độ sang Kelvin. Nhiệt độ ban đầu của mẫu (T₁) là 273 K. Nhiệt độ mới là (T₂) K = 273 + 273 = 546 K. Thể tích ban đầu (V₁) là 11.2 lít. Sử dụng Định luật Charles và thay thế, chúng ta có:
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc2Chapter2.png')}
                style={styles.image2}
              />
<Image
                source={require('../anhlythuyet/Congthuc3Chapter2.png')}
                style={styles.image2}
              /></View>

<Text style={styles.content}>&emsp;Giải phương trình ta được một câu trả lời là 22.4 lít. Chúng ta đã làm đúng chứ? Đúng với, sự tăng lên/gấp đôi nhiệt độ đã dẫn đến sự tăng lên/gấp đôi thể tích của khí.
</Text>
<Nhietdo />
<Text style={styles.title}>Nhiệt độ và áp suất tiêu chuẩn</Text>
        <Text style={styles.content}>&emsp;Bởi vì các thí nghiệm có thể liên quan đến nhiều điều kiện khác nhau có thể ảnh hưởng đến kết quả của thí nghiệm, cần phải đặt ra một tiêu chuẩn để tạo ra một bộ điều kiện chung. Nhiệt độ và áp suất tiêu chuẩn, hay STP, được định nghĩa là 0°C và 1 atm (273 K và 760 torr).
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
    // maxWidth: 315, // Giới hạn chiều cao của tiêu đề
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
  boximg: {
    alignItems: 'center'
  },
  image1: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
  image2: {
    width: '60%',
    resizeMode: 'contain',
  },
});
export default Charles;
