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

const Chuong3 = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require('../anhlythuyet/Atomic.png')}
          style={styles.image1}
        />
        <Text style={styles.learntitle}>Cấu trúc nguyên tử</Text>
        <Text style={styles.learntitle1}>Giới thiệu</Text>
        <Text style={styles.content}>Cấu trúc nguyên tử của một nguyên tố liên quan đến cấu tạo hạt nhân của nó và sự sắp xếp của các electron xung quanh nó. Về cơ bản, cấu trúc nguyên tử của vật chất được tạo thành từ các proton, electron và neutron.</Text>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('TomtatlichsucuanguyentuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>I. Tóm tắt lịch sử của nguyên tử</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CachathacuanguyentuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>II. Các hạt hạ nguyên tử</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DongviScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>III. Đồng vị</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('MohinhbohrcuanguyentuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>IV. Mô hình Bohr của nguyên tử</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('MohinhcosongScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>V. Mô hình cơ sóng</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DientuhoatrivasodochamScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VI. Điện tử hóa trị và sơ đồ chấm</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DientichhatnhanhieuquaScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VII. Điện tích hạt nhân hiệu quả</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SoluongtuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VIII. Số lượng tử</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LaitaoScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>IX. Lai tạo</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('IonvaquytacoctetScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>X. Ion và Quy tắc Octet</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CacngoailedoivoiquytacOctetScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XI. Các ngoại lệ đối với Quy tắc Octet</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DongIsoelectronicScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XII. Dòng Isoelectronic</Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 70,
    backgroundColor: '#0C0042',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  scrollView: {},
  boxnew: {
    marginTop: 10,
    alignItems: 'center',
  },
  mainnews1: {
    width: 340,
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
    maxWidth: 313,
    overflow: 'hidden',
    marginLeft: 25,
    marginTop: 20,
  },
  learntitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
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
  boxtext1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  learn1: {
    width: 75,
    height: 75,
    marginTop: 20,
    marginLeft: 10,
  },
});

export default Chuong3;
