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
        <Text style={styles.title}>Lai tạo</Text>
        <Text style={styles.content}>
          &emsp;Carbon là một ngoại lệ đối với các quy tắc viết biểu đồ chấm hóa trị như mô tả ở trên. Việc kiểm tra chặt chẽ carbon và các electron hóa trị của nó cho thấy một câu chuyện khác, bằng chứng là carbon có thể tạo ra bốn liên kết. Carbon có 6 electron và cấu hình electron của nó là Carbon là một ngoại lệ đối với các quy tắc viết biểu đồ chấm hóa trị như mô tả ở trên. Việc kiểm tra chặt chẽ carbon và các electron hóa trị của nó cho thấy một câu chuyện khác, bằng chứng là carbon có thể tạo ra bốn liên kết. Carbon có 6 electron và cấu hình electron của nó là 1s²2s²2p² . Sơ đồ dấu chấm hóa trị theo cách sắp xếp này sẽ trông giống như:
        </Text>
        <Image
          source={require('../anhlythuyet/Laitao1.png')}
          style={styles.image3}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Theo sơ đồ chấm này, carbon chỉ tạo ra hai liên kết. Tuy nhiên, đây không phải là trường hợp tất cả. Thay vào đó, carbon có sự sắp xếp 1s²2s¹2p³ hoặc 
</Text>
        <Image
          source={require('../anhlythuyet/Laitao2.png')}
          style={styles.image3}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Đây được gọi là sự lai hóa sp³ của nguyên tử cacbon. Một trong các electron đã chuyển từ quỹ đạo 2s sang quỹ đạo 2p. Điều này hiện mang lại cho carbon bốn electron đơn lẻ thay vì hai electron ghép đôi và hai electron chưa ghép cặp. Đó là các electron đơn lẻ liên kết với nhau để cố gắng trở thành cặp đôi. Bởi vì có bốn electron đơn trong nguyên tử carbon lai sp³ nên carbon có thể liên kết bốn nguyên tử khác nhau với bốn electron đơn của nó. Để có bốn electron là electron chưa ghép cặp, quá trình lai hóa sp³ cũng làm thay đổi hình dạng của các quỹ đạo s và p có liên quan đến liên kết. Sự thay đổi này được thể hiện trong Hình 3.8

        </Text>
        <Image
          source={require('../anhlythuyet/3.8.png')}
          style={styles.image2}
          resizeMode="contain"
        />
      <Text style={styles.content}>
          &emsp;Sự sắp xếp mới được gọi là hình tứ diện vì các nguyên tử tạo với nhau một góc 109,5 độ. Điều này có thể được nhìn thấy trong hình dạng ba chiều của metan, một phân tử có dạng hình học phân tử tứ diện. Nếu chỉ có ba nguyên tử liên kết với nguyên tử lai hóa sp³ thì hình học phân tử được gọi là hình chóp tam giác. Amoniac là một ví dụ về điều này. Cuối cùng, trong nước oxy bị lai hóa sp³ nhưng vì chỉ có hai nguyên tử liên kết với oxy nên hình dạng phân tử được cho là bị uốn cong (xem Hình 3.9).

        </Text>
        <Image
          source={require('../anhlythuyet/3.9.1.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Image
          source={require('../anhlythuyet/3.9.2.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Image
          source={require('../anhlythuyet/3.9.3.png')}
          style={styles.image2}
          resizeMode="contain"
        />
         <Text style={styles.content}>
          &emsp;Trong lai hóa sp², một obitan 2s và hai obitan 2p kết hợp để tạo thành hình dạng mới như trên Hình 3.10.

        </Text>
        <Image
          source={require('../anhlythuyet/3.10.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Ở trạng thái lai hóa này, carbon sẽ tạo ra hai liên kết đơn và một liên kết đôi. Điều này sẽ cho phép nguyên tử carbon liên kết với ba nguyên tử khác nhau. Sự định hướng của các nguyên tử này xung quanh nguyên tử carbon sẽ là hình học phân tử phẳng lượng giác. Góc của các nguyên tử này với nhau là 120 độ. Điều này được thể hiện qua sơ đồ ethene trên Hình 3.11.

        </Text>
        <Image
          source={require('../anhlythuyet/3.11.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Khi một nguyên tử được lai hóa sp, quỹ đạo của một s kết hợp với một quỹ đạo p. Điều này cho phép một nguyên tử như carbon tạo ra hai liên kết đôi hoặc một liên kết đơn và một liên kết ba. Hai nguyên tử liên kết với nguyên tử carbon trong trường hợp này sẽ tự định hướng cách nhau 180 độ. Đây được gọi là hình học phân tử tuyến tính (xem Hình 3.12).

        </Text>
        <Image
          source={require('../anhlythuyet/3.12.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Image
          source={require('../anhlythuyet/Bang3chapter3.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          &emsp;Trên đây là so sánh song song giữa ba trạng thái lai:
          
        </Text>
        <Text style={styles.title}>Vấn đề</Text>
        <Text style={styles.content}>
          &emsp;Sự lai hóa của cacbon trong CCl₄, trong HCN và trong CH₂O là gì?
          
        </Text>
        <Text style={styles.title}>Giải pháp</Text>
        <Text style={styles.content}>
          &emsp;Trong CCl₄, nguyên tử carbon tạo thành tất cả các liên kết đơn. Carbon được lai hóa sp³ và các nguyên tử chlorine sẽ cách nhau 109.5 độ. Carbon trong HCN có liên kết đơn với nguyên tử hydrogen và liên kết ba với nguyên tử nitrogen. Nguyên tử carbon này được lai hóa sp. Nguyên tử carbon trong CH₂O có liên kết đôi với nguyên tử oxy và liên kết đơn với nguyên tử hydrogen. Nguyên tử carbon này ở trạng thái lai hóa sp².
          
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

