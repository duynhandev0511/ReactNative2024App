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
        <Text style={styles.title}>Cân bằng phương trình hóa học</Text>
        <Text style={styles.content}>
          &emsp;Cân bằng một phương trình hóa học đòi hỏi sự hiểu biết về Định luật bảo toàn khối lượng, trong đó nói rằng khối lượng không thể được tạo ra hay phá hủy. Khối lượng các chất tham gia phản ứng sẽ bằng khối lượng các chất sản phẩm. Công lao cho khám phá này được trao cho Antoine Lavoisier, người đã thực hiện các phép đo rất cẩn thận về số lượng hóa chất và thiết bị mà ông sử dụng. Sự bảo toàn khối lượng cũng đúng khi cân bằng các phương trình. Số nguyên tử của mỗi nguyên tố trong chất phản ứng sẽ bằng số nguyên tử của từng nguyên tố trong sản phẩm. Một công cụ ghi nhớ hữu ích để bảo toàn khối lượng là “Cái gì vào thì phải ra”.
</Text>
<Text style={styles.content}>
          &emsp;Hai quy tắc quan trọng nhất cần nhớ khi cân bằng phương trình là:
</Text>
<Text style={styles.content}>
          &emsp;•	Bạn chỉ có thể thay đổi các hệ số.
</Text>
<Text style={styles.content}>
          &emsp;•	Bạn phải sử dụng hệ số nguyên thấp nhất
</Text>
<Text style={styles.content}>
          &emsp;Để lại chất đơn giản nhất cho đến cuối cùng:
</Text>
<Text style={styles.content}>
          &emsp;Từng bước bạn có thể cân bằng một phương trình. Hãy thử ví dụ này:
</Text>
<Text style={styles.content}>
          &emsp;Al + O₂ → Al₂O₃
</Text>
<Text style={styles.content}>
          &emsp;Kiểm tra cho thấy rằng bạn nên để chất phản ứng Al ở cuối cùng vì nó “đơn giản nhất” và không liên kết với bất kỳ nguyên tố nào khác. Kiểm tra cũng cho thấy hai nguyên tử oxygen tham gia phản ứng và ba nguyên tử rời khỏi phản ứng. Số hai và số ba là ước số của số sáu. Do đó, bạn có thể thay đổi các hệ số trước các chất chứa oxy và nhận được:
</Text>
<Text style={styles.content}>
          &emsp;Al + 3O₂ → 2Al₂O₃
</Text>
<Text style={styles.content}>
          &emsp;Điều này hiện cho thấy tổng cộng sáu nguyên tử oxygen là chất phản ứng và sáu nguyên tử oxygen là sản phẩm. Các hệ số này là bội số và không chỉ thay đổi số lượng nguyên tử oxygen mà còn thay đổi số lượng nguyên tử nhôm trong aluminium oxide. Bây giờ bạn có bốn nguyên tử nhôm ở vế phải của phương trình. Để cân bằng điều này, đặt hệ số 4 trước Al ở phía chất phản ứng và nhận được:
</Text>
<Text style={styles.content}>4Al + 3O₂ → 2Al₂O₃
</Text>
<Text style={styles.content}>Liệu tất cả có cộng lại không? Bốn nguyên tử nhôm và sáu nguyên tử oxy nằm ở phía chất phản ứng của phương trình và bốn nguyên tử nhôm và sáu nguyên tử oxy nằm ở phía sản phẩm của phương trình.
</Text>
<Text style={styles.title}>Vấn đề:</Text>
<Text style={styles.content}>1.	Zn + HCl → H₂ + ZnCl₂
</Text>
<Text style={styles.content}>2.	SiO₂ + HF → SiF₄ + H₂O
</Text>
<Text style={styles.content}>3.	SiCl₄ + Mg → Si + MgCl₂
</Text>
<Text style={styles.content}>4.	H₂ + N₂ → NH₃
</Text>
<Text style={styles.content}>5.	SO₃ → S + O₂
</Text>
<Text style={styles.title}>Giải pháp:</Text>
<Text style={styles.content}>1.	Zn + 2HCl → H₂ + ZnCl₂
</Text>
<Text style={styles.content}>2.	SiO₂ + 4HF → SiF₄ + 2H₂O
</Text>
<Text style={styles.content}>3.	SiCl₄ + 2Mg → Si + 2MgCl₂</Text>
<Text style={styles.content}>4.	3H₂ + N₂ → 2NH₃
</Text>
<Text style={styles.content}>5.	2SO₃ → 2S + 3O₂
</Text>
<Text style={styles.content}>Ngoài việc cân bằng các phương trình hóa học, bạn còn có thể phân loại các loại phản ứng xảy ra. Có bốn loại phản ứng: tổng hợp, phân hủy thay thế đơn và thay thế kép. Giải thích và ví dụ của từng như sau:
</Text>
<Text style={styles.content}>• Trong phản ứng tổng hợp, nhiều chất kết hợp với nhau tạo thành một hợp chất:
</Text>
<Text style={styles.content}>A + B → AB
</Text>
<Text style={styles.content}>••	Trong phản ứng phân hủy, một hợp chất phân hủy thành nhiều chất:
</Text>
<Text style={styles.content}>YZ → Y + Z
</Text>
<Text style={styles.content}>•	Trong một phản ứng thay thế duy nhất, một nguyên tố thay thế một nguyên tố khác.
</Text>
<Text style={styles.content}>AB + C → CB + A
</Text>
<Text style={styles.content}>•	Trong phản ứng thay thế kép, hai yếu tố “đổi nhau”:
</Text>
<Text style={styles.content}>AB + XY → AY + XB
</Text>
<Text style={styles.title}>Vấn đề:</Text>
<Text style={styles.content}>Phân loại năm phương trình cân bằng ở trên thành thay thế đơn, thay thế kép, tổng hợp hoặc phân rã.
</Text>
<Text style={styles.title}>Giải pháp:</Text>
<Text style={styles.content}>1.	Thay thế một lần
</Text>
<Text style={styles.content}>2.	Thay thế kép
</Text>
<Text style={styles.content}>3.	Thay thế một lần
</Text>
<Text style={styles.content}>4.	Tổng hợp
</Text>
<Text style={styles.content}>5.	Phân hủy
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
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 30,
    marginLeft: 100,
  },
});

export default Dongvi;

