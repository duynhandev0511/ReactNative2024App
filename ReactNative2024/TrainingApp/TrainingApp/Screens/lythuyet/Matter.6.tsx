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


const Matter= ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image
                source={require('../anhlythuyet/canbang.png')}
                style={styles.image1}
              />
        <Text style={styles.learntitle}>Phép cân bằng hóa học và giải pháp hóa học</Text>
        <Text style={styles.learntitle1}>Giới thiệu</Text>
        <Text style={styles.content}>Phép cân bằng hóa học là việc điều chỉnh hệ số của các chất trong một phương trình hóa học sao cho số nguyên tử của mỗi nguyên tố bằng nhau ở cả hai bên phương trình và Giải pháp hóa học là dung dịch được tạo thành khi một chất tan trong dung môi. Giải pháp hóa học có thể là dung dịch, dung dịch keo, hoặc hỗn hợp lỏng. </Text>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CongthuchoahocScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>I. Công thức hóa học</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CanbangphuongtrinhhoahocScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>II. Cân bằng phương trình hóa học</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('TilemolScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>III. Tỉ lệ mol</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('MolklvaphantuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>IV. Mol, khối lượng, khối lượng và phân tử</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ThuocthuhanchevaduthuaScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>V. Thuốc thử hạn chế và dư thừa</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ThanhphanScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VI. Thành Phần Phần Trăm</Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CongthucthucnghiemScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VII. Công thức thực nghiệm từ thành phần phần trăm</Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('NongdovaphaloangScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VIII. Nồng độ và pha loãng</Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ThuoctinhchungScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>IX. Thuộc tính chung</Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DohoatancuahopchatScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>X. Độ hòa tan của hợp chất </Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('IonthugonScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XI. Phương trình ion thu gọn </Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Nangsuatphantram1Screen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XI. Năng suất phần trăm </Text>
            </View>
            </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Chia không gian ngang đều cho các phần tử trong header
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 70,
    backgroundColor: '#0C0042',
  },
  logoContainer: {
    flexDirection: 'row', // Hiển thị các phần tử trong logo container theo hàng ngang
    alignItems: 'center', // Canh giữa các phần tử trong logo container
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row', // Hiển thị các phần tử trong icon container theo hàng ngang
    alignItems: 'center', // Canh giữa các phần tử trong icon container
  },
  icon: {
    marginLeft: 20, // Khoảng cách giữa các icon
  },
  scrollView: {
    // Remove flexDirection: 'row'
  },
  boxnew: {
    marginTop: 10,
    alignItems: 'center',
  },
  mainnews1: {
    width: 340 ,
    height: 70,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
  },
  maintext1: {
    width: 'auto',
    color: 'black',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 10,
  },
  content: {
    color: 'black',
    marginLeft: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image1: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    marginHorizontal: 135,
    marginTop: 30,
  },
  itemFooter: {
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 25,
    marginTop: 20,
  },
  
  learntitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  
  learntitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0C0042',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  textitems: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginTop: 25,
    width: 200,
  },
  boxtext: {
    flexDirection: 'row',
  },
  //box của tiêu đề lý thuyết
  boxtext1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  learn1: {
    width: 75,
    height: 75,
    marginTop: 20,
    marginLeft: 10,
  },
});
export default Matter;