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
        <Text style={styles.title}>Liên kết ion</Text>
        <Text style={styles.content}>
          &emsp;Liên kết ion là liên kết rất bền được hình thành giữa cation và anion. Liên kết ion được hình thành khi một kim loại mất hoặc chuyển một electron (hoặc các electron) sang phi kim để kim loại và phi kim tạo thành các ion có mức năng lượng chính ngoài cùng đầy đủ. Do đó, các cation và anion được hình thành sẽ hút các điện tích trái dấu của nhau. Lực hút giữa các hạt tích điện trái dấu gọi là lực tĩnh điện.
        </Text>
        <Text style={styles.content}>
          &emsp;Phản ứng giữa Na và Cl để tạo thành NaCl cho một bức tranh rõ ràng về cách thức hoạt động của quá trình này. Sodium có cấu hình electron là 1s²2s²2p⁶3s¹ , trong khi chlorine có cấu hình 1s²2s²2p⁶3s²3p⁵ . Sodium có một electron hóa trị cần được loại bỏ để đạt được octet; chlorine có bảy electron hóa trị và chỉ cần thêm một electron nữa để hoàn thành mức năng lượng chính ngoài cùng của nó. Một electron hóa trị trong sodium được chuyển sang chlorine như trong Hình 5.1.
        </Text>
        <Image
          source={require('../anhlythuyet/5.1.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Các ion sodium và chlorine bị hút bởi các điện tích trái dấu tạo thành một mạng lưới trong đó mỗi ion natri được bao quanh bởi sáu ion chlorine và sáu ion chlorine được bao quanh bởi sáu ion sodium. Mạng tinh thể chứng tỏ tại sao các hợp chất ion không tạo thành phân tử. Thay vào đó, có một mô hình liên tục các ion chlorine và sodium liên kết với nhau như trong Hình 5.2
        </Text>
        <Image
          source={require('../anhlythuyet/5.2.png')}
          style={styles.image2}
          resizeMode="contain"
        />
         <Text style={styles.content}>
          &emsp;Sodium oxide minh họa một tình huống hơi khác. Ở đây sodium có một electron hóa trị và oxygen có sáu electron hóa trị. Trong trường hợp này, sẽ cần hai nguyên tử natri để nhường một electron hóa trị của mỗi nguyên tử cho oxygen. Điều này hoàn thành các octet cho cả ba nguyên tử như trong Hình 5.3.
        </Text>
        <Image
          source={require('../anhlythuyet/5.3.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Dựa vào sơ đồ Hình 5.3, bạn có thể thấy công thức của là sodium oxide is Na2O. Không cần phải lo lắng về việc dự đoán công thức hóa học tại thời điểm này. Bây giờ bạn chỉ cần biết hai electron hóa trị đến từ đâu để cung cấp cho oxygen một octet đầy đủ.
        </Text>
        <Text style={styles.title}>Vấn đề</Text>
        <Text style={styles.content}>
          &emsp;Sơ đồ phản ứng xảy ra giữa calcium và oxygen để tạo thành calcium oxide.
        </Text>
        <Text style={styles.title}>Giải pháp</Text>
        <Text style={styles.content}>
          &emsp;: Nhận biết calcium là kim loại và oxygen là phi kim báo hiệu phản ứng sẽ chuyển electron và hợp chất tạo thành sẽ là ion. Vì calcium là kim loại nên nó sẽ nhường electron cho phi kim là oxygen. Calcium có hai electron hóa trị và oxygen có sáu. Calcium sẽ mất cả hai electron vào tay oxygen như trong Hình 5.4.
        </Text>
        <Image
          source={require('../anhlythuyet/5.4.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;: Cấu hình electron của cả hai nguyên tử cũng giúp làm rõ phản ứng xảy ra (xem Hình 5.5).
        </Text>
        <Image
          source={require('../anhlythuyet/5.5.png')}
          style={styles.image2}
          resizeMode="contain"
        />
         <Text style={styles.content}>
          &emsp;: Vì chỉ cần một nguyên tử calcium và một nguyên tử oxygen để đáp ứng các octet cho cả hai nguyên tử nên công thức hóa học của calcium oxide là CaO.
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

