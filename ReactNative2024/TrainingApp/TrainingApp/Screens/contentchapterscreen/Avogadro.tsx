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


const Avogadro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Định luật Avogadro</Text>
        <Text style={styles.content}>&emsp;Công trình của Avogadro sẽ được xem xét kỹ lưỡng hơn trong Chương 6, nhưng tạm thời hãy nhớ quy tắc này: Thể tích bằng nhau của các khí đóng góp một cách đồng đều vào áp suất tổng. Ví dụ, nếu một container được điền 50% khí neon và 50% khí argon, với áp suất tổng là 760 torr, mỗi khí sẽ đóng góp 380 torr cho áp suất tổng. Nếu thể tích của các khí không bằng nhau, phần trăm thể tích mà mỗi khí chiếm sẽ đóng góp một phần trăm tương ứng vào áp suất tổng.

</Text>

        <Text style={styles.mtitle1}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Một container chứa ba loại khí được pha trộn với nhau ở điều kiện tiêu chuẩn (STP). Container này có (theo thể tích) 10% He, 40% neon và 50% argon. Áp suất riêng của ba loại khí là bao nhiêu?
</Text>
<Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>&emsp;Vì hỗn hợp khí này ở điều kiện STP, áp suất tổng sẽ là áp suất tiêu chuẩn, 760 torr. Cho các phần trăm khí đã được cung cấp, chúng ta có thể thiết lập như sau:{'\n'}
- 10% của 760 là 76, nên He đóng góp 76 torr (10% * 760).{'\n'}
- 50% (hoặc một nửa) của 760 là 380, nên Ar đóng góp 380 torr (50% * 760).{'\n'}
- 304 torr còn lại đến từ Ne, đóng góp 304 torr (40% * 760).{'\n'}
Kiểm tra công việc của bạn. Tổng áp suất riêng có bằng áp suất tổng là 760 torr không?

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
export default Avogadro;
