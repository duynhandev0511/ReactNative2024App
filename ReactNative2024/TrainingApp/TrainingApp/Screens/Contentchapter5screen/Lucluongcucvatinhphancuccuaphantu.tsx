// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList
// } from 'react-native';
// import { User, MainComponent, Notification} from 'iconsax-react-native';


// const Dongvi = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <Text style={styles.title}>Đồng vị</Text>
//         <Text style={styles.content}>&emsp;Bạn thường gặp biểu tượng của một phần tử được viết bằng một vài con số. Những con số này nói lên khá nhiều điều về hạt nhân của nguyên tố được đề cập. Nhìn vào ví dụ phổ biến này:


// </Text>
// <Image
//                 source={require('../anhlythuyet/HinhanhphanDongvi.png')}
//                 style={styles.image1}
//               />
// <Text style={styles.content}>&emsp;Số 12, được hiển thị dưới dạng chỉ số trên, được gọi là số khối của nguyên tố. Số khối là tổng số proton và neutron có trong hạt nhân nguyên tử. Hãy nhớ lại thí nghiệm của Rutherford rằng hạt nhân chứa khối lượng của nguyên tử. Vì proton và neutron là các hạt trong hạt nhân nguyên tử nên chúng tạo nên khối lượng của nguyên tử vì khối lượng của electron là rất nhỏ khi so sánh. Số 6, được hiển thị dưới dạng chỉ số dưới, được gọi là số nguyên tử. Điều này có thể được định nghĩa là số lượng proton trong hạt nhân, điện tích hạt nhân (proton là hạt nhân duy nhất có điện tích) hoặc số lượng electron trong một nguyên tử trung tính. Có bao nhiêu neutron trong carbon-12? Để tìm số neutron trong nguyên tử, hãy trừ số nguyên tử khỏi số khối. Trong trường hợp này có 6 neutron trong nguyên tử này.
// Tồn tại các nguyên tử cacbon khác với số khối khác nhau: carbon-13 và carbon-14. Đây là sự so sánh của các nguyên tử carbon này:
// </Text>
// <Image
//                 source={require('../anhlythuyet/Bang2chapter3.png')}
//                 style={styles.image2}
//               />
// <Text style={styles.content}>&emsp;Trong biểu đồ này, nhiệt độ được áp dụng cho mẫu đá. Nhiệt độ của đá sẽ tăng lên cho đến khi đạt đến 0°C. Tại điểm này, pha rắn và pha lỏng tồn tại cùng một lúc. Lưu ý rằng không có sự thay đổi trong năng lượng động trung bình trong suốt quá trình thay đổi pha. Nếu nhiệt độ đang được thêm vào và không có sự thay đổi trong năng lượng động trung bình, thì mẫu phải đang tích luỹ năng lượng tiềm năng. Sau khi tất cả đá đã trở thành nước, nhiệt độ (năng lượng động trung bình) sẽ tăng lên lại cho đến khi đạt đến điểm sôi. Một lần nữa, có một thay đổi pha và mẫu đang tích luỹ năng lượng tiềm năng trong khi thay đổi pha diễn ra.</Text>
// <Text style={styles.content}>&emsp;Một biểu đồ pha hữu ích khi xem xét ảnh hưởng của nhiệt độ và áp suất đối với một chất. Vì áp suất có thể ảnh hưởng đến thể tích của khí và điểm sôi của chất lỏng, hiểu các mối quan hệ được miêu tả trong biểu đồ pha là hữu ích. Hình 2.8 thể hiện một biểu đồ pha chung.</Text>
// <Text style={styles.content}>&emsp;Trong biểu đồ pha, các vùng đại diện cho các pha khác nhau của chất, và các đường chỉ ra điều kiện nơi các chuyển pha xảy ra. Ví dụ, đường phân chia giữa vùng chất rắn và chất lỏng là điểm nóng chảy, và đường phân chia giữa vùng chất lỏng và khí là điểm sôi. Điểm mà ba pha gặp nhau được gọi là điểm tam giác.</Text>
// <Text style={styles.content}>&emsp;Hãy đi sâu vào việc hiểu về các thay đổi pha và đường cong nhiệt. điểm của chất lỏng, quan trọng là không bỏ qua áp suất khi xem xét sự thay đổi trong pha. Một biểu đồ pha tổng quát được hiển thị trong Hình 2.8.</Text>
// <Text style={styles.content}>&emsp;Điểm mà ba pha rắn, lỏng và khí có thể tồn tại cùng một lúc, với một nhiệt độ và áp suất cụ thể, được gọi là điểm tam giác. Đối với H2O, điểm tam giác tồn tại khi áp suất là 4.57 atm và nhiệt độ là 0.01°C.</Text>
// <Image
//                 source={require('../anhlythuyet/2.8.png')}
//                 style={styles.image1}
//               />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollView: {
//     // Remove flexDirection: 'row'
//   },
//   content: {
//     color: 'black',
//     fontWeight: '400',
//     fontSize: 18,
//     marginLeft: 20,
//     textAlign: 'justify',
//     marginHorizontal: 20,
//   },
//   title: {
//     fontSize: 23,
//     fontWeight: 'bold',
//     color: 'black',
//     maxWidth: 313, // Giới hạn chiều cao của tiêu đề
//     overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
//     marginLeft: 20,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   mtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     maxWidth: 313, // Giới hạn chiều cao của tiêu đề
//     overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
//     marginLeft: 20,
//   },
//   mtitle1: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     maxWidth: 313, // Giới hạn chiều cao của tiêu đề
//     overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
//     marginLeft: 20,
//     marginTop: 10,
//   },
//   image1: {
//     width: 300,
//     height: 300,
//     marginLeft: 160,
//     resizeMode: 'contain',
//   },
// });
// export default Dongvi
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
import { User, MainComponent, Notification } from 'iconsax-react-native';

const Dongvi = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Lực lưỡng cực và tính phân cực của phân tử</Text>
        <Text style={styles.content}>
          &emsp;Bởi vì các liên kết có thể có cực và các phân tử có thể có những hình dạng nhất định, nên các electron có thể “xây dựng” trên một mặt của phân tử và làm cho một đầu mang điện tích âm nhẹ. Khi một phân tử có kiểu “tích tụ” điện tích âm ở một bên và điện tích dương ở một bên khác, thì phân tử đó được gọi là lưỡng cực. Đây là trường hợp của HCl như trong Hình 5.20.
        </Text>
        <Image
          source={require('../anhlythuyet/5.20.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Trong phân tử HCl, không chỉ các liên kết cộng hóa trị có cực mà còn do các electron dành nhiều thời gian với clo hơn so với hydrogen nên đầu clo của phân tử mang điện tích âm. HCl là một phân tử lưỡng cực hoặc phân cực vì sự khác biệt về độ âm điện đã tạo ra “hai cực”. Nhắc đến mũi tên lưỡng cực, không có sự cân bằng điện tích trong phân tử này và nó được phân loại là có cực.
        </Text>
        <Text style={styles.content}>
          &emsp;Tình trạng tương tự cũng xảy ra với nước. Trong phân tử nước, liên kết là cộng hóa trị có cực do sự chênh lệch lớn về độ âm điện giữa hydrogen và oxygen. Do hình dạng phân tử bị uốn cong của phân tử nước nên các mũi tên lưỡng cực không thể đối trọng. Có một mômen lưỡng cực tổng thể trong phân tử như trong Hình 5.21.
        </Text>
        <Image
          source={require('../anhlythuyet/5.21.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Xem xét lại hình dạng và các liên kết phân cực được tìm thấy trong amoniac cho thấy tình trạng tương tự như nước. Bởi vì không có sự đối xứng trong phân tử amoniac nên không có sự cân bằng lực và có một mômen lưỡng cực tổng thể trong phân tử ammonia như trong Hình 5.22.
</Text>
<Image
          source={require('../anhlythuyet/5.22.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Carbon dioxide và carbon tetrachloride kể một câu chuyện khác về liên kết cực và mômen lưỡng cực tổng thể. Cả carbon dioxide và carbon tetrachloride đều có liên kết phân cực, như được biểu diễn bằng các mũi tên lưỡng cực trong Hình 5.23.
</Text>
<Image
          source={require('../anhlythuyet/5.23.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Trong hai trường hợp này, các mũi tên lưỡng cực triệt tiêu lẫn nhau do hình dạng của các phân tử. Hình dạng tuyến tính của phân tử carbon dioxide đặt các mũi tên lưỡng cực theo hướng ngược nhau để đối trọng với nhau. Điều tương tự cũng đúng đối với dạng hình học phân tử tứ diện được tìm thấy trong carbon tetraclorua. Mặc dù có liên kết cực nhưng hai phân tử này không phân cực. Không có mômen lưỡng cực tổng thể trong các phân tử này vì các mũi tên lưỡng cực có cùng độ lớn nhưng nằm ngược chiều nhau trong phân tử. Sự đối trọng này làm cho phân tử không phân cực.
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
  scrollView: {},
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
    maxWidth: 313,
    overflow: 'hidden',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 20,
    marginLeft: 10,
  },
  image2: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 15,
  },
  image3: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 100,
  },
});

export default Dongvi;

