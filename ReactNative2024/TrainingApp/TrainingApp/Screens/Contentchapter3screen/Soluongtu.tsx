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

const Dientuhoatrivasodocham = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Số lượng tử </Text>
          <Text style={styles.content}>• Số đầu tiên được gọi là số lượng tử chính, n, và nó có thể là số nguyên bất kỳ. Số lượng tử đầu tiên, n, biểu thị mức năng lượng chính mà electron đang xét. Ví dụ, một electron trong H là  1s² và n sẽ bằng 1. Electron hóa trị của Li, 1s²2s¹, sẽ có n bằng 2.
          &emsp;
          </Text>
          <Text style={styles.content}>• Số thứ hai được gọi là số lượng tử động lượng góc, l, và nó có thể là số nguyên từ 0 đến n – 1. Số lượng tử thứ hai biểu thị cấp con mà electron ở trong đó. Nếu electron ở quỹ đạo s, thì l = 0. Một electron trong quỹ đạo p sẽ có l = 1
          &emsp;
          </Text>
          <Text style={styles.content}>• Số thứ ba được gọi là số lượng tử từ, mₗ, và nó có thể là số nguyên nằm trong khoảng từ –l đến + l. Số lượng tử thứ ba giúp chúng ta xác định vị trí của electron được đề cập ở vùng nào của mỗi cấp độ con. 
          &emsp;
          </Text>
          <Text style={styles.content}>Những vùng này là quỹ đạo cụ thể.
          &emsp;
          </Text>
          <Text style={styles.content}>• Số lượng tử thứ tư là mₛ và nó chỉ có thể có giá trị +1/2 hoặc –1/2..
          &emsp;
          </Text>
          <Text style={styles.content}> Số lượng tử thứ tư biểu thị hướng quay của electron. Các dấu ngược nhau biểu thị các spin ngược nhau.
          &emsp;
          </Text>
          <Text style={styles.content}> Việc gán số lượng tử cho các electron của một vài nguyên tử đơn giản sẽ giúp chúng ta biết cách gán các số này.
          &emsp;
          </Text>
          <Text style={styles.title}>Vấn đề:  </Text>
          <Text style={styles.content}> Một nguyên tử hydro có một electron và được ký hiệu là 1s1. Số lượng tử sẽ là bao nhiêu?
          &emsp;
          </Text>
          <Text style={styles.title}>Giải pháp:  </Text>
          <Text style={styles.content}>Trong trường hợp này n sẽ bằng 1 vì electron ở mức năng lượng chính là 1.
l phải bằng 0 vì l là số từ 0 đến n – 1.

          &emsp;
          </Text>
          <Text style={styles.content}>mₗ bằng 0 vì giá trị của l là 0.
          &emsp;
          </Text>
          <Text style={styles.content}>mₛ bằng +1/2.
          &emsp;
          </Text>
          <Text style={styles.content}>Các số lượng tử là 1, 0, 0, +1/2.
          &emsp;
          </Text>
          <Text style={styles.title}>Vấn đề:  </Text>
          <Text style={styles.content}>Gán số lượng tử cho electron hóa trị của nguyên tử lithium.
          &emsp;
          </Text>
          <Text style={styles.title}>Giải pháp:  </Text>
          <Text style={styles.content}>Electron hóa trị duy nhất của lithium có cấu hình electron là [He]2s¹. Từ đó chúng ta có thể thấy rằng:
          &emsp;
          </Text>
          <Text style={styles.content}>n = 2 vì electron hóa trị ở mức năng lượng chính thứ hai.
          &emsp;
          </Text>
          <Text style={styles.content}>l có thể là 0 hoặc 1 (2 – 1 = 1). Chúng tôi gán số 0 đầu tiên là l = 1 vì nó sẽ không được sử dụng cho đến khi chúng ta bắt đầu điền vào quỹ đạo p.
          &emsp;
          </Text>
          <Text style={styles.content}>l có thể là 0 hoặc 1 (2 – 1 = 1). Chúng tôi gán số 0 đầu tiên là l = 1 vì nó sẽ không được sử dụng cho đến khi chúng ta bắt đầu điền vào quỹ đạo p.
          &emsp;
          </Text>
          <Text style={styles.content}>mₗ bằng 0 vì giá trị của l là 0.
          &emsp;
          </Text>
          <Text style={styles.content}>mₛ bằng +1/2.
          &emsp;
          </Text>
          <Text style={styles.content}>Các số lượng tử là 2, 0, 0, +1/2.
          &emsp;
          </Text>
          <Text style={styles.title}>Vấn đề:  </Text>
          <Text style={styles.content}>Gán số lượng tử cho electron thứ mười lấp đầy nguyên tử neon.
          &emsp;
          </Text>
          <Text style={styles.title}>Giải pháp:  </Text>
          <Text style={styles.content}>n = 2, l = 1, mₗ = 1 và mₛ = –1/2.
          &emsp;
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
  content2: {
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
    width: '98%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 5,
  },
  image3: {
    width: '20%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 150,
  },
});

export default Dientuhoatrivasodocham;

