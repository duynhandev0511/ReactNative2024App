import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Explore = ({navigation}:any) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.tieude}>Tin tức</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.boxnews}>
            <View style={styles.mainnews}>
              <Image
                source={require('../assets/Images/Thumnail.png')}
                style={styles.imgnews}
              />
              <Text style={styles.maintext}>Bắt đầu đăng ký dự thi đánh giá năng lực Đại học Quốc gia TP.HCM đợt 2</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.tieudetop}>Mới nhất</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Image
                source={require('../assets/Images/dangkiduthi.jpg')}
                style={styles.img}
              />
              <Text style={styles.maintext1}>Hướng dẫn thí sinh đăng kí dự thi tốt nghiệp THPT 2024 trực tuyến</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Image
                source={require('../assets/Images/xettuyen.jpg')}
                style={styles.img}
              />
              <Text style={styles.maintext1}>20 phương thức xét tuyển đại học năm 2024, thí sinh rộng cửa vào đại học</Text>
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
  tieude: {
    color: '#696969',
    fontWeight: '700',
    fontSize: 28,
    marginTop: 60,
    marginLeft: 10,
  },
  tieudetop: {
    color: '#696969',
    fontWeight: '700',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  boxnews: {
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  boxnew: {
    marginTop: 10,
    alignItems: 'center',
  },
  mainnews: {
    width: 340 ,
    height: 285,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  mainnews1: {
    width: 340 ,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
  },
  imgnews: {
    width: 310 ,
    height: 180,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginTop: 15,
  },
  img: {
    width: 106 ,
    height: 73,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginLeft: 10,
  },
  maintext: {
    width: 310,
    color: 'black',
    fontWeight: '800',
    textAlign: 'left',
    fontSize: 18,
    marginTop: 20,
  },
  maintext1: {
    width: '60%',
    color: 'black',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 10,
    // marginTop: 20,
  },
});

export default Explore;
