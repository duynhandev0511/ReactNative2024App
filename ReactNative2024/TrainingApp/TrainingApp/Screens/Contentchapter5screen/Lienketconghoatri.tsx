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
        <Text style={styles.title}>Liên kết cộng hóa trị </Text>
        <Text style={styles.content}>
          &emsp;Liên kết cộng hóa trị được hình thành khi hai nguyên tử phi kim chia sẻ các electron để thỏa mãn nhu cầu có mức năng lượng chính đầy đủ ngoài cùng của chúng. Liên kết cộng hóa trị không mạnh bằng liên kết hình thành giữa các ion. Ví dụ, cần ngọn lửa cao và nhiệt độ gần 800ᵒC để phá vỡ liên kết giữa sodium và chlorine trong sodium chloride. Các liên kết cộng hóa trị được tìm thấy trong khí methane có thể bị phá vỡ ngay lập tức khi đưa que diêm vào.
        </Text>
        <Text style={styles.content}>
          &emsp;Chỉ nói đơn giản rằng một hợp chất có liên kết cộng hóa trị là chưa đủ vì có nhiều loại liên kết cộng hóa trị khác nhau. Một loại liên kết cộng hóa trị được gọi là liên kết cộng hóa trị không phân cực. Trong trường hợp này, sự chia sẻ electron giữa các nguyên tử là bằng nhau. Điều này xảy ra vì độ âm điện của các nguyên tử liên quan là (gần như) giống nhau. Ví dụ, khí hydro có sự chia sẻ electron bằng nhau giữa hai nguyên tử của nó:
          </Text>
          <Image
          source={require('../anhlythuyet/LienketconghoatriH1.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Sơ đồ này cho thấy các electron hóa trị tương tác như thế nào được gọi là sơ đồ Lewis kết cấu. Trong trường hợp này, cả hai nguyên tử hydro đều thỏa mãn nhu cầu có mức năng lượng chính đầy đủ ngoài cùng. Vì cả hai nguyên tử hydro đều có độ âm điện như nhau nên các nguyên tử sẽ chia sẻ số electron như nhau. Điều này sẽ xảy ra với bất kỳ phân tử hai nguyên tử nào, chẳng hạn như khí clo (xem Hình 5.6).
        </Text>
        <Image
          source={require('../anhlythuyet/5.6.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Hãy chú ý mỗi nguyên tử clo trong Hình 5.6 có 8 electron xung quanh nó. Ngoài ra, hãy chú ý đến cặp electron dùng chung giữa hai nguyên tử.
</Text>
<Image
          source={require('../anhlythuyet/LienketconghoatriH2.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Vì các nguyên tử hydro và clo có chung một cặp electron nên hai “dấu chấm” có thể được thay thế bằng “dấu gạch ngang” để biểu thị rằng một liên kết đã được tạo ra. Biểu đồ chấm hóa trị có thể được viết lại thành: H—H và Cl—Cl. Liên kết được biểu thị bằng “dấu gạch ngang” được gọi là liên kết đơn vì có một cặp electron dùng chung giữa hai nguyên tử.
</Text>
<Text style={styles.content}>
          &emsp;Cấu trúc của nitrogen diatomic lại kể một câu chuyện khác. Khi bạn đặt hai nguyên tử nitơ cạnh nhau, bạn sẽ thấy rằng mỗi nguyên tử có ba electron độc thân muốn ghép đôi như trong Hình 5.7.
</Text>
<Image
          source={require('../anhlythuyet/5.7.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Hai nguyên tử nitơ chia sẻ sáu electron hoặc ba cặp electron. Điều này có nghĩa là có ba liên kết giữa hai nguyên tử nitơ, N ≡ N. Đây được gọi là liên kết ba.
</Text>
<Text style={styles.content}>
          &emsp;Trường hợp còn lại cần được xem xét là trường hợp liên quan đến liên kết đôi. Carbon dioxide có hai liên kết đôi hình thành như trong Hình 5.8.
</Text>
<Image
          source={require('../anhlythuyet/5.8.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Các liên kết được tìm thấy giữa carbon và oxy đặt ra một vấn đề mới liên quan đến liên kết. Vì độ âm điện của carbon và oxygen khác nhau (chúng khác nhau từ 0,5 đến 1,7) nên liên kết được gọi là liên kết cộng hóa trị có cực. Liên kết cộng hóa trị có cực được đặc trưng bởi các nguyên tử có sự chia sẻ electron không đồng đều. Bởi vì các electron tích điện âm dành nhiều thời gian hơn cho các electron có độ âm điện lớn hơn nguyên tố, có độ âm điện lớn hơn sẽ mang điện tích âm nên gọi là độ âm điện. Hydro clorua có liên kết cộng hóa trị có cực giữa nguyên tử hydro và clo. Sự tích tụ điện tích âm trên clo có độ âm điện lớn hơn có thể được biểu diễn bằng cách sử dụng mũi tên lưỡng cực như trên Hình 5.9
</Text>
<Image
          source={require('../anhlythuyet/5.9.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Bởi vì nguyên tử hydrogen nhìn thấy các electron của nó bị thu hút bởi nguyên tử chlorine, nên nguyên tử hydrogen mang điện tích dương vì một điện tích âm của nó dành nhiều thời gian hơn cho chlorine.
</Text>
<Text style={styles.title}>Vấn đề</Text>
<Text style={styles.content}>
          &emsp;Vẽ công thức Lewis của formaldehyde, CH₂O. Những liên kết nào sẽ là cộng hóa trị có cực? cộng hóa trị không phân cực?
</Text>
<Text style={styles.title}>Giải pháp</Text>
<Text style={styles.content}>
          &emsp;Bởi vì carbon có số lượng electron hóa trị đơn lớn nhất nên nó sẽ là nguyên tử được đặt ở giữa phân tử. Hai nguyên tử hydro sẽ tạo liên kết đơn với nguyên tử carbon như trong Hình 5.10.
</Text>
<Image
          source={require('../anhlythuyet/5.10.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Hai electron chưa ghép cặp còn lại trên nguyên tử carbon sẽ liên kết với hai electron chưa ghép cặp xung quanh nguyên tử oxy như trên Hình 5.11.
</Text>
<Image
          source={require('../anhlythuyet/5.11.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Cấu trúc cuối cùng được thể hiện trong hình 5.12. Bởi vì có rất ít sự khác biệt giữa độ âm điện giữa hydrogen và carbon nên liên kết giữa hai chất này là cộng hóa trị không phân cực. Bởi vì sự chênh lệch độ âm điện giữa oxygen và carbon lớn hơn nên liên kết giữa hai nguyên tử sẽ là cộng hóa trị có cực. Nói chung, một liên kết là cộng hóa trị không phân cực nếu hiệu độ âm điện giữa các nguyên tử là từ 0 đến 0,4. Nếu chênh lệch từ 0,5 đến 1,7 thì liên kết là liên kết cộng hóa trị có cực
</Text>
<Image
          source={require('../anhlythuyet/5.12.png')}
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

