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
import { User, MainComponent, Notification} from 'iconsax-react-native';


const Thunhiet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Phản ứng thu nhiệt và tỏa nhiệt</Text>
        <Text style={styles.content}>&emsp;Năng lượng cũng có thể được hấp thụ hoặc giải phóng trong một phản ứng. Khi năng lượng giải phóng nhiều hơn năng lượng hấp thụ thì phản ứng được gọi là phản ứng tỏa nhiệt. Khi năng lượng được hấp thụ nhiều hơn năng lượng giải phóng, phản ứng được gọi là phản ứng thu nhiệt. Có thể sử dụng biểu đồ thế năng để vẽ đồ thị những thay đổi này như trong Hình 1.1. {'\n'}
        Tỏa nhiệt—năng lượng được giải phóng nhiều hơn năng lượng được hấp thụ.{'\n'}
Thu nhiệt—năng lượng được hấp thụ nhiều hơn năng lượng giải phóng. {'\n'}
A + B (chất tham gia) → C + D (sản phẩm) + Nhiệt;  A + B (chất tham gia) +  Nhiệt →  C + D (sản phẩm) {'\n'}
&emsp;Lưu ý rằng năng lượng luôn được hấp thụ và giải phóng trong một phản ứng. Lượng tương đối là nguyên nhân gây ra phản ứng thu nhiệt hoặc tỏa nhiệt. Ngoài ra, cần có năng lượng để bắt đầu phản ứng. Đây được gọi là năng lượng kích hoạt (Ea).
Cuối cùng, hãy chú ý đến sự khác biệt về năng lượng của<Text style={{ fontStyle: 'italic' }}> chất phản ứng và sản phẩm</Text>. {'\n'} &emsp; Sự thay đổi năng lượng của chất phản ứng hoặc sản phẩm được gọi là<Text style={{ fontStyle: 'italic' }}> nhiệt của phản ứng</Text>. Điều này được ký hiệu bằng ký hiệu ΔH. Biểu tượng này tượng trưng cho sự thay đổi năng lượng nhiệt, hoặc<Text style={{ fontStyle: 'italic' }}> enthalpy</Text>. Cách đơn giản để ghi nhớ cách tính sự thay đổi entanpy là sử dụng công cụ ghi nhớ này: {'\n'}
ΔH = thế năng của sản phẩm trừ đi thế năng của chất phản ứng
hoặc {'\n'}
ΔH = PEP − PER (delta H bằng “hạt tiêu”).
</Text>
<Image
                source={require('../anhlythuyet/chapter1.1.1.png')}
                style={styles.image1}
              />
              <Text style={styles.content}>&emsp;Khi ΔH có giá trị dương, phản ứng được gọi là phản ứng thu nhiệt (nhập nhiệt). Khi ΔH có giá trị âm, phản ứng được cho là tỏa nhiệt (tỏa nhiệt).{'\n'}</Text> 
        <Text style={styles.mtitle}>Vấn đề</Text>
        <Text style={styles.content}>Trong một phản ứng, thế năng của các chất phản ứng là 150 jun/mol và thế năng của các sản phẩm là 400 jun/mol. Nhiệt của phản ứng cho phản ứng này là gì? Điều này chứng tỏ một quá trình thu nhiệt hay tỏa nhiệt?</Text>
        <Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>Sử dụng PEP − PER ΔH = 400 jun/mol −150 jun/mol = +250 jun/mol. Vì dấu dương nên phản ứng là thu nhiệt.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    // Remove flexDirection: 'row'
  },
  content: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  mtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
  },
  mtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 10,
  },
  image1: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
});
export default Thunhiet;
