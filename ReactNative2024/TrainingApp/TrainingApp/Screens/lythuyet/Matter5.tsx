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
          source={require('../anhlythuyet/bonding.png')}
          style={styles.image1}
        />
        <Text style={styles.learntitle}>Liên Kết</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LienketnoiphantuvalienketlienphantuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>I. Liên kết nội phân tử và liên kết liên phân tử</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LienketionScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>II. Liên kết ion</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LienketconghoatriScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>III. Liên kết cộng hóa trị </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LienketsigmavalienketpiScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>IV. Liên kết Sigma và liên kết Pi</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LienketmangtinhthelienketconggiatrivaloaikimlienketScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>V. Liên kết trong mạng tinh thể, liên kết cộng giá trị và loại kim liên kết</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LucluongcucvatinhphancuccuaphantuScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VI. Lực lưỡng cực và tính phân cực của phân tử</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CautrucconghuongScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VII. Cấu trúc cộng hưởng</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LythuyetVSEPRScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>VIII. Lý thuyết VSEPR</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LienketHydrogenScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>IX. Liên kết Hydrogen </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('VanderwaalsScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>X. Lực Van der Waals (London Dispersion)  </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LuchutphantuionScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XI. Lực hút phân tử-ion </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('GoitencachopchatScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XII. Gọi tên các hợp chất </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('XacdinhcongthuchoahocScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XIII. Xác định công thức hóa học</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PPstockScreen')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Text style={styles.maintext1}>XIV. Phương pháp Stock</Text>
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
