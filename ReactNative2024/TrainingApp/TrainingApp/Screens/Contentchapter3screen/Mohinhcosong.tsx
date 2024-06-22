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
        <Text style={styles.title}>Mô hình cơ sóng</Text>
        <Text style={styles.content}>Mô hình cơ sóng của nguyên tử cho thấy cấu trúc nguyên tử phức tạp hơn và cách các electron tự cấu hình ở các mức năng lượng chính. Các mức năng lượng chính được chia thành các mức năng lượng phụ, mỗi mức có tập hợp quỹ đạo riêng biệt. Cấu trúc phức tạp hơn này được phác thảo với sự trợ giúp của sơ đồ này. Các mức năng lượng chính trong nguyên tử được đánh số từ 1 đến 7.
          &emsp;
          </Text>
        <Image
          source={require('../anhlythuyet/HinhanhphanMohinhcosong.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Mức năng lượng chính thứ nhất chỉ có một lớp con, mức năng lượng chính thứ hai có hai, mức năng lượng chính thứ ba có ba, v.v. Bây giờ, đường viền có thể được nâng cao:
</Text>
        <Image
          source={require('../anhlythuyet/Hinhanh2phanMohinhcosong.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Lớp con đầu tiên trong mỗi mức năng lượng chính có chữ cái “s”. Cấp độ con thứ hai có chữ cái “p”, chữ cái thứ ba là “d” và chữ cái thứ tư là “f”. Bây giờ mô hình thậm chí còn được dán nhãn nhiều hơn:

        </Text>
        <Image
          source={require('../anhlythuyet/Hinhanh3phanMohinhcosong.png')}
          style={styles.image2}
          resizeMode="contain"
        />
         <Text style={styles.content}>
          &emsp;Lớp con s chứa một quỹ đạo hoặc vùng nơi có thể tìm thấy electron. Cấp độ p có ba quỹ đạo, trong khi cấp độ d và f lần lượt có năm và bảy quỹ đạo. Hình dạng của quỹ đạo s và p được thể hiện trên hình 3.5.

        </Text>
        <Image
          source={require('../anhlythuyet/3.5.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Mỗi quỹ đạo được phép mang tối đa hai electron và theo Nguyên lý loại trừ Pauli, các electron phải có spin ngược nhau.
Làm thế nào để các electron lấp đầy các mức năng lượng chính này? Hãy xem xét ví dụ đơn giản nhất, hydro và một electron của nó. Vì các electron muốn ở trạng thái năng lượng thấp nhất có thể nên một electron sẽ nằm ở quỹ đạo 1s. Điều này có thể được lập biểu đồ bằng cách viết đơn giản 1s¹ hoặc bằng cách vẽ sơ đồ như sau  



        </Text>
        <Image
          source={require('../anhlythuyet/obitan.png')}
          style={styles.image3}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Vì quỹ đạo 1s có thể chứa tối đa hai electron nên cấu hình electron của helium sẽ như thế này: 1s² hoặc   



        </Text>
        <Image
          source={require('../anhlythuyet/obitan2.png')}
          style={styles.image3}
          resizeMode="contain"
          ></Image>
         <Text style={styles.content}>
          &emsp;Chú ý rằng các mũi tên chỉ theo những hướng khác nhau	   
        </Text>
        <Text style={styles.content}>
          &emsp;Điều này cho thấy các spin ngược nhau của các electron. Ví dụ tiếp theo sẽ cho thấy quy tắc Hund hoạt động như thế nào. Xét cấu hình electron của nitơ ở trạng thái cơ bản. Nitơ có tổng cộng bảy electron. Hai electron đầu tiên sẽ lấp đầy quỹ đạo 1s. Nhìn vào sơ đồ trên, sau khi quỹ đạo 1s đầy, quỹ đạo 2s sẽ nhận electron. Ba electron còn lại sẽ đi vào quỹ đạo 2p. Cấu hình electron trông như thế này: 1s²2s²2p³. Điều đáng quan tâm ở đây là làm thế nào các electron tự định hướng theo quỹ đạo 2p. Có hai khả năng:	   
        </Text>
        <Image
          source={require('../anhlythuyet/obitan3.png')}
          style={styles.image2}
          resizeMode="contain"
          ></Image>
          <Text style={styles.content}>
          &emsp;Theo quy tắc Hund, các electron lấp đầy quỹ đạo của chúng một cách đơn lẻ và sau đó chúng bắt đầu ghép đôi. Điều này có nghĩa là tình huống thứ hai được trình bày ở trên là thứ tự điền đúng cho các electron.	   
        </Text>
          <Text style={styles.title}>Vấn đề</Text>
          <Text style={styles.content}>
          &emsp;Viết cấu hình electron của S và Ca.	   
        </Text>
        <Text style={styles.title}>Giải pháp: </Text>
          <Text style={styles.content}>
          &emsp;: Lưu huỳnh có 16 electron. Cấu hình là 1s²2s²2p⁶3s²3p⁴ hoặc 	   
        </Text>
        <Image
          source={require('../anhlythuyet/obitan4.png')}
          style={styles.image2}
          resizeMode="contain"
          ></Image>
          
          <Text style={styles.content}>
          &emsp;: Ca có 20 electron và có cấu hình như thế này 1s²2s²2p⁶3s²3p⁶4s² hoặc	   
        </Text>
        <Image
          source={require('../anhlythuyet/obitan5.png')}
          style={styles.image2}
          resizeMode="contain"
          ></Image>
          <Text style={styles.content}>
          &emsp;: Lưu ý rằng trong bài toán trước quỹ đạo 3d đã bị bỏ qua. Quỹ đạo 3d đầy lên sau khi quỹ đạo 4s đầy lên. Điều này là do quỹ đạo 4s thực sự có ít năng lượng hơn quỹ đạo 3d (không bình thường nhưng đúng). Điều này có nghĩa là thứ tự điền thông qua phần tử số 36, Kr, là 1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁶ . Cũng lưu ý số lượng electron tối đa có thể được giữ ở mức năng lượng chính. Mức năng lượng chính thứ nhất có thể chứa tối đa 2 electron (1s²) lần thứ hai lên tới 8 (2s²2p⁶) và thứ ba lên đến 18 (3s²3p⁶3d¹⁰) ). Mẫu này tuân theo phương trình 2n², trong đó n là số của mức năng lượng chính. Ví dụ, để tìm số electron tối đa có thể được giữ ở mức năng lượng chính thứ tư, bạn có thể nói rằng 2⁽4⁾² = 32 electron tối đa.	   
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

export default Dongvi;

