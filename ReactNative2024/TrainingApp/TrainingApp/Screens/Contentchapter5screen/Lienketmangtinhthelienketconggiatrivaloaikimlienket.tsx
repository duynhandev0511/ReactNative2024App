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
        <Text style={styles.title}>Liên kết trong mạng tinh thể, liên kết cộng giá trị và loại kim liên kết</Text>
        <Text style={styles.content}>
          &emsp;Có một loại liên kết cộng hóa trị quan trọng khác ngoài liên kết cộng hóa trị không phân cực và có cực vừa được thảo luận. Một ví dụ được thể hiện trong Hình 5.17.
        </Text>
        <Image
          source={require('../anhlythuyet/5.17.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Trong ví dụ này, cặp electron tự do nằm trên nguyên tử nitơ nhường hai electron cho liên kết được hình thành với ion hydro. Thông thường khi liên kết cộng hóa trị được hình thành, mỗi nguyên tử liên kết sẽ có một electron. Trong trường hợp này, ion hydro không nhường bất kỳ electron nào cho liên kết này. Khi một nguyên tử nhường cả hai electron trong liên kết cộng hóa trị, liên kết được gọi là liên kết cộng hóa trị tọa độ.
        </Text>
        <Text style={styles.content}>
          &emsp;Nước cung cấp một ví dụ khác về liên kết cộng hóa trị tọa độ như trong Hình 5.18.
        </Text>
        <Image
          source={require('../anhlythuyet/5.18.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Trong mọi ví dụ cho đến nay, các liên kết cộng hóa trị đã giữ các nguyên tử lại với nhau để tạo ra các phân tử. Tuy nhiên, tồn tại những chất như kim cương và than chì trong đó các nguyên tử carbon liên kết cộng hóa trị nhưng không liên kết để tạo thành phân tử. Những trường hợp như vậy được gọi là chất rắn mạng; các nguyên tử liên kết với nhau thành một mạng lưới liên tục. Mạng lưới lớn mang lại cho các chất rắn này độ nóng chảy rất cao điểm. Cũng lưu ý rằng vì cả kim cương và than chì đều được tạo thành từ cùng một nguyên tố và là những chất khác nhau nên chúng được dán nhãn là dạng thù hình của nhau.
</Text>
<Image
          source={require('../anhlythuyet/Bang1chapter5.png')}
          style={styles.image2}
          resizeMode="contain"
        />
         <Text style={styles.content}>
          &emsp;Cuối cùng, có liên kết kim loại xảy ra giữa các kim loại. Các nguyên tử kim loại giữ các electron của chúng rất lỏng lẻo, đó là lý do tại sao kim loại dẫn điện rất tốt. Các electron liên kết lỏng lẻo thường được gọi là “biển electron”. Các vòng tròn tối hơn trong Hình 5.19 tượng trưng cho các đám mây điện tử của nguyên tử kim loại. 
.

</Text>
<Image
          source={require('../anhlythuyet/5.19.png')}
          style={styles.image2}
          resizeMode="contain"
        />
<Text style={styles.title}>Vấn đề</Text>
<Text style={styles.content}>
          &emsp;Kể tên loại liên kết giữa các nguyên tử trong KCl, H₃O⁺, CCl₄, SiO₂, Fe(s), F₂, và HBr.
</Text>
<Text style={styles.title}>Giải pháp</Text>
<Text style={styles.content}>
          &emsp;KCl có ion kim loại và ion phi kim hút nhau nên sẽ là ion. H₃O⁺ có liên kết cộng hóa trị có cực và một liên kết cộng hóa trị tọa độ. Liên kết giữa C và Cl sẽ là liên kết cộng hóa trị có cực do sự khác biệt về độ âm điện. SiO₂ là cát và là chất rắn có mạng lưới. Một mẫu sắt sẽ có liên kết kim loại vì chỉ có nguyên tử kim loại. Fluorine là chất lưỡng nguyên tử và sẽ có liên kết cộng hóa trị không phân cực. HBr sẽ có liên kết cộng hóa trị có cực vì sự khác biệt lớn về độ âm điện giữa hai phi kim này.
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

