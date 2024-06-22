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
        <Text style={styles.title}>Điện tử hóa trị và sơ đồ chấm</Text>
        <Text style={styles.content}>Các electron hóa trị đóng một vai trò rất lớn trong liên kết, như sẽ được trình bày sau. Các electron hóa trị là các electron ở mức năng lượng chính ngoài cùng (không nên nhầm lẫn với lớp ngoài cùng). Những electron này rất quan trọng vì chúng là những electron bị mất, thu được hoặc chia sẻ khi hình thành liên kết hóa học. Các electron hóa trị của một nguyên tử là các electron tương tác với các electron hóa trị của một nguyên tử khác để tạo thành các liên kết này.
          &emsp;
          </Text>
          <Text style={styles.title}>Vấn đề</Text>
        
        <Text style={styles.content}>
          &emsp;Có bao nhiêu electron hóa trị trong các nguyên tố Na, P, Cl và Ca?
</Text>
<Text style={styles.title}>Giải pháp</Text>
<Text style={styles.content}>
          &emsp;Trước hết hãy xét cấu hình electron.</Text>
          <Text style={styles.content}>
          &emsp;Na = 1s²2s²2p⁶3s¹. Na có một electron hóa trị. </Text>
          <Text style={styles.content}>
          &emsp;P = 1s²2s²2p⁶3s²3p³. P có năm electron hóa trị.</Text>
          <Text style={styles.content}>
          &emsp;Cl =1s²2s²2p⁶3s²3p⁵. Cl có bảy electron hóa trị. </Text>
          <Text style={styles.content}>
          &emsp;Ca = 1s²2s²2p⁶3s²3p⁶4s². Ca có hai electron hóa trị. </Text>
          <Text style={styles.content}>
          &emsp;Khi lập sơ đồ hình dạng và cấu trúc của các nguyên tử, điều quan trọng là phải có sơ đồ chấm hóa trị chính xác. Những sơ đồ này rất dễ vẽ vì chúng tuân theo một mẫu đơn giản. Có hai quy tắc bạn cần nhớ khi vẽ sơ đồ dấu chấm hóa trị (xem Hình 3.6):
 </Text>
        <Image
          source={require('../anhlythuyet/3.6.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;• Hai electron đầu tiên đi cùng nhau ở cùng một phía của ký hiệu, như thể chúng đang lấp đầy quỹ đạo s.

        </Text>
        <Text style={styles.content}>
          &emsp;• Sáu electron tiếp theo lấp đầy đơn lẻ rồi ghép đôi theo quy tắc Hund, như thể chúng lấp đầy quỹ đạo p. Một cách hay để ghi nhớ quy tắc này là tự nhủ: “Đơn, đơn, đơn, sau đó ghép đôi, ghép đôi, ghép đôi.
          
        </Text>
        <Text style={styles.title}>Vấn đề</Text>
        
        <Text style={styles.content}>
          &emsp;Vẽ sơ đồ chấm hóa trị của N, Ne, O và Ca.
          
          </Text>

        <Text style={styles.title}>Giải pháp</Text>
        
        <Text style={styles.content}>
          &emsp;Xác định cấu hình electron và tìm electron hóa trị:
          
        </Text>
        <Text style={styles.content}>
          &emsp;N—1s²2s²2p³
          
        </Text>
        <Text style={styles.content}>
          &emsp;Ne—1s²2s²2p⁶
          
        </Text>
       
        <Text style={styles.content}>
          &emsp;O—1s²2s²2p⁴
          
        </Text>
        <Text style={styles.content}>
          &emsp;Ca—1s²2s²2p⁶3s²3p⁶4s² 
          
        </Text>
        <Text style={styles.content}>
          &emsp;Sau đó vẽ sơ đồ như hình 3.7.
          
        </Text>
        
        
        <Image
          source={require('../anhlythuyet/3.7.png')}
          style={styles.image2}
          resizeMode="contain"
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

