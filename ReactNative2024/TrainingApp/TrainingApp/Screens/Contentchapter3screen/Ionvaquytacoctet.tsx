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
        <Text style={styles.title}>Ion và Quy tắc Octet</Text>
        <Text style={styles.content}>
          &emsp;Số lượng electron trong một nguyên tử có thể được tìm thấy bằng cách nhìn vào số hiệu nguyên tử, với điều kiện nguyên tử đó là trung tính. Trong một nguyên tử trung hòa, số proton bằng số electron. Sự cân bằng giữa điện tích dương và âm là nguyên nhân làm cho nguyên tử trung hòa. Nhưng điều gì xảy ra nếu một nguyên tử nhận thêm hoặc mất bớt electron? Khi nguyên tử mất đi hoặc nhận thêm electron thì nó trở thành ion. Nguyên tử lúc này có số proton và số electron không bằng nhau (số proton không thay đổi). Khi một nguyên tử mất electron, nó sẽ mất điện tích âm. Trong trường hợp này, số proton nhiều hơn số electron và ion mang điện tích dương. Một ion mang điện tích dương được gọi là cation. Khi một nguyên tử nhận thêm electron, nó sẽ mang điện tích âm. Trong trường hợp này, số electron nhiều hơn số proton và ion mang điện tích âm. Một ion có điện tích âm được gọi là anion.
        </Text>
        <Text style={styles.content}>
          &emsp;Một nguyên tử sẽ tăng hay giảm bao nhiêu electron? Một ion sẽ phải chịu bao nhiêu điện tích? Có một mô hình đơn giản để làm theo nhưng cuối cùng bạn sẽ thấy rằng tất cả phụ thuộc vào số lượng electron hóa trị mà một nguyên tử có. Có một điểm chung mà tất cả các ion đều có: Chúng hình thành sao cho có 8 electron hóa trị ở mức năng lượng chính ngoài cùng. Đây được gọi là quy tắc Octet. Có tám electron trong vỏ hóa trị giúp nguyên tử có cấu hình electron ổn định. Khi đã đạt được tám electron hóa trị, rất khó để sửa đổi cấu hình ổn định này.
        </Text>
        <Text style={styles.content}>
          &emsp;Để xác định điện tích mà một nguyên tử sẽ đảm nhận dưới dạng ion, trước tiên hãy xem cấu hình electron của nguyên tử. Ví dụ, natri có 11 electron và cấu hình electron là 1s²2s²2p⁶3s¹ . Để đạt được một octet, sodium có hai lựa chọn – nhận thêm bảy electron hoặc chỉ mất một electron. Mất một electron là nhiệm vụ dễ dàng hơn nhiều so với việc thu được bảy electron. Khi nguyên tử sodium mất đi một electron (mất điện tích âm), ion sodium có điện tích 1+ và nguyên tử được viết là Na¹⁺. Sau khi mất đi một electron, cấu hình electron mới của sodium là 1s²2s²2p⁶. Tám electron hóa trị được in đậm để nhấn mạnh quy tắc Octet. 
        </Text>
        <Text style={styles.content}>
          &emsp;Một ví dụ khác là ion tạo thành lưu huỳnh. Lưu huỳnh có cấu hình electron là 1s²2s²2p⁶3s²3p⁴. Lưu huỳnh có sáu electron hóa trị như được in đậm. Để lưu huỳnh đạt được octet ổn định, nó có thể mất sáu electron hoặc thu thêm hai electron. Việc thu được hai electron là một nhiệm vụ khả thi hơn và việc thu được hai electron sẽ mang lại cho ion lưu huỳnh điện tích 2−. Cấu hình electron mới của lưu huỳnh là 1s²2s²2p⁶3s²3p⁶. Một lần nữa, tám electron hóa trị đã được nhấn mạnh. 
        </Text>
        <Text style={styles.title}>Vấn đề</Text>
        <Text style={styles.content}>
          &emsp;Điện tích của các nguyên tố sau khi tạo thành ion: Ca, Al, F, N, Ne sẽ như thế nào?
        </Text>
        <Text style={styles.title}>Giải pháp</Text>
        <Text style={styles.content}>
          &emsp;Bắt đầu với cấu hình electron của mỗi nguyên tử: 
        </Text>
        <Text style={styles.content}>
          &emsp;Ca—1s²2s²2p⁶3s²3p⁶4s²
        </Text>
        <Text style={styles.content}>
          &emsp;Al—1s²2s²2p⁶3s²3p¹ 
        </Text>
        <Text style={styles.content}>
          &emsp;F—1s²2s²2p⁵  
        </Text>
        <Text style={styles.content}>
          &emsp;N—1s²2s²2p³
        </Text>
        <Text style={styles.content}>
          &emsp;Ne—1s²2s²2p⁶
        </Text>
        <Text style={styles.content}>
          &emsp;Bây giờ hãy xem cấu hình và quyết định đâu là cách dễ nhất để có được octet ổn định. Calcium sẽ mất hai electron và trở thành Ca²⁺. Aluminium sẽ mất ba electron và trở thành Al³⁺. Fluorine sẽ nhận thêm một electron và trở thành F¹⁻. Nitrogen sẽ nhận thêm ba electron và trở thành N³⁻. Neon sẽ không mất hoặc thu thêm bất kỳ electron nào vì octet ổn định của nó.
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
    width: '98%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 5,
  },
  image3: {
    width: '30%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 130,
  },
});

export default Dongvi;

