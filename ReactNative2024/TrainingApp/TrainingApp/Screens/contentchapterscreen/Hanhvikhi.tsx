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


const Khi = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Hành vi của khí</Text>
        <Text style={styles.content}>Hành vi của khí còn có thể được giải thích thêm bằng Lý thuyết phân tử động học, hay KMT. KMT mô tả những điều sau: {'\n'}
• Các phân tử khí là các hạt riêng lẻ di chuyển theo đường thẳng và ngẫu nhiên. Điều này sẽ tiếp tục cho đến khi chúng va chạm hoặc bị tác động bởi một lực khác. {'\n'}
• Các phân tử khí liên tục va chạm và truyền năng lượng trong suốt những va chạm này. Trong một mẫu khí cô lập, năng lượng tổng là bảo toàn.{'\n'}
• Thể tích của từng phân tử khí là không đáng kể so với thể tích mà chúng chiếm.{'\n'}
• Không xem xét sự tồn tại của lực hấp dẫn giữa các phân tử khí.{'\n'}
Những nguyên lý này giúp chúng ta hiểu và dự đoán hành vi quang học của khí bằng cách xem xét những chuyển động và tương tác vi mô của các hạt riêng lẻ.
</Text>

<Text style={styles.title}>Áp lực</Text>
        <Text style={styles.content}>&emsp;Các khí tạo ra áp lực khi va chạm vào các vật khác. Áp lực được tạo ra bởi khí có thể được định nghĩa là lượng lực tác động lên một diện tích. Bất kỳ người nào đã xem hoặc nghe một bản tin thời tiết có thể nhớ đến việc nghe về áp suất khí quyển hoặc áp suất không khí. Những áp suất này có thể khác nhau khi hệ thống áp suất cao và áp suất thấp di chuyển qua một khu vực cụ thể. Có hai thiết bị được sử dụng để đo áp suất tạo ra bởi khí, đó là cột thủy ngân và bồn đo áp suất. Cả hai thiết bị đều có thể hữu ích tùy thuộc vào tình huống.{'\n'}
        &emsp;Cột thủy ngân (xem Hình 2.1) sử dụng một cột thủy ngân trong suốt được đổ thủy ngân vào một bình chứa chất thủy ngân. Khi bạn di chuyển lên độ cao, mức thủy ngân trong cột thủy ngân giảm vì có ít không khí ở độ cao cao hơn. Trung bình, chiều cao của thủy ngân trong cột là 760 milimét so với mức thủy ngân trong bình chứa. Áp suất trung bình này được gọi là áp suất tiêu chuẩn hoặc áp suất khí quyển bình thường.
{'\n'}Có nhiều đơn vị có thể được sử dụng để đo áp suất không khí. Ví dụ, milimét có thể được chuyển đổi thành inch; do đó, áp suất tiêu chuẩn 760 mm Hg cũng có thể được ghi nhận là 30.0 inch thủy ngân. Inch thủy ngân là đơn vị được sử dụng cho các bản tin thời tiết ở Hoa Kỳ. Ba đơn vị phổ biến khác tương ứng với 760 mm Hg là:
	• 1.0 atmospheres (atm){'\n'}
	• 760 torr (theo Evangelista Torricelli) {'\n'}
	• 101.3 kilopascals (kPa)
</Text>
<Image
                source={require('../anhlythuyet/2.1.png')}
                style={styles.image1}
              />
<Text style={styles.content}>Một đơn vị cuối cùng được gặp khi đo áp suất là pound trên mỗi inch vuông (psi). Đơn vị này thường được dành cho việc đo áp suất không khí trong lốp xe tại các trạm xăng ở Hoa Kỳ. Bồn đo áp suất được sử dụng để xác định áp suất của một khí bị chận trong một bình chứa. Hình dáng và mở đầu ở phía trên của bồn đo áp suất cho phép một lượng thủy ngân nhất định được chuyển động tùy thuộc vào áp suất khí quyển và áp suất của khí trong bình chứa. Có ba tình huống cần xem xét khi sử dụng bồn đo áp suất: áp suất khí bằng với áp suất khí quyển, áp suất khí lớn hơn áp suất khí quyển, và áp suất khí nhỏ hơn áp suất khí quyển. Các tình huống này có thể thấy trong Hình 2.2.Một đơn vị cuối cùng được gặp khi đo áp suất là pound trên mỗi inch vuông (psi). Đơn vị này thường được dành cho việc đo áp suất không khí trong lốp xe tại các trạm xăng ở Hoa Kỳ. Bồn đo áp suất được sử dụng để xác định áp suất của một khí bị chận trong một bình chứa. Hình dáng và mở đầu ở phía trên của bồn đo áp suất cho phép một lượng thủy ngân nhất định được chuyển động tùy thuộc vào áp suất khí quyển và áp suất của khí trong bình chứa. Có ba tình huống cần xem xét khi sử dụng bồn đo áp suất: áp suất khí bằng với áp suất khí quyển, áp suất khí lớn hơn áp suất khí quyển, và áp suất khí nhỏ hơn áp suất khí quyển. Các tình huống này có thể thấy trong Hình 2.2.</Text>
<Image
                source={require('../anhlythuyet/2.2.png')}
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
export default Khi;
