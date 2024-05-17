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


const Dinhluatkhi = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Động năng trung bình của khí</Text>
        <Text style={styles.content}>&emsp;Mặc dù sự tăng nhiệt độ dẫn đến sự gia tăng năng lượng động trung bình, không phải tất cả các phân tử khí sẽ có cùng một lượng năng lượng động. Đây là lý do tại sao thuật ngữ "năng lượng động trung bình" được sử dụng. Hai đường cong trong Hình 2.5 thể hiện phân phối tốc độ phân tử của một khí ở hai nhiệt độ khác nhau. Lưu ý rằng ở nhiệt độ cao hơn, các phân tử khí di chuyển với năng lượng động cao hơn.
</Text>
<Image
                source={require('../anhlythuyet/2.5.png')}
                style={styles.image1}
              />
<Text style={styles.title}>Định luật khí hỗn hợp</Text>
        <Text style={styles.content}>&emsp;Định luật Charles và định luật Boyle được sử dụng khi áp suất và nhiệt độ của một hệ thống được giữ nguyên, tương ứng. Nhưng nếu áp suất, nhiệt độ và thể tích đều thay đổi trong một vấn đề, điều gì sẽ xảy ra? Đó là khi Định luật Khí hỗn hợp được sử dụng.
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc4Chapter2.png')}
                style={styles.image2}
              /></View>

<Text style={styles.content}>&emsp;Định luật Khí hỗn hợp kết hợp những nguyên tắc của Charles và Boyle. Chú ý rằng nếu bạn che đi các biến T, phương trình của Boyle vẫn được giữ nguyên. Tương tự, nếu bạn che đi các biến P, phương trình của Charles vẫn được giữ nguyên. Thay vì nhớ cả hai phương trình cho Định luật Charles và Boyle, việc nhớ Định luật Khí hỗn hợp và "che đi" các biến đang được giữ nguyên là dễ dàng hơn nhiều.
</Text>
<Text style={styles.mtitle1}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Một mẫu khí neon dung tích 5.6 lít ở điều kiện tiêu chuẩn (STP). Nếu nhiệt độ tăng lên 298 K và áp suất thay đổi thành 600 torr, thể tích mới của mẫu khí sẽ là bao nhiêu?
Giải pháp: Vấn đề bắt đầu ở điều kiện STP, có nghĩa là P₁ = 760 torr và T₁ = 273 K. Thể tích ban đầu là 5.6 lít, nên V₁ = 5.6 L. Áp suất cuối cùng P₂ là 600 torr và nhiệt độ cuối cùng là 298 K.
{'\n'}&emsp;Tiếp theo, sử dụng Định luật Khí hỗn hợp:
</Text>
<View style={styles.boximg}>
<Image
                source={require('../anhlythuyet/Congthuc4Chapter2.png')}
                style={styles.image2}
              />
</View>
        <Text style={styles.content}>&emsp;Thay thế biến ta được:
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc6Chapter2.png')}
                style={styles.image3}
              /></View>
<Text style={styles.content}>&emsp;Kéo nhân và chia để giải cho thể tích mới: 
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc7Chapter2.png')}
                style={styles.image3}
              /></View>
<Text style={styles.content}>&emsp;Hãy tự hỏi, câu trả lời có hợp lý không?{'\n'}
&emsp;Nhiệt độ đã tăng và áp suất đã giảm, vì vậy thể tích mới nên lớn hơn so với 5.6 lít ban đầu.
 
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
  image2: {
    width: '60%',
    resizeMode: 'contain',
  },
  image3: {
    width: '90%',
    resizeMode: 'contain',
  },
});
export default Dinhluatkhi;
