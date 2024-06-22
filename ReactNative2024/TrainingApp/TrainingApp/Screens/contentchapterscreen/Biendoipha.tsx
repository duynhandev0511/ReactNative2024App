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


const Biendoipha = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Các sự thay đổi của pha</Text>
        <Text style={styles.content}>&emsp;Matter có thể tồn tại ở ba pha: chất rắn, chất lỏng và khí. Hình 2.6 tóm tắt các tên của các thay đổi mà các pha có thể trải qua.
</Text>
<Image
                source={require('../anhlythuyet/2.6.png')}
                style={styles.image1}
              />
<Text style={styles.content}>&emsp;Một đường cong nhiệt cũng hữu ích khi quan sát các thay đổi pha theo thời gian. Hình 2.7 là một ví dụ về một đường cong nhiệt, cụ thể là đường cong nhiệt cho nước.</Text>
<Image
                source={require('../anhlythuyet/2.7.png')}
                style={styles.image1}
              />
<Text style={styles.content}>&emsp;Trong biểu đồ này, nhiệt độ được áp dụng cho mẫu đá. Nhiệt độ của đá sẽ tăng lên cho đến khi đạt đến 0°C. Tại điểm này, pha rắn và pha lỏng tồn tại cùng một lúc. Lưu ý rằng không có sự thay đổi trong năng lượng động trung bình trong suốt quá trình thay đổi pha. Nếu nhiệt độ đang được thêm vào và không có sự thay đổi trong năng lượng động trung bình, thì mẫu phải đang tích luỹ năng lượng tiềm năng. Sau khi tất cả đá đã trở thành nước, nhiệt độ (năng lượng động trung bình) sẽ tăng lên lại cho đến khi đạt đến điểm sôi. Một lần nữa, có một thay đổi pha và mẫu đang tích luỹ năng lượng tiềm năng trong khi thay đổi pha diễn ra.</Text>
<Text style={styles.content}>&emsp;Một biểu đồ pha hữu ích khi xem xét ảnh hưởng của nhiệt độ và áp suất đối với một chất. Vì áp suất có thể ảnh hưởng đến thể tích của khí và điểm sôi của chất lỏng, hiểu các mối quan hệ được miêu tả trong biểu đồ pha là hữu ích. Hình 2.8 thể hiện một biểu đồ pha chung.</Text>
<Text style={styles.content}>&emsp;Trong biểu đồ pha, các vùng đại diện cho các pha khác nhau của chất, và các đường chỉ ra điều kiện nơi các chuyển pha xảy ra. Ví dụ, đường phân chia giữa vùng chất rắn và chất lỏng là điểm nóng chảy, và đường phân chia giữa vùng chất lỏng và khí là điểm sôi. Điểm mà ba pha gặp nhau được gọi là điểm tam giác.</Text>
<Text style={styles.content}>&emsp;Hãy đi sâu vào việc hiểu về các thay đổi pha và đường cong nhiệt. điểm của chất lỏng, quan trọng là không bỏ qua áp suất khi xem xét sự thay đổi trong pha. Một biểu đồ pha tổng quát được hiển thị trong Hình 2.8.</Text>
<Text style={styles.content}>&emsp;Điểm mà ba pha rắn, lỏng và khí có thể tồn tại cùng một lúc, với một nhiệt độ và áp suất cụ thể, được gọi là điểm tam giác. Đối với H2O, điểm tam giác tồn tại khi áp suất là 4.57 atm và nhiệt độ là 0.01°C.</Text>
<Image
                source={require('../anhlythuyet/2.8.png')}
                style={styles.image1}
              />
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
export default Biendoipha;
