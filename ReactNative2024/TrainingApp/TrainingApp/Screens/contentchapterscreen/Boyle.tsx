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


const Boyle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Định luật Boyle</Text>
        <Text style={styles.content}>&emsp;Robert Boyle đã thực hiện các thí nghiệm để xem làm thế nào việc thay đổi áp suất lên một khí sẽ ảnh hưởng đến thể tích của nó. Thí nghiệm của ông cho thấy rằng khi áp suất lên khí tăng, thể tích mà khí chiếm giảm đi. Trong Hình 2.3, biểu đồ bên trái thể hiện một piston không tạo ra áp lực lớn lên một mẫu khí. Biểu đồ ở giữa cho thấy piston đã được nhấn xuống, làm tăng áp suất lên khí. Đáp ứng với sự tăng áp suất, thể tích của khí đã giảm.{'\n'}
        &emsp;Boyle đã xác định được rằng, ở nhiệt độ không đổi, có một mối quan hệ nghịch đảo giữa áp suất và thể tích. Nghĩa là, khi giá trị của một yếu tố tăng, giá trị của yếu tố kia giảm. Đồ thị trong Hình 2.3 cho thấy mối quan hệ toán học giữa áp suất và thể tích. Phương trình P₁V₁ = P₂V₂ có thể được sử dụng để thực hiện các tính toán bằng Định luật Boyle để xác định thể tích cuối cùng của một khí sau khi nó đã trải qua sự thay đổi áp suất.
</Text>
<Image
                source={require('../anhlythuyet/2.3.png')}
                style={styles.image1}
              />
<Text style={styles.mtitle}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Một khí chiếm thể tích 22.4 lít và áp suất lên nó tăng từ 760 torr lên 1520 torr. Thể tích mới là bao nhiêu? Tại sao câu trả lời của bạn hợp lý?</Text>
        <Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>Thể tích ban đầu của khí là 22.4 lít (V₁) ở áp suất ban đầu là 760 torr (P₁). Áp suất mới là 1520 torr (P₂).
Sử dụng phương trình P₁V₁ = P₂V₂, chúng ta sắp xếp lại để giải cho thể tích mới sao cho phương trình trông như P₁V₁/P₂ = V₂.
Thay thế ta có:
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc1Chapter2.png')}
                style={styles.image3}
              /></View>
<Text style={styles.content}>Giá trị của thể tích mới là 11.20 lít.{'\n'}
Câu trả lời có ý nghĩa không? Có. Áp suất đã tăng/gấp đôi; do đó, thể tích phải giảm/giảm một nửa. Câu trả lời rõ ràng cho thấy một thể tích nhỏ hơn so với thể tích ban đầu là 22.4 lít.
</Text>
<Text style={styles.mtitle1}>Hãy suy nghĩ về điều này:</Text>
        <Text style={styles.content}>&emsp;Thể tích giảm khi áp suất tăng lên không? Một chai nước ngọt nhựa có thể chứa 20 ounces. Nếu một chai đã được rót sạch và sau đó bị làm phẳng bằng cách có người nhảy lên, chai nước sẽ giữ được bao nhiêu ounces nước bây giờ?
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
  boximg: {
    alignItems: 'center'
  },
  image1: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
  image3: {
    width: '90%',
    resizeMode: 'contain',
  },
});
export default Boyle;
